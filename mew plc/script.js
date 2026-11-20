
/* =====================================================
   REGULA T - SCRIPT PRINCIPAL
   Funciones generales de la plataforma
===================================================== */

const CLAVE_PROGRESO = "regulaT_progreso";

/* =====================================================
   BASE DE DATOS DE CURSOS
===================================================== */

const cursos = {

    matematicas: {
        titulo: "Operaciones básicas",
        descripcion: "Aprende las operaciones fundamentales de las matemáticas.",
        temas: [
            ["Suma", "La suma consiste en agregar dos o más cantidades. Ejemplo: 5 + 3 = 8."],
            ["Resta", "La resta permite encontrar la diferencia entre dos cantidades. Ejemplo: 10 - 4 = 6."],
            ["Multiplicación", "Es una suma repetida. Ejemplo: 4 × 3 = 12."],
            ["División", "Consiste en repartir una cantidad en partes iguales. Ejemplo: 20 ÷ 4 = 5."]
        ],
        preguntas: [
            { p: "¿Cuánto es 8 + 7?", o: ["14", "15", "16"], r: 1 },
            { p: "¿Cuánto es 6 × 4?", o: ["20", "24", "28"], r: 1 },
            { p: "¿Cuánto es 30 ÷ 5?", o: ["5", "6", "7"], r: 1 }
        ]
    },

    fracciones: {
        titulo: "Fracciones y decimales",
        descripcion: "Comprende las fracciones y los números decimales.",
        temas: [
            ["¿Qué es una fracción?", "Representa una parte de un todo. El numerador indica las partes tomadas y el denominador las partes totales."],
            ["Fracciones equivalentes", "Son fracciones diferentes que representan la misma cantidad. Por ejemplo, 1/2 y 2/4."],
            ["Suma de fracciones", "Cuando tienen el mismo denominador, se suman los numeradores y se conserva el denominador."],
            ["Números decimales", "Son números que tienen una parte entera y otra decimal, separadas por un punto."]
        ],
        preguntas: [
            { p: "¿Cuál es equivalente a 1/2?", o: ["2/4", "1/3", "3/5"], r: 0 },
            { p: "¿Cuánto es 1/4 + 2/4?", o: ["2/4", "3/4", "3/8"], r: 1 },
            { p: "¿Cómo se escribe un medio en decimal?", o: ["0.25", "0.5", "1.5"], r: 1 }
        ]
    },

    algebra: {
        titulo: "Álgebra y ecuaciones",
        descripcion: "Aprende a trabajar con expresiones y ecuaciones algebraicas.",
        temas: [
            ["¿Qué es el álgebra?", "Es una rama de las matemáticas que utiliza letras y símbolos para representar cantidades."],
            ["Variables", "Son letras que representan valores desconocidos. Por ejemplo, x puede representar un número."],
            ["Expresiones algebraicas", "Combinan números, variables y operaciones. Ejemplo: 3x + 5."],
            ["Ecuaciones", "Son igualdades matemáticas que contienen valores desconocidos. Ejemplo: x + 4 = 10."]
        ],
        preguntas: [
            { p: "¿Cuánto vale x en x + 5 = 12?", o: ["5", "7", "8"], r: 1 },
            { p: "¿Qué representa una variable?", o: ["Un valor desconocido", "Una operación", "Un resultado fijo"], r: 0 },
            { p: "¿Cuánto es 3 × x si x = 4?", o: ["7", "12", "16"], r: 1 }
        ]
    },

    geometria: {
        titulo: "Geometría y áreas",
        descripcion: "Conoce las figuras geométricas y sus propiedades.",
        temas: [
            ["Figuras geométricas", "Son formas que tienen características como lados, vértices y ángulos."],
            ["Perímetro", "Es la suma de las longitudes de todos los lados de una figura."],
            ["Área", "Es la medida de la superficie que ocupa una figura."],
            ["Volumen", "Es el espacio que ocupa un cuerpo tridimensional."]
        ],
        preguntas: [
            { p: "¿Cuál es el área de un cuadrado de lado 4?", o: ["8", "16", "12"], r: 1 },
            { p: "¿Cómo se calcula el perímetro?", o: ["Sumando sus lados", "Multiplicando sus lados", "Dividiendo sus lados"], r: 0 },
            { p: "¿Qué mide el volumen?", o: ["La superficie", "El espacio ocupado", "El contorno"], r: 1 }
        ]
    },

    porcentajes: {
        titulo: "Porcentajes y proporcionalidad",
        descripcion: "Resuelve problemas de porcentajes y proporciones.",
        temas: [
            ["Porcentajes", "Representan una cantidad de cada 100. El símbolo utilizado es %."],
            ["Cálculo de porcentajes", "Para calcular un porcentaje se multiplica la cantidad por el porcentaje y se divide entre 100."],
            ["Razones y proporciones", "Una razón compara dos cantidades y una proporción establece una igualdad entre razones."],
            ["Regla de tres", "Es un procedimiento para encontrar un valor desconocido cuando existe una relación proporcional."]
        ],
        preguntas: [
            { p: "¿Cuánto es el 50% de 200?", o: ["50", "100", "150"], r: 1 },
            { p: "¿Qué representa el símbolo %?", o: ["Por ciento", "Por mil", "Por diez"], r: 0 },
            { p: "¿Cuánto es el 10% de 300?", o: ["10", "20", "30"], r: 2 }
        ]
    },

    espanol: {
        titulo: "Comprensión lectora",
        descripcion: "Mejora tu capacidad para comprender e interpretar textos.",
        temas: [
            ["Comprensión lectora", "Es la capacidad de entender, interpretar y analizar la información de un texto."],
            ["Idea principal", "Es el mensaje central o más importante que comunica un texto."],
            ["Ideas secundarias", "Son las ideas que complementan, explican o desarrollan la idea principal."],
            ["Inferencias", "Son conclusiones que obtenemos utilizando pistas del texto y nuestros conocimientos."]
        ],
        preguntas: [
            { p: "¿Qué es la idea principal?", o: ["Un ejemplo", "El mensaje central", "Una opinión"], r: 1 },
            { p: "¿Qué hacen las ideas secundarias?", o: ["Complementan la idea principal", "Cambian el título", "Eliminan información"], r: 0 },
            { p: "¿Qué es inferir?", o: ["Copiar un texto", "Sacar conclusiones", "Contar palabras"], r: 1 }
        ]
    },

    ortografia: {
        titulo: "Ortografía y acentuación",
        descripcion: "Aprende las reglas ortográficas y de acentuación.",
        temas: [
            ["Acentuación", "Las palabras se clasifican en agudas, graves, esdrújulas y sobresdrújulas."],
            ["Palabras agudas", "Llevan la sílaba tónica en la última sílaba y se acentúan si terminan en vocal, n o s."],
            ["Palabras graves", "Llevan la sílaba tónica en la penúltima sílaba y se acentúan cuando no terminan en vocal, n o s."],
            ["Signos de puntuación", "La coma, el punto y los signos de interrogación permiten organizar y comprender mejor los textos."]
        ],
        preguntas: [
            { p: "¿Cuál palabra está correctamente escrita?", o: ["Canción", "Cancion", "Cáncion"], r: 0 },
            { p: "¿Qué tipo de palabra es teléfono?", o: ["Aguda", "Grave", "Esdrújula"], r: 2 },
            { p: "¿Qué signo se utiliza para terminar una oración?", o: ["Coma", "Punto", "Dos puntos"], r: 1 }
        ]
    },

    textos: {
        titulo: "Tipos de textos",
        descripcion: "Identifica las características de los diferentes tipos de textos.",
        temas: [
            ["Texto narrativo", "Cuenta acontecimientos reales o ficticios mediante personajes, acciones y escenarios."],
            ["Texto descriptivo", "Explica las características de una persona, objeto, lugar o situación."],
            ["Texto expositivo", "Presenta información de manera clara y objetiva para explicar un tema."],
            ["Texto argumentativo", "Defiende una opinión mediante razones, argumentos y evidencias."]
        ],
        preguntas: [
            { p: "¿Qué tipo de texto cuenta una historia?", o: ["Narrativo", "Expositivo", "Argumentativo"], r: 0 },
            { p: "¿Cuál busca defender una opinión?", o: ["Descriptivo", "Argumentativo", "Narrativo"], r: 1 },
            { p: "¿Cuál explica información de manera objetiva?", o: ["Expositivo", "Narrativo", "Poético"], r: 0 }
        ]
    },

    gramatica: {
        titulo: "Gramática y clases de palabras",
        descripcion: "Identifica las diferentes clases de palabras.",
        temas: [
            ["Sustantivos", "Son palabras que nombran personas, animales, lugares, objetos o ideas."],
            ["Verbos", "Expresan acciones, estados o procesos. Por ejemplo: correr, pensar y estar."],
            ["Adjetivos", "Describen las características o cualidades de los sustantivos."],
            ["Pronombres y adverbios", "Los pronombres sustituyen nombres y los adverbios modifican verbos, adjetivos u otros adverbios."]
        ],
        preguntas: [
            { p: "¿Cuál de estas palabras es un verbo?", o: ["Casa", "Correr", "Bonito"], r: 1 },
            { p: "¿Qué hace un adjetivo?", o: ["Describe un sustantivo", "Expresa una acción", "Sustituye un nombre"], r: 0 },
            { p: "¿Cuál es un sustantivo?", o: ["Rápidamente", "Saltar", "Escuela"], r: 2 }
        ]
    },

    redaccion: {
        titulo: "Redacción de textos",
        descripcion: "Aprende a organizar tus ideas y redactar correctamente.",
        temas: [
            ["Planeación", "Antes de escribir, es importante definir el tema, propósito y destinatario."],
            ["Introducción", "Presenta el tema y permite que el lector conozca de qué tratará el texto."],
            ["Desarrollo", "Expone las ideas principales y secundarias de manera organizada."],
            ["Conclusión", "Cierra el texto y recupera los puntos más importantes."]
        ],
        preguntas: [
            { p: "¿Qué se presenta en la introducción?", o: ["El tema", "La despedida", "Las referencias"], r: 0 },
            { p: "¿Dónde se desarrollan las ideas?", o: ["Conclusión", "Desarrollo", "Título"], r: 1 },
            { p: "¿Cuál es la función de la conclusión?", o: ["Iniciar el texto", "Cerrar las ideas", "Presentar personajes"], r: 1 }
        ]
    },

    ciencias: {
        titulo: "El cuerpo humano",
        descripcion: "Conoce los principales sistemas y funciones del cuerpo humano.",
        temas: [
            ["Sistema digestivo", "Transforma los alimentos para obtener nutrientes que el organismo necesita."],
            ["Sistema respiratorio", "Permite incorporar oxígeno y eliminar dióxido de carbono."],
            ["Sistema circulatorio", "Transporta sangre, oxígeno y nutrientes por todo el cuerpo."],
            ["Sistema nervioso", "Coordina las funciones del organismo y recibe información del entorno."]
        ],
        preguntas: [
            { p: "¿Qué sistema permite respirar?", o: ["Digestivo", "Respiratorio", "Nervioso"], r: 1 },
            { p: "¿Qué órgano bombea la sangre?", o: ["Pulmón", "Cerebro", "Corazón"], r: 2 },
            { p: "¿Qué sistema coordina las funciones del cuerpo?", o: ["Nervioso", "Digestivo", "Óseo"], r: 0 }
        ]
    },

    celula: {
        titulo: "La célula y sus funciones",
        descripcion: "Descubre las estructuras y funciones de las células.",
        temas: [
            ["¿Qué es la célula?", "Es la unidad estructural y funcional básica de los seres vivos."],
            ["Membrana celular", "Rodea la célula y regula el intercambio de sustancias con el exterior."],
            ["Núcleo", "Contiene la mayor parte del material genético de las células eucariotas."],
            ["Citoplasma", "Es el medio interno donde se encuentran los orgánulos celulares."]
        ],
        preguntas: [
            { p: "¿Cuál es la unidad básica de la vida?", o: ["El órgano", "La célula", "El tejido"], r: 1 },
            { p: "¿Qué contiene el núcleo?", o: ["Material genético", "Sangre", "Oxígeno"], r: 0 },
            { p: "¿Qué regula la entrada y salida de sustancias?", o: ["Núcleo", "Membrana celular", "Citoplasma"], r: 1 }
        ]
    },

    ecosistemas: {
        titulo: "Ecosistemas y biodiversidad",
        descripcion: "Comprende la relación entre los seres vivos y su ambiente.",
        temas: [
            ["¿Qué es un ecosistema?", "Es el conjunto de seres vivos y elementos no vivos que interactúan en un lugar."],
            ["Factores bióticos", "Son los componentes vivos, como plantas, animales, hongos y microorganismos."],
            ["Factores abióticos", "Son los elementos no vivos, como el agua, la luz, el suelo y la temperatura."],
            ["Cadenas alimenticias", "Representan cómo se transfiere la energía entre organismos mediante la alimentación."]
        ],
        preguntas: [
            { p: "¿Cuál es un factor biótico?", o: ["Agua", "Luz solar", "Planta"], r: 2 },
            { p: "¿Cuál es un factor abiótico?", o: ["Animal", "Temperatura", "Hongo"], r: 1 },
            { p: "¿Qué representa una cadena alimenticia?", o: ["Transferencia de energía", "Ciclo del agua", "Movimiento de planetas"], r: 0 }
        ]
    },

    materia: {
        titulo: "La materia y sus cambios",
        descripcion: "Conoce las propiedades y estados de la materia.",
        temas: [
            ["¿Qué es la materia?", "Es todo aquello que tiene masa y ocupa un lugar en el espacio."],
            ["Estado sólido", "Tiene forma y volumen definidos."],
            ["Estado líquido", "Tiene volumen definido, pero adopta la forma del recipiente."],
            ["Estado gaseoso", "No tiene forma ni volumen definidos y se expande."]
        ],
        preguntas: [
            { p: "¿Qué estado tiene forma definida?", o: ["Sólido", "Líquido", "Gaseoso"], r: 0 },
            { p: "¿Qué estado adopta la forma del recipiente?", o: ["Sólido", "Líquido", "Ninguno"], r: 1 },
            { p: "¿Qué es la materia?", o: ["Solo los seres vivos", "Todo lo que tiene masa y ocupa espacio", "Solo los líquidos"], r: 1 }
        ]
    },

    energia: {
        titulo: "Energía y sus transformaciones",
        descripcion: "Aprende sobre las formas y transformaciones de la energía.",
        temas: [
            ["¿Qué es la energía?", "Es la capacidad de producir cambios o realizar un trabajo."],
            ["Energía cinética", "Es la energía que posee un cuerpo debido a su movimiento."],
            ["Energía potencial", "Es la energía almacenada debido a la posición o configuración de un cuerpo."],
            ["Energías renovables", "Son fuentes que se regeneran naturalmente, como la solar, eólica e hidráulica."]
        ],
        preguntas: [
            { p: "¿Qué energía tiene un objeto en movimiento?", o: ["Potencial", "Cinética", "Química"], r: 1 },
            { p: "¿Cuál es una fuente renovable?", o: ["Carbón", "Petróleo", "Solar"], r: 2 },
            { p: "¿Qué es la energía?", o: ["Capacidad de producir cambios", "Una sustancia", "Un objeto"], r: 0 }
        ]
    },

    ingles: {
        titulo: "Inglés básico",
        descripcion: "Aprende vocabulario y expresiones cotidianas en inglés.",
        temas: [
            ["Greetings", "Hello significa hola. Good morning significa buenos días. Goodbye significa adiós."],
            ["Introductions", "My name is significa mi nombre es. Nice to meet you significa mucho gusto."],
            ["Numbers", "One es uno, two es dos, three es tres y four es cuatro."],
            ["Everyday vocabulary", "Book significa libro, house significa casa, water significa agua y school significa escuela."]
        ],
        preguntas: [
            { p: "¿Qué significa Hello?", o: ["Adiós", "Hola", "Gracias"], r: 1 },
            { p: "¿Qué significa Book?", o: ["Libro", "Casa", "Agua"], r: 0 },
            { p: "¿Cómo se dice gracias en inglés?", o: ["Please", "Sorry", "Thank you"], r: 2 }
        ]
    },

    tobe: {
        titulo: "Verb to be",
        descripcion: "Aprende a utilizar am, is y are.",
        temas: [
            ["¿Qué es el verbo to be?", "Significa ser o estar y se utiliza para describir personas, estados y situaciones."],
            ["Am", "Se utiliza con el pronombre I. Ejemplo: I am a student."],
            ["Is", "Se utiliza con he, she e it. Ejemplo: She is happy."],
            ["Are", "Se utiliza con you, we y they. Ejemplo: They are friends."]
        ],
        preguntas: [
            { p: "¿Qué forma corresponde a I?", o: ["Is", "Am", "Are"], r: 1 },
            { p: "¿Cuál es correcta?", o: ["She are happy", "She am happy", "She is happy"], r: 2 },
            { p: "¿Qué forma corresponde a They?", o: ["Are", "Is", "Am"], r: 0 }
        ]
    },

    present: {
        titulo: "Simple present",
        descripcion: "Aprende a expresar rutinas y hábitos en presente simple.",
        temas: [
            ["Uso del presente simple", "Se utiliza para hablar de hábitos, rutinas y hechos generales."],
            ["Oraciones afirmativas", "Se utiliza el verbo en su forma base. Con he, she e it generalmente se agrega s o es."],
            ["Oraciones negativas", "Se utiliza do not o does not antes del verbo principal."],
            ["Preguntas", "Se utiliza Do o Does al inicio de la pregunta."]
        ],
        preguntas: [
            { p: "¿Cuál es la forma correcta?", o: ["She play", "She plays", "She playing"], r: 1 },
            { p: "¿Qué auxiliar se utiliza con he?", o: ["Do", "Does", "Are"], r: 1 },
            { p: "¿Qué expresa el presente simple?", o: ["Rutinas", "Acciones pasadas", "Acciones futuras únicamente"], r: 0 }
        ]
    },

    past: {
        titulo: "Simple past",
        descripcion: "Aprende a expresar acontecimientos del pasado.",
        temas: [
            ["Uso del pasado simple", "Se utiliza para hablar de acciones que comenzaron y terminaron en el pasado."],
            ["Verbos regulares", "Generalmente forman el pasado agregando -ed. Ejemplo: play se convierte en played."],
            ["Verbos irregulares", "Cambian su forma. Ejemplo: go se convierte en went."],
            ["Oraciones negativas", "Se utiliza did not seguido del verbo en su forma base."]
        ],
        preguntas: [
            { p: "¿Cuál es el pasado de play?", o: ["Played", "Playing", "Plays"], r: 0 },
            { p: "¿Cuál es el pasado de go?", o: ["Goed", "Went", "Going"], r: 1 },
            { p: "¿Qué auxiliar se utiliza para negar?", o: ["Does", "Do", "Did"], r: 2 }
        ]
    },

    vocabulario: {
        titulo: "Vocabulario y conversaciones",
        descripcion: "Practica expresiones y vocabulario cotidiano en inglés.",
        temas: [
            ["Greetings", "Hello: hola. Good morning: buenos días. Good evening: buenas tardes o noches."],
            ["Food", "Apple significa manzana, bread significa pan y milk significa leche."],
            ["Places", "School significa escuela, hospital significa hospital y library significa biblioteca."],
            ["Conversations", "How are you? significa ¿Cómo estás? I'm fine significa estoy bien."]
        ],
        preguntas: [
            { p: "¿Qué significa Apple?", o: ["Naranja", "Manzana", "Plátano"], r: 1 },
            { p: "¿Qué significa Library?", o: ["Biblioteca", "Hospital", "Escuela"], r: 0 },
            { p: "¿Qué significa How are you?", o: ["¿Cuántos años tienes?", "¿Dónde vives?", "¿Cómo estás?"], r: 2 }
        ]
    }

};

