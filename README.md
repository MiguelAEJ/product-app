# Productos

Project with a Spring Boot backend and a React (Vite) frontend.

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

This template uses
[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
(based on [Oxc](https://oxc.rs)). React Compiler is not enabled due to its
impact on dev/build performance; to enable it, see
[the official documentation](https://react.dev/learn/react-compiler/installation).

For linting with type-aware TypeScript rules, see the
[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).
