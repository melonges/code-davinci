# Code Davinci

## Prerequisites

- Docker
- Docker Compose
- Bun (optional, for local development)

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/melonges/code-davinci
cd code-davinci
```

### 2. Set Up Environment Variables

Create an .env file based on the .env.exmaple file

## 3. Build and Run the Project

Development Environment
To run the project in the development environment, use the following command:

```sh
docker-compose -f docker-compose.dev.yml up --build
```

This command will build the Docker images and start the containers, including the application, database, and Prisma Studio.

Production Environment
To run the project in the production environment, use the following command:

```sh
docker-compose -f docker-compose.prod.yml up --build
```

This command will build the Docker images and start the containers, including the application and database.

### 4. Access Prisma Studio

Prisma Studio provides a graphical interface to view and manage your database. To access Prisma Studio, open your browser and go to:

```
http://localhost:5555
```
