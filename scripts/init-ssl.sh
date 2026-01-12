#!/bin/bash

# ===========================================
# SSL Certificate Setup Script for parmenid.tech
# ===========================================
# Usage: ./scripts/init-ssl.sh [domain] [email]
# Example: ./scripts/init-ssl.sh parmenid.tech admin@parmenid.tech

set -e

# Configuration
DOMAIN="${1:-parmenid.tech}"
EMAIL="${2:-${SSL_EMAIL:-admin@parmenid.tech}}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

echo "🔐 Setting up SSL certificate"
echo "   Domain: $DOMAIN"
echo "   Email: $EMAIL"
echo ""

cd "$PROJECT_DIR"

# Create directories
echo "📁 Creating directories..."
mkdir -p ./certbot/conf
mkdir -p ./certbot/www

# Check if certificate already exists
if [ -d "./certbot/conf/live/$DOMAIN" ]; then
    echo "⚠️  Certificate already exists for $DOMAIN"
    read -p "   Renew certificate? [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Aborted"
        exit 1
    fi
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker compose -f docker-compose.prod.yml down 2>/dev/null || true

# Start temporary nginx for ACME challenge
echo "🚀 Starting temporary nginx for ACME challenge..."
docker run -d --rm \
    --name ssl_init_nginx \
    -p 80:80 \
    -v "$(pwd)/nginx/nginx-ssl-init.conf:/etc/nginx/nginx.conf:ro" \
    -v "$(pwd)/certbot/www:/var/www/certbot:ro" \
    nginx:alpine

# Wait for nginx to start
sleep 3

# Verify nginx is running
if ! docker ps | grep -q ssl_init_nginx; then
    echo "❌ Failed to start temporary nginx"
    exit 1
fi

echo "✅ Temporary nginx is running"

# Request certificate
echo "📜 Requesting SSL certificate from Let's Encrypt..."
docker run --rm \
    -v "$(pwd)/certbot/conf:/etc/letsencrypt" \
    -v "$(pwd)/certbot/www:/var/www/certbot" \
    certbot/certbot certonly --webroot \
    -w /var/www/certbot \
    -d "$DOMAIN" \
    -d "www.$DOMAIN" \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    --force-renewal

# Stop temporary nginx
echo "🛑 Stopping temporary nginx..."
docker stop ssl_init_nginx 2>/dev/null || true

# Verify certificate was obtained
if [ ! -f "./certbot/conf/live/$DOMAIN/fullchain.pem" ]; then
    echo "❌ Failed to obtain SSL certificate!"
    echo "   Check DNS settings and try again"
    exit 1
fi

echo "✅ SSL certificate obtained successfully!"

# Start production stack
echo "🚀 Starting production stack..."
docker compose -f docker-compose.prod.yml up -d --build

# Wait for services to start
echo "⏳ Waiting for services to start..."
sleep 10

# Check if services are running
if docker compose -f docker-compose.prod.yml ps | grep -q "running"; then
    echo ""
    echo "✅ Production stack is running!"
    echo ""
    echo "🌐 Your site is available at:"
    echo "   https://$DOMAIN"
    echo "   https://www.$DOMAIN"
    echo ""
    echo "📊 Check status with:"
    echo "   docker compose -f docker-compose.prod.yml ps"
    echo "   docker compose -f docker-compose.prod.yml logs -f"
else
    echo "⚠️  Some services may not be running properly"
    echo "   Check logs: docker compose -f docker-compose.prod.yml logs"
fi

