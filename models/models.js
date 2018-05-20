var horarios = [

    {id:  1, horario: '07:30hs - 08:30hs' },
    {id:  2, horario: '08:30hs - 09:30hs' },
    {id:  3, horario: '09:30hs - 10:30hs' },
    {id:  4, horario: '10:30hs - 11:30hs' },
    {id:  5, horario: '11:30hs - 12:30hs' },
    {id:  6, horario: '12:30hs - 13:30hs' },
    {id:  7, horario: '13:30hs - 14:30hs' },
    {id:  8, horario: '14:30hs - 15:30hs' },
    {id:  9, horario: '15:30hs - 16:30hs' },
    {id: 10, horario: '16:30hs - 17:30hs' },
    {id: 11, horario: '17:30hs - 18:30hs' }
];
module.exports.horarios = horarios;

var jugadores = [

    {id: 1, nombre: 'Diego', edad:20 },
    {id: 2, nombre: 'Agustin', edad: 22 },
    {id: 3, nombre: 'Martin', edad:24 },
    {id: 4, nombre: 'Juan', edad:20 },
    {id: 5, nombre: 'Roberto', edad: 22 },
    {id: 6, nombre: 'Carlos', edad:24 }

];
module.exports.jugadores = jugadores;

var campos = [

    {id: 1, nombre: 'Campo de Golf Juan B. Segura', ubicacion:' Av. Dorrego 80, C1425GAZ, CABA, Buenos Aires' },
    {id: 2, nombre: 'Mar del Plata Golf Club', ubicacion: 'Av. de Circunvalacion Mario Bravo 3955-3999, Mar del Plata, Buenos Aires' },
    {id: 3, nombre: 'San Isidro Golf Club', ubicacion:'Av Juan Segundo Fernández 386, B1642AMQ Gran Buenos Aires, Buenos Aires' }

];
module.exports.campos = campos;

var lineas = [

    {id: 1, jugadores: [1,2,3]},
    {id: 2, jugadores: [4,5,6]},
    {id: 3, jugadores: [1,5,3]},
    {id: 4, jugadores: [4,2,6]},
    {id: 5, jugadores: [4,2,1]},
    {id: 6, jugadores: [6,1,3]}

];
module.exports.lineas = lineas;


var torneos = [

    {id: 1, campo: 1, horario: 1, linea: 1},
    {id: 2, campo: 1, horario: 4, linea: 2},
    {id: 3, campo: 2, horario: 2, linea: 3},
    {id: 4, campo: 2, horario: 5, linea: 4},
    {id: 5, campo: 3, horario: 3, linea: 5},
    {id: 6, campo: 3, horario: 6, linea: 6}

];
module.exports.torneos = torneos;

