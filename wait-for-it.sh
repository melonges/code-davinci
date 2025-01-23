#!/bin/bash

until nc -z -v -w30 db 5432; do
  echo "Waiting for database connection..."
  sleep 1
done

echo "Database is up, running prisma db push"
bun prisma db push

if [ "$MODE" = "dev" ]; then
  echo "Running in development mode"
  bun run studio & bun run dev
elif [ "$MODE" = "prod" ]; then
  echo "Running in production mode"
  bun run studio & bun run start
else
  echo "Invalid MODE value. Please set MODE to 'dev' or 'start'."
  exit 1
fi
