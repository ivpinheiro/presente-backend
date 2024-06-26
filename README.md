# Presente! - Backend

## Introdução

O presente repositório contém a lógica do backend da aplicação "Presente!". A aplicação foi desenvolvida utilizando o framework NestJS, além de outras ferramentas, como MongoDB, Postgres, Prisma, PM2 e NGINX.

## Requisitos

- [Docker Desktop](https://www.docker.com/get-started);
- [Git](https://git-scm.com/downloads);
- [Node.js](https://nodejs.org/en/download/package-manager);
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

## Configuração do ambiente de desenvolvimento

### Parte 1 - Docker

- 1 - Renomeie o arquivo "env.example.txt" para ".env"

- 2 - Inicialize os contêineres da aplicação com:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

### Parte 2 - NestJS

- 1 - Acesse a pasta do backend:

```bash
cd backend
```

- 2 - Renomeie o arquivo da pasta backend "env.example.txt" para ".env";

- 3 - Instale as dependências do projeto:

```bash
npm install
```

- 4 - Faça a migration com o Prisma:

```bash
npx prisma migrate dev --name init
```

- 5 - Inicialize o servidor do Nest.JS:

```bash
npm run start:dev
```

### Parte 3 - Crie um usuário

- 1 - Instale a extensão "REST Client" no VS Code;
  
- 2 - Acesse a pasta do backend:

```bash
cd backend
```

- 3 - Acesse o arquivo "api.user.http";

- 4 - Realize a requisição apertando o botão "Send Request" (é possível alterar o e-mail e senha);
  
- 5 - Faça o login por meio do arquivo "api.login.http".