/* =====================================================
   FUNCIONES DE ALMACENAMIENTO
===================================================== */

function obtenerProgreso() {
    try {
        const datos = JSON.parse(localStorage.getItem(CLAVE_PROGRESO));

        return datos && typeof datos === "object"
            ? datos
            : { iniciados: [], terminados: [], cuestionarios: 0 };
    } catch (error) {
        return { iniciados: [], terminados: [], cuestionarios: 0 };
    }
}

function guardarProgreso(datos) {
    localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(datos));
}

function iniciarCurso(id) {
    const progreso = obtenerProgreso();

    if (!progreso.iniciados.includes(id)) {
        progreso.iniciados.push(id);
        guardarProgreso(progreso);
    }
}

function completarCurso(id) {
    const progreso = obtenerProgreso();

    if (!progreso.terminados.includes(id)) {
        progreso.terminados.push(id);
    }

    guardarProgreso(progreso);
}

function registrarCuestionario() {
    const progreso = obtenerProgreso();

    progreso.cuestionarios++;
    guardarProgreso(progreso);
}

/* =====================================================
   CURSOS: MOSTRAR Y CERRAR
===================================================== */

let cursoActual = null;

function abrirCurso(id) {
    const curso = cursos[id];

    if (!curso) return;

    cursoActual = id;
    iniciarCurso(id);

    const zona = document.getElementById("zonaCurso");
    const contenido = document.getElementById("contenidoCurso");

    if (!zona || !contenido) return;

    let html = `
        <span class="etiqueta">CURSO DE APRENDIZAJE</span>
        <h2>${curso.titulo}</h2>
        <p>${curso.descripcion}</p>
        <hr>
        <h3>Contenido del curso</h3>
    `;

    curso.temas.forEach((tema, index) => {
        html += `
            <article class="lesson-topic">
                <h3>${index + 1}. ${tema[0]}</h3>
                <p>${tema[1]}</p>
            </article>
        `;
    });

    html += `
        <hr>
        <h3>Cuestionario de aprendizaje</h3>
        <p>Responde las siguientes preguntas para comprobar lo que aprendiste.</p>
        <form id="formCuestionario">
    `;

    curso.preguntas.forEach((pregunta, index) => {
        html += `
            <div class="quiz-question">
                <h3>${index + 1}. ${pregunta.p}</h3>
        `;

        pregunta.o.forEach((opcion, opcionIndex) => {
            html += `
                <label style="display:block; margin:10px 0;">
                    <input type="radio"
                           name="pregunta${index}"
                           value="${opcionIndex}"
                           required>
                    ${opcion}
                </label>
            `;
        });

        html += `</div>`;
    });

    html += `
            <button type="submit" class="btn">
                Enviar respuestas
            </button>
        </form>
        <div id="resultadoCuestionario"></div>
    `;

    contenido.innerHTML = html;
    zona.hidden = false;

    document.getElementById("formCuestionario")
        .addEventListener("submit", calificarCuestionario);

    zona.scrollIntoView({ behavior: "smooth", block: "start" });
}

