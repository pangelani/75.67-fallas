module.exports = function(app, log) {
    var Pregunta = require("../models/modelo");
    var TestModel = require("../models/modelo").TestModel;
    var preguntasCount = require("../models/modelo").preguntasCount;
    var Carreras = require("../models/modelo").Carreras;
    var Preguntas = require("../models/modelo").Preguntas;
    var nools = require("nools");
    var flow = nools.compile("flow/basic.nools", {
        scope: {
            logger: log
        }
    });
    var Question = flow.getDefined("question");

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
        req.session.test = new TestModel();
        res.render('analisis/comenzar', {
            appName     : "75.67",
            pageTitle   : "75.67 - Sistemas Automáticos de Diagnóstico y Detección de Fallas I"
        });
    });

    app.get('/analisis', function(req, res){
        var pregunta = new Pregunta(0);
        res.render('analisis/analisis', {
            appName     : "75.67",
            pageTitle   : "75.67 - Análisis",
            pregunta    : pregunta
        });
    });

    app.post('/analisis', function(req, res){
        var pregunta = new Pregunta(req.body.pregunta);
        pregunta.responder(req.body.respuesta);
        ejecutarReglas(req, res, pregunta);
    });

    app.get('/resultado', function(req, res){
        var posiblesCarreras = [];
        log.debug("resultado");
        for (var i = 0; i < req.session.test.posiblesCarreras.length; i++) {
            if (req.session.test.posiblesCarreras[i]) {
                posiblesCarreras.push(req.session.test.posiblesCarreras[i]);
            }
        }
        res.render('analisis/resultado', {
            appName     : "75.67",
            pageTitle   : "75.67 - Resultado",
            resultado   : posiblesCarreras
        });
    });

    function ejecutarReglas (req, res, pregunta) {
        var currTest = req.session.test;
        currTest.preguntas[pregunta.id] = pregunta;
        session = flow.getSession(new Question({
            id : pregunta.id,
            ans : pregunta.respuesta
        }));
        session.on('respuesta', function(carrera) {
            if (currTest.posiblesCarreras[carrera]) {
                currTest.posiblesCarreras[carrera].dejar = true;
            }
        }).match(function(err){
            if(err){
                currTest.posiblesCarreras = [];
                log.error(err);
            }
        }).then(function() {
            var hayPosibles = false;
            for (var i = 0; i < currTest.posiblesCarreras.length; i++) {
                if (currTest.posiblesCarreras[i]) {
                    if (!currTest.posiblesCarreras[i].dejar) {
                        currTest.posiblesCarreras[i] = null;
                    } else {
                        currTest.posiblesCarreras[i].dejar = false;
                        hayPosibles = true;
                    }
                }
            }
            req.session.test = currTest;
            var siguiente = pregunta.siguiente();
            if (siguiente && hayPosibles) {
                res.render('analisis/analisis', {
                    appName     : "75.67",
                    pageTitle   : "75.67 - Hacer test",
                    pregunta    : siguiente
                });
            } else {
                res.redirect("/resultado");
            }
        });
    }

};
