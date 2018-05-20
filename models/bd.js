var mongoose = require("../mongo").mongoose;

var Schema = mongoose.Schema;



//Listas estaticas
/*
var Horarios = [
    {_id:  0, descripcion: "07:30hs - 08:30hs" },
    {_id:  1, descripcion: "08:30hs - 09:30hs" },
    {_id:  2, descripcion: "09:30hs - 10:30hs" },
    {_id:  3, descripcion: "10:30hs - 11:30hs" },
    {_id:  4, descripcion: "11:30hs - 12:30hs" },
    {_id:  5, descripcion: "12:30hs - 13:30hs" },
    {_id:  6, descripcion: "13:30hs - 14:30hs" },
    {_id:  7, descripcion: "14:30hs - 15:30hs" },
    {_id:  8, descripcion: "15:30hs - 16:30hs" },
    {_id:  9, descripcion: "16:30hs - 17:30hs" },
    {_id: 10, descripcion: "17:30hs - 18:30hs" },
    {_id: 11, descripcion: "18:30hs - 19:30hs" }
];
module.exports.Horarios = Horarios;
*/

//Validaciones especiales
var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"El email es inválido"];
//var posibles_valores_sexo = ["M","F"];

/*
String
Number
Date
Buffer
Boolean
Mixed
Objectid
Array
*/

//Esquemas
//Horarios
var horario_schema = new Schema({
    descripcion: String
});
var Horario = mongoose.model("Horario", horario_schema);
module.exports.Horario = Horario;


//Jugador
var jugador_schema = new Schema({
    nombre:{type: String,
            required: "El nombre de jugador es obligatorio"
        },
    apellido:{type: String,
            required: "El apellido de jugador es obligatorio"
        },
    email:{type: String, 
        required: "El email es obligatorio", 
        match:email_match},
    edad:{type: Number, 
                min: [6,"La edad no puede ser menor a 6"], 
                max: [100,"La edad no puede ser mayor a 100"] },
    handicap:{type: Number, 
                    min: [0,"El handicap no puede ser menor a 0"], 
                    max: [100,  "El handicap no puede ser mayor a 100"]}
});
var Jugador = mongoose.model("Jugador",jugador_schema);
module.exports.Jugador = Jugador;

//Campo
var campo_schema = new Schema({
    nombre:{type: String,
            required: "El nombre del campo es obligatorio"
        },
    ubicacion: String,
    coordenadas: [String, String]
});
var Campo = mongoose.model("Campo", campo_schema);
module.exports.Campo = Campo;

//Linea
var linea_schema = new Schema({
    //id_jugador1: { type: Schema.ObjectId, ref: "Jugador" },
    //id_jugador2: { type: Schema.ObjectId, ref: "Jugador" },
    //id_jugador3: { type: Schema.ObjectId, ref: "Jugador" },
    //id_jugador4: { type: Schema.ObjectId, ref: "Jugador" } 
    lista: {type: Array,
            required: "La lista de jugadores es obligatoria"}
});
/*
user_schema.virtual("password_confirmation").get(function(){
    return this.p_c;
}).set(function(password){
    this.p_c = password;
});

user_schema.virtual("full_name").get(function(){
    return this.name + " " + this.last_name;
}).set(function(full_name){
    var words = full_name.split(" ");
    this.name = words[0];
    this.last_name = words[1];
});
*/
var Linea = mongoose.model("Linea",linea_schema);
module.exports.Linea = Linea;

//Torneo
var torneo_schema = new Schema({
    fecha: String,
    campo: { type: Schema.ObjectId, ref: "Campo" },
    linea: { type: Schema.ObjectId, ref: "Linea" },
    horario: { type: Schema.ObjectId, ref: "Horario"}
});
var Torneo = mongoose.model("Torneo", torneo_schema);
module.exports.Torneo = Torneo;