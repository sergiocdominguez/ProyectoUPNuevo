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
  
    - Obtener Campos: GET /api/campos
    - Obtener Campos: GET /api/campos/campo_id
    - Crear Campo: POST /api/campos/ 
      - BODY(nombre,ubicacion,coordenadas(Latitud,Longitud)) 
    - Modificar Campo: PUT /api/campos/campo_id
      - BODY(nombre,ubicacion,coordenadas(Latitud,Longitud)) 
    - Eliminar Campo: DELETE /api/campos/campo_id
      
    - Obtener Jugadores: GET /api/jugadores
    - Obtener Jugador: GET /api/jugadores/jugador_id
    - Crear Jugador: POST /api/jugadores/
      - BODY(nombre, apellido, edad, email, handicap)
    - Modificar Jugador: PUT /api/jugadores/jugador_id
      - BODY(nombre, apellido, edad, email, handicap)
      
    - Obtener Torneos: /api/torneos
    - Obtener Torneo: /api/torneos/torneo_id
    - Crear Torneo: POST /api/torneos/
      - BODY(fecha,campo_id,linea_id,horario_id) 
    - Modificar Torneo: PUT /api/torneos/torneo_id 
      - BODY(fecha,campo_id,linea_id,horario_id)
    - Eliminar Torneo: DELETE /api/torneos/torneo_id