function cerrarCurso() {
    const zona = document.getElementById("zonaCurso");

    if (zona) {
        zona.hidden = true;
    }

    cursoActual = null;
}

/* =====================================================
   CUESTIONARIOS
===================================================== */

function calificarCuestionario(event) {
    event.preventDefault();

    if (!cursoActual) return;

    const curso = cursos[cursoActual];
    const formulario = event.target;

    let correctas = 0;

    curso.preguntas.forEach((pregunta, index) => {
        const respuesta = formulario.querySelector(
            `input[name="pregunta${index}"]:checked`
        );

        if (respuesta && Number(respuesta.value) === pregunta.r) {
            correctas++;
        }
    });

    const total = curso.preguntas.length;
    const porcentaje = Math.round((correctas / total) * 100);

    registrarCuestionario();

    let mensaje = "";

    if (porcentaje === 100) {
        mensaje = "¡Excelente! Contestaste todas las preguntas correctamente.";
        completarCurso(cursoActual);
    } else if (porcentaje >= 60) {
        mensaje = "¡Buen trabajo! Has comprendido gran parte del tema. Puedes repasar y volver a intentarlo.";
    } else {
        mensaje = "No te desanimes. Te recomendamos repasar el contenido e intentarlo nuevamente.";
    }

    const resultado = document.getElementById("resultadoCuestionario");

    resultado.innerHTML = `
        <div class="card" style="margin-top:20px;">
            <h3>Resultado de tu cuestionario</h3>
            <h2>${porcentaje}%</h2>
            <p>Respuestas correctas: ${correctas} de ${total}</p>
            <p>${mensaje}</p>
            <button type="button" class="btn" onclick="abrirCurso('${cursoActual}')">
                Volver a estudiar
            </button>
        </div>
    `;

    formulario.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });

    formulario.querySelector("button[type='submit']").disabled = true;
}

