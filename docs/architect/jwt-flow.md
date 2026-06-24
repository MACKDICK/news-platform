# Flujo de Autenticación JWT

## Inicio de Sesión

1. Usuario ingresa email y contraseña.
2. Frontend envía credenciales al endpoint /api/login.
3. Laravel valida las credenciales.
4. Laravel genera un JWT.
5. El token es retornado al cliente.
6. React almacena el token.
7. Cada petición protegida incluye:

Authorization: Bearer TOKEN

## Acceso a Recursos

Frontend
→ JWT
→ Middleware Laravel
→ Endpoint

## Expiración

Cuando el token expire:

* Se elimina del almacenamiento local.
* Se redirige al login.
