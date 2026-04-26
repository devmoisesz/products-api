# 🛒 Products API + Frontend

Sistema completo de gerenciamento de produtos construído para praticar e consolidar conceitos fundamentais de APIs RESTful, métodos HTTP, integração com banco de dados e desenvolvimento frontend moderno com React.

O projeto começou como uma API simples e evoluiu para uma aplicação completa com frontend em React, permitindo cadastrar, listar, editar e excluir produtos através de uma interface limpa e funcional.

---

## 🚀 Tecnologias

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 📁 Estrutura do Projeto

```
products-api/
├── src/
│   └── routes/
│       └── productRoutes.js      # Definição das rotas de produto
├── prisma/
│   ├── schema.prisma             # Schema do banco de dados
│   └── migrations/               # Histórico de migrações
├── products-frontend/
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx          # Página de cadastro de produto
│       │   ├── Home.module.css
│       │   ├── Products.jsx      # Página de listagem de produtos
│       │   └── Products.module.css
│       ├── App.jsx               # Definição das rotas do frontend
│       └── main.jsx              # Entrada da aplicação
├── .env                          # Variáveis de ambiente (não versionado)
├── server.js                     # Entrada da API
├── package.json
└── .gitignore
```

---

## ✅ Funcionalidades

- Cadastrar produto com nome, preço, descrição, categoria e estoque
- Listar todos os produtos cadastrados em uma tabela
- Editar produto inline — sem recarregar a página
- Excluir produto com confirmação antes de apagar
- Frontend conectado à API via fetch
- Dados persistidos no PostgreSQL

---

## 🗃️ Modelo de Produto

| Campo        | Tipo   | Descrição               |
|--------------|--------|-------------------------|
| id           | Int    | ID gerado automaticamente |
| name         | String | Nome do produto         |
| price        | Float  | Preço do produto        |
| descripition | String | Descrição do produto    |
| category     | String | Categoria do produto    |
| stock        | Int    | Quantidade em estoque   |

---

## 📡 Endpoints da API

| Método | Endpoint        | Descrição                    |
|--------|-----------------|------------------------------|
| POST   | /products       | Cadastrar um novo produto    |
| GET    | /products       | Listar todos os produtos     |
| GET    | /products/:id   | Buscar um produto pelo ID    |
| PUT    | /products/:id   | Atualizar um produto pelo ID |
| DELETE | /products/:id   | Excluir um produto pelo ID   |

---

## 🔧 Como Rodar Localmente

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e rodando
- Um banco de dados PostgreSQL criado (ex: `api_produtos`)

### Backend

1. Clone o repositório:

```bash
git clone https://github.com/devmoisesz/products-api
cd products-api
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz:

```env
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/api_produtos?schema=public"
```

4. Rode as migrações do Prisma:

```bash
npx prisma migrate dev
```

5. Inicie o servidor da API:

```bash
node --watch server.js
```

API rodando em `http://localhost:3020`

---

### Frontend

1. Navegue até a pasta do frontend:

```bash
cd products-frontend/products-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Frontend rodando em `http://localhost:5173`

---

## 🖥️ Páginas

| Rota        | Descrição                                  |
|-------------|--------------------------------------------|
| /           | Formulário de cadastro de produto          |
| /products   | Listagem de produtos com edição e exclusão |