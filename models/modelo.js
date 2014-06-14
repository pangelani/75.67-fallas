var carreras =[
    { nombre: "Licenciatura en matemática", descripcion: "asd"},
    { nombre: "Licenciatura en física", descripcion: "asd"},
    { nombre: "Licenciatura en química", descripcion: "asd"},
    { nombre: "Licenciatura en Ciencias de la Computación", descripcion: "asd"},
    { nombre: "Ingeniería Civil", descripcion: "asd"},
    { nombre: "Ingeniería Electrónica", descripcion: "asd"}
];

var preguntas = [
    {
        pregunta : "Capacidad lógico/matemático",
        respuestas : [
            "Dificultad excesiva en ejercicios simples",
            "Dificultad media con resolución del ejercicio satisfactoria.",
            "Razonamiento convencional en tiempo medio.",
            "Resolución satisfactoria en tiempo adecuado",
            "Resolución perfecta en tiempo menor a la media"
        ]
    },
    {
        pregunta : "Flexibilidad",
        respuestas : [
            "Miedo a las situaciones que no puede controlar",
            "Reticencia al cambio con aceptación si es inminente",
            "Indiferencia",
            "Adaptación adecuada a cambios del entorno",
            "Gran adaptabilidad"
        ]
    },
    {
        pregunta : "Pensamiento lateral/Creatividad",
        respuestas : [
            "1-4 respuestas correctas",
            "5-8 respuestas correctas",
            "9-12 respuestas correctas",
            "13-16 respuestas correctas",
            "17-20 respuestas correctas"
        ]
    },
    {
        pregunta : "Interés por la tecnología",
        respuestas : [
            "Reticencia alta",
            "Reticencia media",
            "Usuario constante por obligación",
            "Usuario constante por voluntad propia",
            "Conocimiento actualizado hacia las últimas novedades"
        ]
    },
    {
        pregunta : "Test de Wason",
        respuestas : [
            "Razonamiento parcialmente correcto sin llegar al resultado",
            "Razonamiento y resultados correctos",
            "No comprende la consigna",
            "Tiempo elevado con necesidad de ayuda",
            "Razonamiento y resultados correctos en tiempo óptimo"
        ]
    },
    {
        pregunta : "Capacidad de análisis",
        respuestas : [
            "Bajo",
            "Medio",
            "Alto nivel detalle de la situación"
        ]
    },
    {
        pregunta : "Afinidad con la matemática",
        respuestas : [
            "Intenta evitarla debido a que le cuesta comprenderla",
            "Intenta evitarla pero no tiene problema en lidiar con ella",
            "Indiferencia",
            "Facilidad pero falta de interés",
            "Facilidad y apasionado por la misma"
        ]
    }
];

function Pregunta(id) {
    var pregunta = preguntas[id];
    this.pregunta = pregunta.pregunta;
    this.id = id;
    this.respuestas = pregunta.respuestas;
    this.respuesta = undefined;
}

Pregunta.prototype.responder = function(respuesta) {
    this.respuesta = ((respuesta % this.respuestas.length) == respuesta) ? respuesta : undefined;
};

Pregunta.prototype.id = function() {
    return this.pregunta.id;
};

Pregunta.prototype.pregunta = function() {
    return this.pregunta;
};

Pregunta.prototype.respuestas = function() {
    return this.respuestas;
};

Pregunta.prototype.respuesta = function() {
    return this.respuesta;
};

Pregunta.prototype.siguiente = function() {
    if (this.id + 1 < preguntas.length)
        return new Pregunta(this.id + 1);
    return undefined;
};

module.exports = Pregunta;
module.exports.preguntasCount = preguntas.length;

module.exports.Carreras = carreras;
module.exports.Preguntas = preguntas;