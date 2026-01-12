# API для корпоративного сайта (parmenid.tech)

**Версия:** 1.0  
**Дата:** 12 января 2026  
**Backend URL:** `https://api.parmenid.tech`

---

## 📋 Обзор

Этот документ описывает API эндпоинты, которые можно использовать на корпоративном сайте **без авторизации**. Все эндпоинты предназначены для публичного доступа и лидогенерации.

---

## 🔗 Базовый URL

```
Production: https://api.parmenid.tech/api/v1
Development: http://localhost:8000/api/v1
```

---

## 📝 Доступные публичные API

| Эндпоинт | Метод | Назначение | Rate Limit |
|----------|-------|------------|------------|
| `/plan-requests/` | POST | Заявки (демо, контакт, тариф) | 5/час на IP |
| `/auth/register` | POST | Регистрация пользователя | 10/мин |
| `/auth/login` | POST | Вход в систему | 10/мин |
| `/chat/{avatar_id}/info` | GET | Инфо о чат-боте (для виджета) | 60/мин |
| `/chat/{avatar_id}/sessions` | POST | Создание чат-сессии | 60/мин |
| `/chat/{avatar_id}/message` | POST | Отправка сообщения боту | 30/мин |
| `/chat/{avatar_id}/stream` | POST | Стриминг ответа (SSE) | 30/мин |
| `/health` | GET | Статус API | — |

---

## 1️⃣ Заявки (Plan Requests) — ГЛАВНЫЙ ДЛЯ ЛЕНДИНГА

### Создание заявки

**Основной эндпоинт для лидогенерации!**

```
POST /api/v1/plan-requests/
Content-Type: application/json
```

#### Типы заявок

| Тип | Описание | Использование на сайте |
|-----|----------|------------------------|
| `demo_request` | Запрос демонстрации | Форма "Заказать демо" |
| `contact_sales` | Связь с отделом продаж | Форма "Связаться с нами" |
| `plan_upgrade` | Повышение тарифа | Страница тарифов |

#### Request Body

```typescript
interface PlanRequestCreate {
  request_type: "demo_request" | "contact_sales" | "plan_upgrade";
  
  // Контакты (минимум 1 обязателен!)
  contact_email?: string;      // Email
  contact_phone?: string;      // Телефон
  contact_telegram?: string;   // Telegram username
  
  // Дополнительно
  message?: string;            // Сообщение (до 2000 символов)
  requested_plan?: string;     // Только для plan_upgrade
}
```

#### Примеры запросов

**Форма "Заказать демо":**
```javascript
const response = await fetch('https://api.parmenid.tech/api/v1/plan-requests/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    request_type: 'demo_request',
    contact_email: 'client@company.com',
    contact_phone: '+7 999 123 45 67',
    message: 'Интересует интеграция в CRM'
  })
});
```

**Форма "Связаться с нами":**
```javascript
const response = await fetch('https://api.parmenid.tech/api/v1/plan-requests/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    request_type: 'contact_sales',
    contact_email: 'client@company.com',
    contact_telegram: '@username',
    message: 'Хотим обсудить корпоративное решение'
  })
});
```

**Кнопка "Выбрать тариф" на странице Pricing:**
```javascript
const response = await fetch('https://api.parmenid.tech/api/v1/plan-requests/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    request_type: 'plan_upgrade',
    requested_plan: 'growth',  // free | starter | growth | scale | enterprise
    contact_email: 'client@company.com'
  })
});
```

#### Response (201 Created)

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "request_type": "demo_request",
  "status": "new",
  "requested_plan": null,
  "created_at": "2026-01-12T10:30:00Z"
}
```

#### Ошибки

| HTTP | Код | Причина | Решение |
|------|-----|---------|---------|
| 422 | `VALIDATION_ERROR` | Нет контактов | Добавьте email/phone/telegram |
| 422 | `VALIDATION_ERROR` | Нет `requested_plan` для plan_upgrade | Укажите тариф |
| 429 | `RATE_LIMIT` | >5 заявок/час с IP | Подождите или покажите капчу |

#### Пример обработки на фронте

```typescript
async function submitDemoRequest(formData: FormData) {
  try {
    const response = await fetch('/api/v1/plan-requests/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        request_type: 'demo_request',
        contact_email: formData.get('email'),
        contact_phone: formData.get('phone'),
        message: formData.get('message'),
      }),
    });

    if (response.status === 201) {
      // Успех! Показать благодарность
      showSuccessModal('Спасибо! Мы свяжемся с вами в ближайшее время.');
      return true;
    }

    if (response.status === 422) {
      const error = await response.json();
      showError(error.error.message);
      return false;
    }

    if (response.status === 429) {
      showError('Слишком много запросов. Попробуйте позже.');
      return false;
    }

  } catch (e) {
    showError('Ошибка сети. Проверьте подключение.');
    return false;
  }
}
```

---

## 2️⃣ Регистрация пользователя

Для self-service регистрации на сайте.

```
POST /api/v1/auth/register
Content-Type: application/json
```

#### Request Body

```typescript
interface UserRegister {
  email: string;       // Обязательно
  password: string;    // Мин 8 символов, 1 заглавная, 1 цифра
  full_name?: string;  // Опционально
}
```

#### Пример

```javascript
const response = await fetch('https://api.parmenid.tech/api/v1/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'SecurePass123!',
    full_name: 'Иван Петров'
  })
});
```

#### Response (201 Created)

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "full_name": "Иван Петров",
  "role": "owner",
  "status": "pending",
  "is_email_verified": false,
  "created_at": "2026-01-12T10:30:00Z",
  "last_login_at": null
}
```