/* =====================================================
   BUSCADOR Y FILTROS DE CURSOS
===================================================== */

function filtrarCursos() {
    const buscador = document.getElementById("buscador");
    const filtro = document.getElementById("filtro");
    const lista = document.getElementById("listaCursos");

    if (!lista) return;

    const texto = buscador ? buscador.value.toLowerCase().trim() : "";
    const materia = filtro ? filtro.value : "todos";

    const tarjetas = lista.querySelectorAll(".course-card");
    let visibles = 0;

    tarjetas.forEach(tarjeta => {
        const contenido = tarjeta.textContent.toLowerCase();
        const categoria = tarjeta.dataset.materia;

        const coincideTexto = contenido.includes(texto);
        const coincideMateria = materia === "todos" || categoria === materia;

        const mostrar = coincideTexto && coincideMateria;

        tarjeta.hidden = !mostrar;

        if (mostrar) visibles++;
    });

    const sinResultados = document.getElementById("sinResultados");

    if (sinResultados) {
        sinResultados.hidden = visibles > 0;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const buscador = document.getElementById("buscador");
    const filtro = document.getElementById("filtro");

    if (buscador) {
        buscador.addEventListener("input", filtrarCursos);
    }

    if (filtro) {
        filtro.addEventListener("change", filtrarCursos);
    }

    cargarProgreso();
    configurarEvaluacion();
    configurarContacto();

});

