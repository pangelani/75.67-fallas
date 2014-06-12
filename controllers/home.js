module.exports = function(app, log) {

    app.get('/', function(req, res){
        res.render('home/home', {
            appName     : "75.67",
            pageTitle   : "75.67 - Sistemas Automáticos de Diagnóstico y Detección de Fallas I"
        });
    });

};