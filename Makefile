# ===========================================
# Parmenid Landing - Makefile
# ===========================================

.PHONY: help dev dev-build dev-down prod prod-build prod-down ssl-init ssl-renew logs ps clean shell-app shell-nginx nginx-test nginx-reload

# Default target
help:
	@echo "Parmenid Landing - Available commands:"
	@echo ""
	@echo "Development:"
	@echo "  make dev          - Start dev (without rebuild)"
	@echo "  make dev-build    - Build and start dev"
	@echo "  make dev-down     - Stop dev containers"
	@echo "  make dev-logs     - Show dev logs"
	@echo ""
	@echo "Production:"
	@echo "  make prod         - Start prod (without rebuild)"
	@echo "  make prod-build   - Build and start prod"
	@echo "  make prod-down    - Stop prod containers"
	@echo "  make prod-logs    - Show prod logs"
	@echo ""
	@echo "SSL:"
	@echo "  make ssl-init     - Get SSL certificate (first time)"
	@echo "  make ssl-renew    - Renew SSL certificate"
	@echo ""
	@echo "Utilities:"
	@echo "  make ps           - Show container status"
	@echo "  make clean        - Remove all containers and images"
	@echo "  make shell-app    - Shell into app container"
	@echo "  make shell-nginx  - Shell into nginx container"
	@echo "  make nginx-test   - Test nginx configuration"
	@echo "  make nginx-reload - Reload nginx configuration"

# ===========================================
# Development
# ===========================================

dev:
	docker compose -f docker-compose.dev.yml up -d

dev-build:
	docker compose -f docker-compose.dev.yml up -d --build

dev-down:
	docker compose -f docker-compose.dev.yml down

dev-logs:
	docker compose -f docker-compose.dev.yml logs -f

# ===========================================
# Production
# ===========================================

prod:
	docker compose -f docker-compose.prod.yml up -d

prod-build:
	docker compose -f docker-compose.prod.yml up -d --build

prod-down:
	docker compose -f docker-compose.prod.yml down

prod-logs:
	docker compose -f docker-compose.prod.yml logs -f

# ===========================================
# SSL
# ===========================================

ssl-init:
	@chmod +x scripts/init-ssl.sh
	./scripts/init-ssl.sh

ssl-renew:
	docker compose -f docker-compose.prod.yml exec certbot certbot renew
	docker compose -f docker-compose.prod.yml exec nginx nginx -s reload

# ===========================================
# Utilities
# ===========================================

ps:
	@echo "=== Development ===" 
	@docker compose -f docker-compose.dev.yml ps 2>/dev/null || echo "Not running"
	@echo ""
	@echo "=== Production ==="
	@docker compose -f docker-compose.prod.yml ps 2>/dev/null || echo "Not running"

logs:
	@echo "Use 'make dev-logs' or 'make prod-logs'"

clean:
	docker compose -f docker-compose.dev.yml down -v --rmi all 2>/dev/null || true
	docker compose -f docker-compose.prod.yml down -v --rmi all 2>/dev/null || true
	docker system prune -f

shell-app:
	docker compose -f docker-compose.prod.yml exec app sh

shell-nginx:
	docker compose -f docker-compose.prod.yml exec nginx sh

nginx-test:
	docker compose -f docker-compose.prod.yml exec nginx nginx -t

nginx-reload:
	docker compose -f docker-compose.prod.yml exec nginx nginx -s reload

# ===========================================
# Quick Commands
# ===========================================

# Rebuild and restart only the app (zero-downtime update)
update-app:
	docker compose -f docker-compose.prod.yml build app
	docker compose -f docker-compose.prod.yml up -d --no-deps app

# Full restart
restart:
	docker compose -f docker-compose.prod.yml restart

# View resource usage
stats:
	docker stats --no-stream