/* =====================================================
   EVALUACIÓN INICIAL
===================================================== */

function configurarEvaluacion() {
    const formulario = document.getElementById("formEvaluacion");

    if (!formulario) return;

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const grado = document.getElementById("grado").value;
        const materia = document.getElementById("materia").value;
        const metodo = document.getElementById("metodo").value;
        const tiempo = document.getElementById("tiempo").value;

        if (!nombre || !grado || !materia || !metodo || !tiempo) {
            alert("Completa todos los campos.");
            return;
        }

        const nombresMaterias = {
            matematicas: "Matemáticas",
            espanol: "Español",
            ciencias: "Ciencias",
            ingles: "Inglés"
        };

        const metodos = {
            videos: "videos y clases grabadas",
            lectura: "lecturas y explicaciones",
            practica: "ejercicios y cuestionarios"
        };

        const resultado = document.getElementById("resultadoEvaluacion");
        const texto = document.getElementById("textoRecomendacion");

        texto.innerHTML = `
            <p>¡Hola, <strong>${escaparHTML(nombre)}</strong>!</p>
            <p>Gracias por completar tu evaluación inicial.</p>
            <p>Tu grado escolar es: <strong>${grado} de secundaria</strong>.</p>
            <p>Tu materia de mayor dificultad es:
            <strong>${nombresMaterias[materia]}</strong>.</p>
            <p>Tu método de aprendizaje preferido es:
            <strong>${metodos[metodo]}</strong>.</p>
            <p>Tu tiempo disponible para estudiar es:
            <strong>${tiempo}</strong>.</p>
            <h3>Tu recomendación</h3>
            <p>Te recomendamos comenzar con nuestros cursos de
            ${nombresMaterias[materia]}, utilizando
            ${metodos[metodo]} y dedicando ${tiempo} diariamente.</p>
        `;

        resultado.hidden = false;

        resultado.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}

