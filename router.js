var express = require("express");

var Horario = require("./models/bd").Horario;
var Jugador = require("./models/bd").Jugador;
var Campo = require("./models/bd").Campo;
var Linea = require("./models/bd").Linea;
var Torneo = require("./models/bd").Torneo;

var router = express.Router();

//API USUARIOS

//Redirige a la vista de alta
router.get("/jugadores/new",function(req, res){
    res.render("../views/api/alta_jugador");
});
//Redirige a la vista de Editar para poder hacer PUT
router.get("/jugadores/:id/editar",function(req, res){
    Jugador.findById(req.params.id,function(err,jugador){
        if(err) {
            res.send("No se encontro el jugador");
        }
        else{
         //paso el parametro imagenes devuelto por la funcion al parametro imagenes de la vista  
         res.render("../views/api/editar_jugador",{jugador:jugador});
        }
    }); 
});

//Muestra todos los jugadores
router.route("/jugadores/")
.get(function(req, res){
    
    var mysort = { apellido: 1, nombre: 1,};

    Jugador.find({},function(err,jugadores){
        if(err) {
            res.send("No se encontro el jugador "+err);
        }
        else{
         //paso el parametro imagenes devuelto por la funcion al parametro imagenes de la vista  
         res.render("../views/api/index_jugadores",{jugadores:jugadores});
        }
    }).sort(mysort); 
})
//Crea nuevo jugador
.post(function(req, res){  
    var jugador = new Jugador({nombre: (req.body.nombre).trim(),
                               apellido: (req.body.apellido).trim(),
                               email: (req.body.email).trim().toLowerCase(), 
                               edad: (req.body.edad).trim(),
                               handicap: (req.body.handicap).trim()
                                });
    jugador.save().then(function(us){
                        res.redirect("/api/jugadores");
                     }, function(err){
                           if(err){
                              res.send("No se pudo guardar "+ err);
                           }
                        }
                    );    
})
;
//Muestra un jugador
router.route("/jugadores/:id")
.get(function(req, res){
    Jugador.find({_id: req.params.id},function(err,jugadores){
        if(err) {
            res.send("No se encontro el jugador "+ err);
        }
        else{
         res.render("../views/api/index_jugadores",{jugadores:jugadores});
        }
    }); 
});

//Edita jugador
router.route("/jugadores/:id")
.put(function(req, res){
    var consulta = {_id: req.params.id};
    var valores = { 
        $set: {
            nombre: req.body.nombre.trim(), 
            apellido: req.body.apellido.trim(),
            edad: req.body.edad.trim(),
            email: req.body.email.trim().toLowerCase(),
            handicap: req.body.handicap.trim()
            } 
        };

    Jugador.updateOne(consulta, valores,function(err,jugadores){
        if(err) {
            res.send("No se encontro el jugador para editar " + err);
        }
        else{
         res.redirect("/api/jugadores");
        }
    });

                                
})
//Elimina jugador
.delete(function(req, res){
    Jugador.deleteOne({_id: req.params.id},function(err){
        if(err) {
            res.send("No se encontro el jugador para eliminar "+ err);
        }
        else{
         res.redirect("/api/jugadores");
        }
    });
})
;

//API CAMPOS
//Redirige a la vista de alta
router.get("/campos/new",function(req, res){
    res.render("../views/api/alta_campo");
});
//Redirige a la vista de Editar para poder hacer PUT
router.get("/campos/:id/editar",function(req, res){
    Campo.findById(req.params.id,function(err,campo){
        if(err) {
            res.send("No se encontro el campo");
        }
        else{
         //paso el parametro imagenes devuelto por la funcion al parametro imagenes de la vista  
         res.render("../views/api/editar_campo",{campo:campo});
        }
    }); 
});

