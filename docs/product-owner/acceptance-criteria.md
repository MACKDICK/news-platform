HU-002 Inicio de Sesión

Dado que un usuario posee una cuenta
Cuando ingrese credenciales válidas
Entonces el sistema deberá generar un JWT válido.

Dado que un usuario ingrese credenciales inválidas
Cuando intente autenticarse
Entonces el sistema devolverá error 401.