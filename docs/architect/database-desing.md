# Diseño de Base de Datos

## Tabla users

| Campo      | Tipo            |
| ---------- | --------------- |
| id         | bigint          |
| name       | string          |
| email      | string          |
| password   | string          |
| google_id  | string nullable |
| created_at | timestamp       |
| updated_at | timestamp       |

## Tabla categories

| Campo       | Tipo          |
| ----------- | ------------- |
| id          | bigint        |
| name        | string        |
| description | text nullable |
| created_at  | timestamp     |
| updated_at  | timestamp     |

## Tabla news

| Campo        | Tipo      |
| ------------ | --------- |
| id           | bigint    |
| category_id  | bigint    |
| title        | string    |
| image        | string    |
| summary      | text      |
| body         | longText  |
| published_at | datetime  |
| created_at   | timestamp |
| updated_at   | timestamp |

## Relaciones

Category 1:N News

Users independientes para autenticación.
