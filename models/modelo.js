var carreras =[
    { id: 0, nombre: "Licenciatura en matemática", descripcion: "El licenciado en Matemática es un profesional con nivel y entrenamiento de excelencia. De acuerdo a su interés, los licenciados en Matemática están en condiciones de: <br>-Seguir estudios de Doctorado y dedicarse a la investigación a nivel internacional<br>-Ejercer la docencia universitaria en otras carreras que requieran cursos de matemática<br>-Insertarse laboralmente en la actividad privada (industrias y empresas consultoras, fundamentalmente) y en institutos de investigación o desarrollo tecnológico<br>-Trabajar en grupos interdisciplinarios con graduados de las distintas carreras de nuestra facultad"},
    { id: 1, nombre: "Licenciatura en física", descripcion: "Los Licenciados en Ciencias Físicas pueden ejercer su profesión tanto en la actividad pública como en la privada. La actividad docente es destacada en el ámbito universitario como también en el de la enseñanza secundaria. La actividad de investigación se desarrolla principalmente en las facultades e institutos de ciencias de todo el país y en menor grado en la industria privada. "},
    { id: 2, nombre: "Licenciatura en química", descripcion: "El Licenciado en Ciencias Químicas puede ejercer su profesión tanto en la actividad pública como en la privada. La actividad docente es destacada en el ámbito universitario y en el de la enseñanza secundaria. La actividad de investigación se desarrolla principalmente en facultades e institutos de ciencias de todo el país y, en menor grado, en la industria (alimenticia, textil, del plástico, del papel, farmacéutica, etc.)."},
    { id: 3, nombre: "Licenciatura en Ciencias de la Computación", descripcion: "La tendencia actual, en la cual cada vez más empresas realizan a la vez investigación y desarrollo, hace que la demanda de recursos humanos capacitados esté en constante expansión. Hay en este momento en todo el mundo mucho menos profesionales de informática que los que se demandan. Sin embargo, para acceder a los puestos laborales mejor remunerados se requiere una formación mixta que es ampliamente satisfecha por el perfil de nuestros estudiantes y egresados.<br>Es muy común que a partir del segundo año de la carrera nuestros alumnos comiencen a trabajar en empresas vinculadas al desarrollo de software, insertándose desde temprano en el mercado laboral. Actualmente hay una gran oferta de trabajos muy bien remunerados, algunos de entre cuatro y seis horas diarias, ya sea directamente en empresas o mediante convenios de pasantías, lo que hace posible trabajar y estudiar al mismo tiempo. Además, todas las materias de la carrera se cursan en la misma banda horaria, comenzando a partir de las 17 hs.<br>Nuestra carrera se distingue también por tener un componente científico, dado que es una de las pocas en donde se realiza investigación en temas de punta a nivel internacional. Los alumnos que buscan un perfil más académico pueden conectarse con los diferentes grupos de investigación que trabajan en temas tan diversos como robótica, procesamiento de imágenes, bioinformática, desarrollo de juegos, seguridad informática, redes de comunicaciones, ingeniería de software, etc. Existe una gran oferta de becas de investigación y la posibilidad de asistir a congresos nacionales e internacionales. Los estudiantes pueden complementar, si lo desean, su carrera académica realizando un doctorado en la facultad o en el exterior. "},
    { id: 4, nombre: "Ingeniería Civil", descripcion: "El ingeniero civil está capacitado para realizar el estudio, proyecto, diseño, calculo de estructuras, dirección, inspección, construcción, explotación y mantenimiento de: edificios industriales y urbanos, obras de embalse, gestión y abastecimiento de agua e instalaciones hidromecánicas, obras vinculadas con los diversos modos de transporte (vial, ferroviario, fluvial, marítimo y aéreo) y obras vinculadas al planeamiento urbano."},
    { id: 5, nombre: "Ingeniería Electrónica", descripcion: "El ingeniero electrónico posee una profunda formación en todo lo referido a sistemas, circuitos e instrumentos electrónicos y sus aplicaciones.<br><br>Estos conocimientos lo capacitan para:<br>. Proyectar y ejecutar sistemas de enlace de comunicaciones, de procesamiento electrónico de datos (hardware), incluyendo su procesamiento (software).<br>. Estudiar, construir y operar sistemas, subsistemas y componentes para la generación, transmisión, recepción, distribución, reproducción y procesamiento de señales electromagnéticas, ópticas y acústicas.<br>. Diseñar y fabricar equipos electrónicos e incorporar subsistemas electrónicos embebidos a máquinas, artefactos y procesos de distinto tipo.<br>. Proyectar sistemas de comunicaciones, automatismos para control industrial y audio profesional.<br>. Proyectar y diseñar sistemas de inteligencia en edificios y viviendas, tráfico urbano y carreteras, sistemas y medios de transporte.<br>. Entender y certificar en mediciones de ruido y vibraciones siguiendo la legislación vigente sobre impacto ambiental."}
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
            "No comprende la consigna",
            "Tiempo elevado con necesidad de ayuda",
            "Razonamiento parcialmente correcto sin llegar al resultado",
            "Razonamiento y resultados correctos",
            "Razonamiento y resultados correctos en tiempo óptimo"
        ]
    },
    {
        pregunta : "Capacidad de análisis",
        respuestas : [
            "Bajo",
            "El análisis presenta falencias",
            "Medio",
            "Distinguir claramente las conexiones y dependencias",
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
    var pregunta = preguntas[parseInt(id)];
    this.pregunta = pregunta.pregunta;
    this.id = parseInt(id);
    this.respuestas = pregunta.respuestas;
    this.respuesta = undefined;
}

Pregunta.prototype.responder = function(respuesta) {
    this.respuesta = ((parseInt(respuesta) % this.respuestas.length) == parseInt(respuesta)) ? parseInt(respuesta) : undefined;
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

function TestModel() {
    this.preguntas = new Array(6);
    this.posiblesCarreras = [];
    this.resultado = undefined;
}

module.exports = Pregunta;
module.exports.preguntasCount = preguntas.length;

module.exports.TestModel = TestModel;
module.exports.Carreras = carreras;
module.exports.Preguntas = preguntas;