/* =====================================================
   FORMULARIO DE CONTACTO
===================================================== */

function configurarContacto() {
    const formulario = document.getElementById("formContacto");

    if (!formulario) return;

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const respuesta = document.getElementById("respuestaContacto");

        if (!correo || !mensaje) {
            alert("Completa todos los campos.");
            return;
        }

        respuesta.textContent =
            "¡Gracias por tu sugerencia! Tu mensaje ha sido registrado en este formulario.";

        respuesta.hidden = false;

        formulario.reset();
    });
}

/* =====================================================
   PÁGINA DE PROGRESO
===================================================== */

function cargarProgreso() {
    const progreso = obtenerProgreso();

    const totalCursos = document.getElementById("totalCursos");
    const cursosTerminados = document.getElementById("cursosTerminados");
    const totalCuestionarios = document.getElementById("totalCuestionarios");

    if (!totalCursos && !cursosTerminados && !totalCuestionarios) return;

    if (totalCursos) {
        totalCursos.textContent = progreso.iniciados.length;
    }

    if (cursosTerminados) {
        cursosTerminados.textContent = progreso.terminados.length;
    }

    if (totalCuestionarios) {
        totalCuestionarios.textContent = progreso.cuestionarios;
    }

    const porcentaje = progreso.iniciados.length > 0
        ? Math.round(
            (progreso.terminados.length / progreso.iniciados.length) * 100
        )
        : 0;

    const barra = document.getElementById("barraProgreso");
    const textoPorcentaje = document.getElementById("porcentajeProgreso");

    if (barra) {
        barra.style.width = porcentaje + "%";
    }

    if (textoPorcentaje) {
        textoPorcentaje.textContent = porcentaje + "% completado";
    }

    const lista = document.getElementById("listaProgreso");

    if (!lista) return;

    if (progreso.iniciados.length === 0) {
        lista.innerHTML = "<p>Aún no has comenzado ningún curso.</p>";
        return;
    }

    lista.innerHTML = progreso.iniciados.map(id => {
        const curso = cursos[id];

        if (!curso) return "";

        const terminado = progreso.terminados.includes(id);

        return `
            <div class="progress-item">
                <h3>${curso.titulo}</h3>
                <p>${curso.descripcion}</p>
                <span class="tag">
                    ${terminado ? "✓ Completado" : "En progreso"}
                </span>
            </div>
        `;
    }).join("");
}

