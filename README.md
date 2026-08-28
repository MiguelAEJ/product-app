# Productos

This is a practice project for a simple product catalog CRUD, made with a
Spring Boot backend and a React (Vite) frontend.

## Structure

- `backend/` — Spring Boot API (Java 17, Spring Boot 4.1.1, Spring Data JPA,
  validation, WebMVC, H2)
- `frontend/` — React 19 + Vite SPA, with HMR and Oxlint rules

## Backend

Requires Java 17.

```bash
cd backend
./mvnw spring-boot:run   # Linux/Mac
mvnw.cmd spring-boot:run # Windows
```

Main dependencies: `spring-boot-starter-data-jpa`,
`spring-boot-starter-validation`, `spring-boot-starter-webmvc`, `h2` (runtime).

Runs on `http://localhost:8080`. H2 console available at
`http://localhost:8080/h2-console`.

## Frontend

Requires Node.js.

```bash
cd frontend
npm install
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview the build
npm run lint     # oxlint
```

Runs on `http://localhost:5173`. The frontend calls the backend API at a
hardcoded `http://localhost:8080/api/products`
([client.js](frontend/src/api/client.js)), so the backend must be running too.

This template uses
[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
(based on [Oxc](https://oxc.rs)). React Compiler is not enabled due to its
impact on dev/build performance; to enable it, see
[the official documentation](https://react.dev/learn/react-compiler/installation).

For linting with type-aware TypeScript rules, see the
[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

## Guides

Reference guides are kept outside the repo:
[Google Drive folder](https://drive.google.com/drive/folders/1XsZqUmj9BIvzDZcOT5z61ES6_yNfsLdD?usp=sharing).
