# Arquitectura General del Sistema

## Tipo de Arquitectura

La solución implementa una arquitectura desacoplada basada en API REST.

Frontend y Backend son aplicaciones independientes que se comunican mediante HTTP utilizando JSON.

## Componentes

### Frontend Web

* React
* React Router
* Axios
* JWT Authentication

### Aplicación Móvil

* React Native
* Axios
* JWT Authentication

### Backend

* Laravel
* API REST
* JWT Authentication

### Base de Datos

* MySQL 8

## Flujo General

Usuario
↓
React / React Native
↓
API Laravel
↓
MySQL

## Beneficios

* Escalabilidad
* Mantenibilidad
* Separación de responsabilidades
* Facilidad de pruebas
* Reutilización de API para Web y Mobile
