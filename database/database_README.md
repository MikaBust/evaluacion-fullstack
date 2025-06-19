# Base de Datos – Importación a PostgreSQL

En esta carpeta se encuentran el archivo necesario para poblar la base de datos.

## Archivos

- `db_medicos.sql` ← respaldo completo

## Instalacion de postgresql

Se debe de instalar postgresql desde esta url [PostgreSQL](https://www.postgresql.org/download/)

## Instrucciones de importación

1. Abre **pgAdmin**.
2. Crea una base de datos nueva con el nombre closeup_eval.
3. Haz click derecho y pon Restore, en el apartado de filename apretar el icono de carpeta, buscar el archivo `db_medicos.sql`
4. En role name seleccionar postgres