//Muestra todos los campos
router.route("/campos/")
.get(function(req, res){
    
    var mysort = { apellido: 1, nombre: 1,};

    Campo.find({},function(err,campos){
        if(err) {
            res.send("No se encontro el campo "+err);
        }
        else{
         //paso el parametro imagenes devuelto por la funcion al parametro imagenes de la vista  
         res.render("../views/api/index_campos",{campos:campos});
        }
    }).sort(mysort); 
})
//Crea nuevo campo
.post(function(req, res){  
    var campo = new Campo({nombre: (req.body.nombre).trim(), 
                           ubicacion: (req.body.ubicacion).trim(),
                           coordenadas: [(req.body.lat).trim(), (req.body.long).trim()]
                        });
    campo.save().then(function(us){
                        res.redirect("/api/campos");
                     }, function(err){
                           if(err){
                              res.send("No se pudo guardar "+ err);
                           }
                        }
                    );    
})
;
//Muestra un campo
router.route("/campos/:id")
.get(function(req, res){
    Campo.find({_id: req.params.id},function(err,campos){
        if(err) {
            res.send("No se encontro el campo "+ err);
        }
        else{
         res.render("../views/api/index_campos",{campos:campos});
        }
    }); 
});

//Edita campo
router.route("/campos/:id")
.put(function(req, res){
    var consulta = {_id: req.params.id};
    var valores = { 
        $set: {
            nombre: req.body.nombre.trim(), 
            ubicacion: req.body.ubicacion.trim(),
            coordenadas: [req.body.lat.trim(), req.body.long.trim()]
            } 
        };

    Campo.updateOne(consulta, valores,function(err,campos){
        if(err) {
            res.send("No se encontro el campo para editar " + err);
        }
        else{
         res.redirect("/api/campos");
        }
    });

                                
})
//Elimina campo
.delete(function(req, res){
    Campo.deleteOne({_id: req.params.id},function(err){
        if(err) {
            res.send("No se encontro el campo para eliminar "+ err);
        }
        else{
         res.redirect("/api/campos");
        }
    });
})
;

//API LINEAS
//Redirige a la vista de alta
router.get("/lineas/new",function(req, res){
    var mysort = { apellido: 1, nombre: 1,};
    Jugador.find({},function(err,jugadores){
        if(err) {
            res.send("No se encontro el jugador "+err);
        }
        else{
         //paso el parametro imagenes devuelto por la funcion al parametro imagenes de la vista  
         res.render("../views/api/alta_linea",{jugadores:jugadores});
        }
    }).sort(mysort); 
});
//Redirige a la vista de Editar para poder hacer PUT
router.get("/lineas/:id/editar",function(req, res){
    Linea.findById(req.params.id,function(err,linea){
        if(err) {
            res.send("No se encontro el linea");
        }
        else{
         //paso el parametro imagenes devuelto por la funcion al parametro imagenes de la vista 
         Jugador.find({},function(err,jugadores){
            if(err) {
                res.send("No se encontro el jugador "+err);
            }
            else{
             //paso el parametro imagenes devuelto por la funcion al parametro imagenes de la vista  
             res.render("../views/api/editar_linea",{linea:linea, jugadores:jugadores});
            }

        });  
        }
    }); 
});

//Muestra todos los lineas
router.route("/lineas/")
.get(function(req, res){
    Linea.find({},function(err,lineas){
        if (err){
            res.send("No se encontro el linea a mostrar "+err);
        }else{
            console.log("Muestro lineas: "+lineas);
            
            var str = JSON.stringify(lineas.lista); 
            
            var newArr = JSON.parse(str);  
            while (newArr.length > 0) {  
                console.log("Contenido lineas: "+newArr.pop());
                //res.send(newArr.pop());  
            }  
 
            /*
                Jugador.populate(linea, {path: "id_jugador4"},function(err, lineas){
                }); 
                */

             //res.render("../views/api/index_lineas",{lineas:lineas});
        }
    })
    ; 
});

