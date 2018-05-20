# ProyectoUP
Arquitectura Web: Proyecto 2018

* Integrantes
  - 101760 - Sergio Dominguez  - sergiocdominguez@gmail.com
  - 090552 - Ignacio Lizarraga - nacho_95_@hotmail.com

* Negocio a resolver
  - Se intenta realizar un aplicativo web que organice eventos para salir a jugar a un campo de golf.

* Tecnologías en Uso
  - NodeJS
  - AngularJS
  - MongoDB

* EndPoints de Api:

  - Obtener Campos: GET /api/campos?order=asc&limit=50
  - Obtener Campos: GET /api/campos/campo_id
  - Crear Campo: POST /api/campos/
    - BODY(campo_nombre,ubicacion(lat,lng),campo_direccion)
  - Modificar Campo: PUT /api/campos/campo_id
    - BODY(campo_nombre,ubicacion(lat,lng),campo_direccion)
  - Eliminar Campo: DELETE /api/campos/campo_id

  - Obtener Torneos: /api/torneos?order=asc&limit=50
  - Obtener Torneo: /api/torneos/torneo_id
  - Crear Torneo: POST /api/torneos/
    - BODY(campo_id,torneo_nombre,torneo_fecha)
  - Modificar Torneo: PUT /api/torneos/torneo_id
    - BODY(campo_id,torneo_nombre,torneo_fecha)
  - Eliminar Torneo: DELETE /api/torneos/torneo_id

  - Obtener Lineas: GET /api/torneo/torneo_id/lineas?order=asc&limit=50
  - Obtener Linea: GET /api/torneo/torneo_id/lineas/linea_id
  - Crear Lineas: POST /api/torneo/torneo_id/lineas/
    - BODY(horario_id)
  - Modificar Lineas: PUT /api/torneo/torneo_id/lineas/linea_id
    - BODY(horario_id)

  - Obtener Usuarios: GET /api/usuarios?order=asc&limit=50
  - Obtener Usuario: GET /api/usuarios/usuario_id
  - Crear Usuario: POST /api/usuario/
    - BODY(nombre, apellido, edad, email, handicap)
  - Modificar Usuario: PUT /api/usuarios/usuario_id
    - BODY(nombre, apellido, edad, email, handicap)

  - Inscribirse a Torneo: POST /api/torneos/torneo_id/linea/linea_id/
    - BODY(usuario_id)
  - Desinscribir Usuarios de una Linea:  DELETE /api/torneos/torneo_id/linea/linea_id/usuario
  - Desinscribir un usuario de una Linea: DELETE /api/torneos/torneo_id/linea/linea_id/usuario/usuario_id
  
