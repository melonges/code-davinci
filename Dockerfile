FROM oven/bun:latest

RUN apt-get update && apt-get install -y netcat

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

RUN bun prisma generate

COPY wait-for-it.sh /app/wait-for-it.sh

RUN chmod +x /app/wait-for-it.sh

EXPOSE 5555

CMD ["bash", "/app/wait-for-it.sh"]