//Crea nuevo linea
router.route("/lineas/")
.post(function(req, res){  

    var asd = req.body.Lista;
	console.log(req.body.Lista);
    /*for (var i=0; i<str.length();i++){
        console.log(str[i]);
    }*/
    
var str = JSON.stringify(asd); 

console.log("json: "+str);

/*var newArr = JSON.parse(str);  

while (newArr.length > 0) {  
    console.log(newArr.pop());
    //res.send(newArr.pop());  
}  
  
*/


    var linea = new Linea({
                           lista: str
                        });
    linea.save().then(function(us){
                       // res.redirect("/api/lineas");

                        res.send("todo ok");
                     }, function(err){
                           if(err){
                              res.send("No se pudo guardar "+ err);
                           }
                        }
                    );   
})
;
//Muestra un linea
router.route("/lineas/:id")
.get(function(req, res){
    Linea.find({_id: req.params.id},function(err,lineas){
        if (err){
            res.send("No se encontro el linea a mostrar "+err);
        }else{
            Jugador.populate(lineas, {path: "id_jugador1"},function(err, lineas){
                Jugador.populate(lineas, {path: "id_jugador2"},function(err, lineas){
                    Jugador.populate(lineas, {path: "id_jugador3"},function(err, lineas){
                        Jugador.populate(lineas, {path: "id_jugador4"},function(err, lineas){
                            res.render("../views/api/index_lineas",{lineas:lineas});
                        });              
                    });
                });
            });
        }
    }); 
});

//Edita linea
router.route("/lineas/:id")
.put(function(req, res){  
    
    var consulta = {_id: req.params.id};
    var valores = { 
        $set: {
            id_jugador1: req.body.jugador1.trim(),
            id_jugador2: req.body.jugador2.trim(),
            id_jugador3: req.body.jugador3.trim(),
            id_jugador4: req.body.jugador4.trim()
            } 
        };

    Linea.updateOne(consulta, valores,function(err,lineas){
        if(err) {
            res.send("No se encontro el linea para editar " + err);
        }
        else{
         res.redirect("/api/lineas");
        }
    });
    
                                
})
//Elimina linea
.delete(function(req, res){
    Linea.deleteOne({_id: req.params.id},function(err){
        if(err) {
            res.send("No se encontro el linea para eliminar "+ err);
        }
        else{
         res.redirect("/api/lineas");
        }
    });
})
;

