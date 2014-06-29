var preguntasPensamientoLateral = [
"Un hombre construye una casa rectangular, con todas las paredes mirando al sur, luego ve un oso. ¿De que color?",
"Algunos meses tienen 31 días, otros solo 30. ¿Cuantos tienen 28 días?",
"Dos indios americanos, uno niño y otro adulto, están sentados en un tronco, el indiecito es hijo del adulto pero el adulto no es padre del indio pequeño. ¿Cómo es posible?",
"Un cliente se sobresaltó al encontrar una mosca en su café. Pidió al camarero que le trajese una nueva taza. Tras tomar un sorbo, el cliente dijo: - \"Esta es la misma taza de café que tenía antes!\" - ¿Cómo lo supo?",
"Si un hombre cava un hoyo en una hora y dos hombres cavan dos hoyos en dos horas. ¿Cuanto tardará un hombre en cavar medio hoyo? ",
"Está corriendo en una competencia, pasa al que se encuentra segundo. ¿Cuál es su nueva posición?",
"Un hombre yace muerto en un campo. A su lado hay un paquete sin abrir. No hay nadie más en el campo. ¿Como murio?",
"Hay tres interruptores afuera de un cuarto que está cerrado con llave. Adentro del cuarto hay tres lámparas. Usted puede encender y apagar los interruptores cuantas veces quiera, siempre y cuando la puerta del cuarto permanezca cerrada. Entonces, usted debe entrar una sola vez al cuarto y determinar cual interruptor le corresponde a cada lámpara.",
"¿Cómo podremos disponer 9 bolas en 4 cajas de forma que cada una tenga un número impar de bolas y distinto del de cada una de las otras tres?",
"Nombre tres días consecutivos sin utilizar las palabras Martes, Jueves y Sábado.",
"Sumando 3 cifras iguales obtengo como resultado 60 pero.. no uso el 20 ¿Cómo hago?",
"¿Qué números siguen y por qué? 1 — 2 — 4 — 5 — 8 — 11 –12 — 14 — … — … — …",
"Un taxista recogió a una señora que no paraba de hablar. Como no tenía ganas de entrar en conversación simuló ser sordo y mudo señalando su boca y oídos para indicar que no podía hablar ni oír. Cuando llego al destino apunto al taxímetro para indicar cuánto debía pagarle. La pasajera lo hizo y se bajó. En ese momento se dió cuenta de que el taxista no podía ser sordomudo.",
"Un hombre entra en un bar y pide al camarero un vaso de agua. El camarero de repente saca una pistola y le apunta. El hombre se sorprende pero después le da las gracias y se marcha.",
"Un joven por salir de prisa a encontrarse con sus amigos dejó olvidada la licencia de conducir. Una vez en la calle no se detuvo en la luz roja y siguió por una vía de sentido contrario. Todo esto fue observado por un policía de transito quien no hizo el menor intento para impedírselo o para citarlo. ¿Por qué?",
"Un día José celebra su cumpleaños. Dos días más tarde su hermano gemelo mayor, Santiago, celebra su cumpleaños.¿Cómo es posible esto?",
"En una línea de ferrocaril, el tendido tiene doble vía excepto en un túnel, que no es lo bastante ancho para acomodar ambas. Por ello, en el túnel, la línea es de vía simple. Una tarde, entró un ten en el túnel marchando en un sentido, y otro tren en el mismo túnel, pero en sentido contrario. Ambos iban a toda velocidad; y sin embargo no llegaron a colisionar. Explíquelo.",
"Un pastor Tenia que crusar un rio, Para hacerlo Dispone de un pequeño barco. El pastor lleva con el Un Lobo, Una Oveja y Una Lechuga,[El barco puedo portar a el y a una cosa mas] Si el lobo se que da con la Oveja solos Se la come, Si la oveja se queda con la lechuga, Se la come ¿Cómo hace el pastor para pasar las tres cosas que lleva sanas y salvas?",
"Un hombre estaba en su habitacion Leyendo un libro, En eso, su esposa le apaga la luz. Sin embargo, el hombre sigue leyendo ¿Cómo es posible?",
"Un prisionero esta encerrado en una celda que tiene dos puertas, una conduce a la muerte y la otra a la libertad. Cada puerta esta custodiada por un vigilante, el prisionero sabe que uno de ellos siempre dice la verdad, y el otro siempre miente. Para elegir la puerta por la que pasara solo puede hacer una pregunta a uno solo de los vigilantes."
];

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
        descripcion: "Capacidad para utilizar los números de una manera efectiva y de razonar adecuadamente empleando el pensamiento lógico, siendo esta última capacidad  un proceso cognitivo que conlleva la  selección de una respuesta de adaptación al medio, basada en análisis y comparación de los diversos elementos que intervienen y forman un determinado contexto. El experto evaluará la capacidad del jóven para resolver problemas de lógica-matemática.",
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
        descripcion: "La teoría de flexibilidad cognitiva enfatiza la posibilidad del traslado de conocimiento y habilidades más allá de su situación de aprendizaje inicial debido a que se extrapola la información anterior y se observa desde varias perspectivas novedosas, logrando utilizar el conocimiento o información en momentos posteriores. Los tests relacionados con esta teoría, tratan de cuantificar la capacidad para concentrarse atendiendo a la vez a varias condiciones cambiantes en el entorno.",
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
        descripcion: "El pensamiento vertical (lógico, analítico, convergente y deductivo) utiliza la información por su valor intrínseco, para llegar eventualmente a una solución dentro de los modelos tradicionales existentes. En cambio, el pensamiento lateral (creativo, imaginativo, divergente e inductivo) no utiliza la información en sí misma sino como un medio para provocar una disgregación de los modelos y su reestructuración perspicaz en ideas creativas. En este <a href=\"pensamientoLateral\">enlace</a> se presenta un set de preguntas para evaluar la estructuración de los razonamientos del jóven entrevistado",
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
        descripcion: "En esta sección, se intenta conocer los interéses del jóven en materia tecnológica, debido a que si existe una pasión por los aparatos eléctricos/electrónicos, el querer entender como funcionan para satisfacer la curiosidad propia, puede resultar determinante en la elección de una carrera que cumpla con las expectativas del jóven interesado.",
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
        descripcion: "El Test de Wason consiste en el siguiente ejercicio deductivo: A usted le muestran un grupo de cuatro cartas en una mesa. Cada una tiene un úmero de un lado y un color del otro. Las caras visibles de las cartas muestran 3, 8, rojo y marrón. ¿A qué dos cartas debería dar vuelta para omprobar la veracidad de la proposición que si una carta muestra un número par por un lado, entonces la cara opuesta muestra un color primario?. Se evaluará el razonamiento y análisis que realiza el paciente para resolver el problema, permitiendo determinar su capacidad deductiva.",
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
        descripcion: "Tener capacidad para el análisis y el razonamiento supone mostrar destreza a la hora de extraer conclusiones sobre datos acontecidos, ser capaz de fragmentar y descomponer procesos complejos en sus componentes generales y específicos y de definir todas las tareas y estructuras necesarias para la resolución de problemas. El experto aplicando su conocimiento y herramientas deberá evaluar la capacidad de análisis del paciente.",
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
        descripcion: "La matemática, apodada \"La madre de las Ciencias\", establece un lenguaje común entre todas las carreras que analizamos en este software, algunas la emplean en mayor, y otras en menor medida. Varios matemáticos a lo largo de la historia han comparado la majestuosidad de dicha disciplina con la música, la pintura y otras artes. La destreza y más aún, el sentimiento del jóven para con la misma, es un factor determinante a la hora de elegir una carrera.",
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
    this.descripcion = pregunta.descripcion;
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
    this.posiblesCarreras = carreras.slice();
    this.resultado = undefined;
}

module.exports = Pregunta;
module.exports.preguntasCount = preguntas.length;

module.exports.TestModel = TestModel;
module.exports.Carreras = carreras;
module.exports.Preguntas = preguntas;
module.exports.PreguntasPensamientoLateral = preguntasPensamientoLateral;