/* =====================================================
   REINICIAR PROGRESO
===================================================== */

function reiniciarProgreso() {
    const confirmar = confirm(
        "¿Estás seguro de que deseas reiniciar todo tu progreso? Esta acción no se puede deshacer."
    );

    if (!confirmar) return;

    guardarProgreso({
        iniciados: [],
        terminados: [],
        cuestionarios: 0
    });

    cargarProgreso();

    alert("Tu progreso se ha reiniciado correctamente.");
}

/* =====================================================
   BUSCADOR GENERAL DE LA PÁGINA PRINCIPAL
===================================================== */

function ejecutarBusqueda() {
    const input = document.getElementById("searchInput");
    const resultados = document.getElementById("searchResults");

    if (!input || !resultados) return;

    const texto = input.value.toLowerCase().trim();

    resultados.innerHTML = "";

    if (texto.length === 0) {
        resultados.style.display = "none";
        return;
    }

    const paginas = [
        {
            nombre: "Inicio",
            descripcion: "Página principal de Regula T",
            enlace: "index.html"
        },
        {
            nombre: "Cursos",
            descripcion: "Explora todos nuestros cursos",
            enlace: "cursos.html"
        },
        {
            nombre: "Evaluación",
            descripcion: "Realiza tu evaluación inicial",
            enlace: "evaluacion.html"
        },
        {
            nombre: "Mi progreso",
            descripcion: "Consulta tus avances académicos",
            enlace: "progreso.html"
        },
        {
            nombre: "Nosotros",
            descripcion: "Conoce al equipo de Regula T",
            enlace: "nosotros.html"
        },
        ...Object.entries(cursos).map(([id, curso]) => ({
            nombre: curso.titulo,
            descripcion: curso.descripcion,
            enlace: "cursos.html",
            curso: id
        }))
    ];

    const encontrados = paginas.filter(pagina =>
        (pagina.nombre + " " + pagina.descripcion).toLowerCase().includes(texto)
    );

    if (encontrados.length === 0) {
        resultados.innerHTML = `
            <div class="no-results">
                No se encontraron resultados.
            </div>
        `;
    } else {
        encontrados.forEach(pagina => {
            const enlace = document.createElement("a");

            enlace.href = pagina.enlace;
            enlace.innerHTML = `
                <strong>${escaparHTML(pagina.nombre)}</strong>
                <small>${escaparHTML(pagina.descripcion)}</small>
            `;

            if (pagina.curso) {
                enlace.addEventListener("click", function(event) {
                    event.preventDefault();

                    sessionStorage.setItem("cursoSeleccionado", pagina.curso);

                    window.location.href = "cursos.html";
                });
            }

            resultados.appendChild(enlace);
        });
    }

    resultados.style.display = "block";
}

/* =====================================================
   ABRIR CURSO DESDE EL BUSCADOR
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const cursoSeleccionado = sessionStorage.getItem("cursoSeleccionado");

    if (cursoSeleccionado && document.getElementById("listaCursos")) {
        sessionStorage.removeItem("cursoSeleccionado");

        if (cursos[cursoSeleccionado]) {
            abrirCurso(cursoSeleccionado);
        }
    }
});

/* =====================================================
   SEGURIDAD: ESCAPAR TEXTO HTML
===================================================== */

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, caracter => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[caracter]);
}

/* =====================================================
   FIN DEL SCRIPT PRINCIPAL - REGULA T
===================================================== */