//API TORNEOS
//Redirige a la vista de alta
router.get("/torneos/new",function(req, res){
    Campo.find({}, function(err, campos){
        Linea.find({}, function(err, lineas){
            Jugador.populate(lineas, {path: "id_jugador1"}, function(err){
                Jugador.populate(lineas, {path: "id_jugador2"}, function(err){
                    Jugador.populate(lineas, {path: "id_jugador3"}, function(err){
                        Jugador.populate(lineas, {path: "id_jugador4"}, function(err){
                            Horario.find({}, function(err, horarios){
                                res.render("../views/api/alta_torneo", {campos:campos, lineas:lineas, horarios:horarios});
                            });
                        });
                    });
                });
            });
        });
    });

});
//Redirige a la vista de Editar para poder hacer PUT
router.get("/torneos/:id/editar",function(req, res){
    Torneo.findById(req.params.id,function(err,torneo){
        if(err) {
            res.send("No se encontro el torneo");
        }
        else{
            Campo.find({}, function(err, campos){
                Linea.find({}, function(err, lineas){
                    Jugador.populate(lineas, {path: "id_jugador1"}, function(err){
                        Jugador.populate(lineas, {path: "id_jugador2"}, function(err){
                            Jugador.populate(lineas, {path: "id_jugador3"}, function(err){
                                Jugador.populate(lineas, {path: "id_jugador4"}, function(err){
                                    Horario.find({}, function(err, horarios){
                                        res.render("../views/api/editar_torneo", {torneo:torneo, campos:campos, lineas:lineas, horarios:horarios});
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    }); 
});

//Muestra todos los torneos
router.route("/torneos/")
.get(function(req, res){
    Torneo.find({},function(err,torneos){
        if(err) {
            res.send("No se encontro el torneo "+err);
        }
        else{
         Campo.populate(torneos, {path: "campo"},function(err, torneos){
            //res.render("../views/api/index_torneos",{torneos:torneos});
            Horario.populate(torneos, {path: "horario"},function(err, torneos){
                //res.render("../views/api/index_torneos",{torneos:torneos});
                Linea.populate(torneos, {path: "linea"},function(err, torneos){
                    Jugador.populate(torneos, {path: "linea.id_jugador1"},function(err, lineas){
                        Jugador.populate(torneos, {path: "linea.id_jugador2"},function(err, lineas){
                            Jugador.populate(torneos, {path: "linea.id_jugador3"},function(err, lineas){
                                Jugador.populate(torneos, {path: "linea.id_jugador4"},function(err, lineas){
                                    //res.render("../views/api/index_lineas",{lineas:lineas});
                                    res.render("../views/api/index_torneos",{torneos:torneos});
                                });              
                            });
                        });
                    });
                });
            });
        });
        }
    }); 
})

//Crea nuevo torneo
.post(function(req, res){  
    var torneo = new Torneo({fecha: (req.body.fecha).trim(), 
                            campo: (req.body.campo).trim(),
                            linea: (req.body.linea).trim(),
                            horario: (req.body.horario).trim()
                        });
    torneo.save().then(function(us){
                        res.redirect("/api/torneos");
                     }, function(err){
                           if(err){
                              res.send("No se pudo guardar "+ err);
                           }
                        }
                    );   
})
;
//Muestra un torneo
router.route("/torneos/:id")
.get(function(req, res){
    Torneo.find({_id: req.params.id},function(err,torneos){
        if(err) {
            res.send("No se encontro el torneo por id"+ err);
        }
        else{
            Campo.populate(torneos, {path: "campo"},function(err, torneos){
               //res.render("../views/api/index_torneos",{torneos:torneos});
               Horario.populate(torneos, {path: "horario"},function(err, torneos){
                   //res.render("../views/api/index_torneos",{torneos:torneos});
                   Linea.populate(torneos, {path: "linea"},function(err, torneos){
                       Jugador.populate(torneos, {path: "linea.id_jugador1"},function(err, lineas){
                           Jugador.populate(torneos, {path: "linea.id_jugador2"},function(err, lineas){
                               Jugador.populate(torneos, {path: "linea.id_jugador3"},function(err, lineas){
                                   Jugador.populate(torneos, {path: "linea.id_jugador4"},function(err, lineas){
                                       //res.render("../views/api/index_lineas",{lineas:lineas});
                                       res.render("../views/api/index_torneos",{torneos:torneos});
                                   });              
                               });
                           });
                       });
                   });
               });
           });
        }
    }); 
});

//Edita torneo
router.route("/torneos/:id")
.put(function(req, res){
    var consulta = {_id: req.params.id};
    var valores = { 
        $set: {
            fecha: req.body.fecha.trim(), 
            campo: req.body.campo.trim(),
            linea: req.body.linea.trim(),
            horario: req.body.horario.trim()
            } 
        };

    Torneo.updateOne(consulta, valores,function(err,torneos){
        if(err) {
            res.send("No se encontro el torneo para editar " + err);
        }
        else{
         res.redirect("/api/torneos");
        }
    });

                                
})
//Elimina torneo
.delete(function(req, res){
    Torneo.deleteOne({_id: req.params.id},function(err){
        if(err) {
            res.send("No se encontro el torneo para eliminar "+ err);
        }
        else{
         res.redirect("/api/torneos");
        }
    });
})
;
router.get("/horarios/new",function(req, res){
    res.render("../views/api/alta_horario");
});
//Muestra todos los horarios
router.route("/horarios/")
.get(function(req, res){
    Horario.find({},function(err,horarios){
        res.render("../views/api/index_horarios",{horarios:horarios});
    }); 
})

//Crea nuevo horario
.post(function(req, res){  
    var horario = new Horario({
                          descripcion: (req.body.descripcion).trim()
                        });
    horario.save().then(function(us){
                        res.redirect("/api/horarios");
                     }, function(err){
                           if(err){
                              res.send("No se pudo guardar "+ err);
                           }
                        }
                    );    
})
;
//Elimina horario
router.route("/horarios/:id")
.delete(function(req, res){
    Horario.deleteOne({_id: req.params.id},function(err){
        if(err) {
            res.send("No se encontro el horario para eliminar "+ err);
        }
        else{
         res.redirect("/api/horarios");
        }
    });
})
;
module.exports = router;