#### Ошибки

| HTTP | Код | Причина |
|------|-----|---------|
| 409 | `AUTH_USER_EXISTS` | Email уже занят |
| 422 | `VALIDATION_ERROR` | Слабый пароль |

---

## 3️⃣ Вход в систему

Для авторизации зарегистрированных пользователей.

```
POST /api/v1/auth/login
Content-Type: application/json
```

#### Request Body

```typescript
interface UserLogin {
  email: string;
  password: string;
}
```

#### Response (200 OK)

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 1800
}
```

**После логина:** редирект на `admin.parmenid.tech` с токеном.

---

## 4️⃣ Встраиваемый чат-виджет (опционально)

Если хотите показать демо-бота прямо на лендинге.

### 4.1 Получить информацию о боте

```
GET /api/v1/chat/{avatar_id}/info
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "AI Консультант",
  "description": "Помогу ответить на вопросы о платформе",
  "avatar_image_url": "https://...",
  "primary_color": "#3B82F6",
  "welcome_message": "Здравствуйте! Чем могу помочь?"
}
```

### 4.2 Создать сессию чата

```
POST /api/v1/chat/{avatar_id}/sessions?source=web
```

**Response:**
```json
{
  "id": "session-uuid",
  "avatar_id": "avatar-uuid",
  "source": "web",
  "is_active": true,
  "messages_count": 0,
  "created_at": "2026-01-12T10:30:00Z"
}
```

### 4.3 Отправить сообщение

```
POST /api/v1/chat/{avatar_id}/message?session_id={session_id}
Content-Type: application/json

{
  "content": "Расскажите о тарифах"
}
```

**Response:**
```json
{
  "user_message": {
    "id": "msg-uuid-1",
    "role": "user",
    "content": "Расскажите о тарифах",
    "created_at": "2026-01-12T10:30:00Z"
  },
  "assistant_message": {
    "id": "msg-uuid-2",
    "role": "assistant",
    "content": "У нас есть несколько тарифных планов...",
    "tokens_used": 150,
    "sources": [...],
    "created_at": "2026-01-12T10:30:01Z"
  }
}
```

### 4.4 Стриминг ответа (SSE)

Для плавного отображения ответа по частям:

```
POST /api/v1/chat/{avatar_id}/stream?session_id={session_id}&content=Привет
```

**Response:** `text/event-stream`

```
event: message_received
data: {"message_id": "uuid"}

event: chunk
data: {"content": "Здравствуйте! "}

event: chunk
data: {"content": "Чем могу помочь?"}

event: done
data: {"message_id": "uuid", "tokens_used": 42}
```

---

## 5️⃣ Health Check

Для мониторинга доступности API.

```
GET /api/v1/health
```

**Response:**
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "environment": "production",
  "timestamp": "2026-01-12T10:30:00Z"
}
```

---

## 🎨 Рекомендации по UI на сайте

### Формы для лидогенерации

| Секция сайта | Тип заявки | Обязательные поля |
|--------------|------------|-------------------|
| Hero секция | `demo_request` | email |
| Страница Pricing | `plan_upgrade` | email + requested_plan |
| Футер / Контакты | `contact_sales` | email или telegram |
| Popup на уход | `demo_request` | email |

### Сообщения после отправки

```
✅ Успех (201):
"Спасибо за заявку! Мы свяжемся с вами в течение 24 часов."

⚠️ Уже существует (409, для регистрации):
"Пользователь с таким email уже зарегистрирован. Войдите в личный кабинет."

❌ Rate limit (429):
"Вы уже отправили заявку. Мы обязательно свяжемся с вами!"

❌ Валидация (422):
"Пожалуйста, укажите способ связи (email, телефон или Telegram)"
```

---

## 🔒 CORS настройки

Backend уже настроен принимать запросы с:
- `https://parmenid.tech`
- `https://www.parmenid.tech`
- `https://admin.parmenid.tech`

Если нужен другой домен — сообщите backend-команде.

---

## 📊 Что происходит после заявки

1. Заявка сохраняется в БД со статусом `new`
2. **Telegram-уведомление** отправляется админам (если настроен Admin Bot)
3. Админ видит заявку в панели `/admin/plan-requests`
4. Админ меняет статус на `in_progress` → `completed`

---

## 🚀 Чеклист интеграции

- [ ] Форма "Заказать демо" → `POST /plan-requests/` с `demo_request`
- [ ] Форма "Связаться" → `POST /plan-requests/` с `contact_sales`
- [ ] Страница Pricing → `POST /plan-requests/` с `plan_upgrade`
- [ ] Кнопка "Регистрация" → `POST /auth/register`
- [ ] Кнопка "Войти" → `POST /auth/login` → редирект на admin.parmenid.tech
- [ ] (Опционально) Демо чат-виджет → `/chat/{avatar_id}/*`
- [ ] Обработка ошибок 422, 429, 409
- [ ] Показ success-сообщений

---

## 📞 Контакты

По вопросам интеграции: backend-команда.

**OpenAPI документация:** https://api.parmenid.tech/docs

