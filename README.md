# DevNova Studio 2.0

Готовый MVP сайта заказов на Next.js + PostgreSQL + Prisma.

## Что есть
- Главная страница и услуги
- Конструктор заказа и серверный расчёт цены
- Заявки с уникальным номером DN-XXXXXXXX
- Публичная проверка статуса без раскрытия контактов клиента
- Защищённая админка `/admin`
- Изменение статуса проекта
- PostgreSQL — заявки не зависят от файловой системы хостинга

## Локальный запуск
1. Установить Node.js 20+ и PostgreSQL либо взять облачную PostgreSQL.
2. Скопировать `.env.example` в `.env` и заполнить значения.
3. Выполнить:
   npm install
   npx prisma db push
   npm run dev
4. Открыть http://localhost:3000

## Деплой
Подходит для Render и других Node.js-хостингов. Создай PostgreSQL, добавь `DATABASE_URL`, `ADMIN_LOGIN`, `ADMIN_PASSWORD`, `AUTH_SECRET` в Environment Variables и разверни репозиторий.

Build command: `npm install && npm run build`
Start command: `npm start`

`AUTH_SECRET` должен быть длинной случайной строкой. Никогда не публикуй `.env`.
