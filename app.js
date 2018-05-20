var bodyParser = require("body-parser");
var express = require ("express");
var methodOverride = require("express-method-override");
var router = require("./router");
//var lpad = require("lpad");

//var horarios = require("./models/models").horarios;
//var jugadores = require("./models/models").jugadores;
//var campos = require("./models/models").campos;
//var lineas = require("./models/models").lineas;
//var torneos = require("./models/models").torneos;

var app = express();

app.use("/public",express.static("public"));
//app.use(express.static("public"));
//app.use(express.static("assets"));
app.use(bodyParser.json());//peticiones applicacion/json
app.use(bodyParser.urlencoded({extended: true}));//extended algorito decomo hacer parsing
//Para usar verbos Delete y Put
app.use(methodOverride('_method'));

app.set("view engine","jade");

//Metodo Verbos => GET / POST / PUT / PATCH / OPTION / HEADERS / DELETE
app.get("/",function(req, res){
    res.render("index");
});

app.use("/api",router);

app.listen(8080);