# Productos

Proyecto con backend en Spring Boot y frontend en React (Vite).

## Estructura

- `backend/` — API en Spring Boot (Java 17, Spring Boot 4.1.1, Spring Data JPA, validation, WebMVC, H2)
- `frontend/` — SPA en React 19 + Vite, con HMR y reglas de Oxlint

## Backend

Requiere Java 17.

```bash
cd backend
./mvnw spring-boot:run   # Linux/Mac
mvnw.cmd spring-boot:run # Windows
```

Dependencias principales: `spring-boot-starter-data-jpa`, `spring-boot-starter-validation`, `spring-boot-starter-webmvc`, `h2` (runtime).

## Frontend

Requiere Node.js.

```bash
cd frontend
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run lint     # oxlint
```

Este template usa [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) (basado en [Oxc](https://oxc.rs)). El React Compiler no está habilitado por su impacto en el rendimiento de dev/build; para activarlo, ver [la documentación oficial](https://react.dev/learn/react-compiler/installation).

Para linting con reglas TypeScript type-aware, ver el [template TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

## Guías

- `guide_full.md` — guía general del proyecto (backend y frontend)
