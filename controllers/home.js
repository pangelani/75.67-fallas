module.exports = function(app, log) {
    var Pregunta = require("../models/modelo");
    var preguntasCount = require("../models/modelo").preguntasCount;
    var Carreras = require("../models/modelo").Carreras;
    var Preguntas = require("../models/modelo").Preguntas;
    var nools = require("nools");
    var test = {};

    app.get('/', function(req, res){
        res.render('home/home', {
            appName     : "75.67",
            pageTitle   : "75.67 - Sistemas Automáticos de Diagnóstico y Detección de Fallas I"
        });
    });

    app.get('/carreras', function(req, res){
        res.render('modelo/carreras', {
            appName     : "75.67",
            pageTitle   : "75.67 - Carreras",
            carreras    : Carreras
        });
    });

    app.get('/preguntas', function(req, res){
        res.render('modelo/preguntas', {
            appName     : "75.67",
            pageTitle   : "75.67 - Preguntas",
            preguntas    : Preguntas
        });
    });

    app.get('/comenzar', function(req, res){
        test = {
            preguntas : [],
            posiblesCarreras : Carreras.slice(0),
            resultado: undefined,
        };
        res.render('analisis/comenzar', {
            appName     : "75.67",
            pageTitle   : "75.67 - Sistemas Automáticos de Diagnóstico y Detección de Fallas I"
        });
    });

    app.get('/analisis', function(req, res){
        var pregunta = new Pregunta(0);
        test.preguntas.push(pregunta);
        res.render('analisis/analisis', {
            appName     : "75.67",
            pageTitle   : "75.67 - Análisis",
            pregunta    : pregunta
        });
    });


    app.post('/analisis', function(req, res){
        var pregunta = test.preguntas[req.body.pregunta];
        pregunta.responder(req.body.respuesta);
        ejecutarReglas();
        var siguiente = pregunta.siguiente();
        if (siguiente) {
            test.preguntas.push(siguiente);
            res.render('analisis/analisis', {
                appName     : "75.67",
                pageTitle   : "75.67 - Análisis",
                pregunta    : siguiente
            });
        } else {
            res.redirect("/resultado");
        }
    });

    app.get('/resultado', function(req, res){
        res.render('analisis/resultado', {
            appName     : "75.67",
            pageTitle   : "75.67 - Resultado",
            resultado   : test.resultado
        });
    });
};

function ejecutarReglas () {
    //TODO applicar nools
}