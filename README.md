# Coinly

Personal finance tracker: transactions, multi-currency support, analytics and category breakdowns.

## Stack

- **Frontend**: Vite, vanilla JavaScript, Tailwind CSS v4, Chart.js
- **Backend**: Express 5, PostgreSQL (`pg`), argon2, hand-rolled JWT auth with refresh-token rotation
- **Currency rates**: open.er-api.com, synced into an `exchange_rates` table

## Structure

```
app/
  client/   Vite + Tailwind frontend
  server/   Express API + PostgreSQL access
```

## Setup

### Database

```bash
psql -h localhost -U postgres -c "CREATE DATABASE coinly;"
psql -h localhost -U postgres -d coinly -f app/server/src/database/schema.sql
```

### Server

```bash
cd app/server
npm install
cp .env.example .env   # fill in DB credentials and a real SECRET
npm run dev
```

### Client

```bash
cd app/client
npm install
cp .env.example .env
npm run dev
```

## Demo account

The seed script in `schema.sql` creates `demo_user` / `password123` with a year of sample transactions.
