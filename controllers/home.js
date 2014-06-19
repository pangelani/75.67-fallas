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
    var Test = flow.getDefined("test");

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
        res.render('analisis/resultado', {
            appName     : "75.67",
            pageTitle   : "75.67 - Resultado",
            resultado   : req.session.test.posiblesCarreras
        });
    });

    function ejecutarReglas (req, res, pregunta) {
        var currTest = req.session.test;
        currTest.preguntas[pregunta.id] = pregunta;
        currTest.posiblesCarreras = [];
        session = flow.getSession(new Test({
            CLM : currTest.preguntas[0] ? currTest.preguntas[0].respuesta : null,
            F   : currTest.preguntas[1] ? currTest.preguntas[1].respuesta : null,
            C   : currTest.preguntas[2] ? currTest.preguntas[2].respuesta : null,
            IT  : currTest.preguntas[3] ? currTest.preguntas[3].respuesta : null,
            TW  : currTest.preguntas[4] ? currTest.preguntas[4].respuesta : null,
            CA  : currTest.preguntas[5] ? currTest.preguntas[5].respuesta : null,
            AM  : currTest.preguntas[6] ? currTest.preguntas[6].respuesta : null
        }));
        session.on('courseOfStudies', function(resultado) {
            currTest.posiblesCarreras.push(Carreras[resultado]);
        }).match(function(err){
            if(err){
                currTest.posiblesCarreras = [];
                log.error(err);
            }
        }).then(function() {
            req.session.test = currTest;
            var siguiente = pregunta.siguiente();
            if (siguiente && currTest.posiblesCarreras.length) {
                res.render('analisis/analisis', {
                    appName     : "75.67",
                    pageTitle   : "75.67 - Análisis",
                    pregunta    : siguiente
                });
            } else {
                res.redirect("/resultado");
            }
        });
    }

};
