## Instalación y ejecución del backend

### Variables de entorno

Crea un archivo `.env` con lo siguiente:

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=(pass asignado a instalacion de postgre)
DB_NAME=closeup_eval


# Backend – NestJS + PostgreSQL

Este proyecto contiene el servidor API REST para filtrar y consultar información de médicos.

## Requisitos

- Node.js v22.16.0
- PostgreSQL
- npm

## Instalación y ejecución

```bash
cd backend
npm install
npm run start:dev
```

## Endpoints principales

| Método | Ruta               | Descripción                       |
|--------|--------------------|------------------------------------|
| GET    | `/medicos`         | Listado con filtros, paginación y ordenamiento |
| GET    | `/especialidades`  | Listado de especialidades         |
| GET    | `/regiones`        | Listado de regiones               |

Los filtros disponibles en `/medicos` incluyen:

- `NOME`: nombre
- `CDGESP`: código de especialidad
- `CDGREG`: código de región
- `page`, `limit`, `sortField`, `sortOrder`

## Pruebas

Puedes probar los endpoints con Postman o directamente desde el frontend.

---

