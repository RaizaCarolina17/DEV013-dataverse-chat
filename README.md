# Dataverse Chat

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Hitos](#6-hitos)
* [7. Criterios de aceptación mínimos del proyecto](#7-criterios-de-aceptación-mínimos-del-proyecto)
* [8. Consideraciones para pedir tu Project Feedback](#10-consideraciones-para-pedir-tu-project-feedback)

***

## 1. Preámbulo

Los desarrollos tecnológicos hoy nos ofrecen la posibilidad de experimentar
la vida de una manera en la que quizá cincuenta o treinta años atrás
no hubiéramos podidio imaginar.

En este proyecto se aprovecha este avance, especialmente en lo relacionado 
con la Inteligencia Artificial, para conectar, por lo menos simbólicamente,
con las escritoras más famosas del mundo.


![Preview app](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)

## 2. Resumen del proyecto

En este proyecto la aplicación desarrollada en Dataverse se amplió y se desarrolló una
[Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application).
Esta página conserva las funcionalidades de visualizar, filtrar, ordenar y
calcular alguna estadística y se le adiciona una nueva vista para
consultar información detallada de cada personaje/entidad y agregando
la posibilidad de interactuar con un personaje/entidad o todos ellos
a través de un sistema de chat impulsado por la
[API de OpenAI](https://openai.com/product).

Este proyecto se deiseñó e implementó en diferentes etapas y a partir de 
tres historias de usuarias que se relacionan a continuación: 

- **Usuaria 1:** Como usuaria, deseo explorar la lista de escritoras disponibles, 
incluyendo aquellas que están vivas y las que ya no están. 
Adicionalmente, deseo conocer aspectos de su biografía.

- **Usuaria 2:** Como usuaria me gustaría filtrar la información de las escritoras por filtros 
como nacionalidad y género literario. Además, quiero poder organizarlas por orden alfabético.

- **Conversación Simulada:**
  - Como usuario, espero poder mantener una conversación fluida 
  y realista con la escritora seleccionada mediante el uso de inteligencia artificial.
  - La conversación debe abordar temas relacionados con la escritura, 
  la inspiración, el proceso creativo y otros aspectos relevantes.
  
- **Personalización de la Conversación:**
  - Como usuario, quiero tener la opción de personalizar la dirección de la conversación, 
  eligiendo temas específicos o solicitando orientación en áreas particulares.

- **Usuaria 3:** Como usuaria, quiero poder seleccionar una escritora específica para entablar una conversación simulada.

A continuación se muestra graficamente el prototipo desarrollado para las vistas del chat:


<img src="./src/data/img/Vista de conversación individual.png" width="400" height="200">

Vista chat individual

<img src="./src/data/img/Vista conversación grupal.png" width="400" height="200">

Vista chat grupal


### Los objetivos generales de este proyecto fueron

* Desarrollar una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicar los conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes
vistas de la aplicación
* Integrar una API externa
* Entender la asincronía en JavaScript
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

## 3. Consideraciones generales

* Este proyecto se desarrolló en duplas, en donde participaron Elizabeth Patiño y
Raiza Gatica.

* El rango de tiempo que demoramos en completar el proyecto fue de seis sprint.

* La lógica del proyecto está implementada completamente en JavaScript
  (ES6+), HTML y CSS. 

* El proyecto se despliega en:
  [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).


## 4. Funcionalidades

Este proyecto es una Single Page Application (SPA) que permite,
además de **visualizar la data, filtrarla, ordenarla y calcular alguna
estadística** tal como se hizo en Dataverse, acceder a una página de detalle
de cada personaje y poder _interactuar_ con los personajes o entidades del set
 de data que utilizaste anteriormente.

Funcionalidades detalladas:

* La aplicación es _responsive_
* La aplicación usa una SPA con múltiples vistas:
  - Implementa un sistema de enrutamiento que permite la navegación
    dentro de la aplicación.
  - Cada vista de la aplicación es cargada dinámicamente
    mediante JavaScript.
  - la URL se actualiza acorde a la vista
    cargada al igual que el `title` del documento (la pestaña del navegador).
  - La aplicación es capaz de cargar la vista correspondiente a
    la URL actual al iniciar la aplicación.
* Al hacer clic en una tarjeta de personaje/entidad, la aplicación se redirige
 a una vista **con su propia URL** que muestra la información
  detallada sobre ese personaje/entidad en particular
* La aplicación permite a la usuaria configurar la API Key para
  interactuar con la API de Open AI
* Usando la API de Open AI, la aplicación permite al usuario
  interactuar con un personaje/entidad a través de un chat.
  

* La aplicación permite a la usuaria interactuar de manera simultánea
  con **todos** los personajes/entidades a través de un chat:
  - Esta funcionalidad se carga en la URL `/group`
  - La usuaria puede ingresar su pregunta o mensaje para todos los
    personajes/entidades en un cuadro de texto y enviarlo con el botón enviar.
  - El mensaje de la usuaria es ajustado para cada escritora.
  - Las respuestas de todos los personajes se muestran de acuerdo al orden
    respuesta.

La aplicación se integra con la IA a través de la API de OpenAI. 

## 5. Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript
(ES6), HTML y CSS. 

El _boilerplate_ tiene una estructura general organizada de la siguiente manera: 

```text
.
├── src
|  ├── components
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── dataFunctions.js
|  ├── views
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── dataFunctions.spec.js
|  └── example.spec.js
├── README.md
└── package.json

```

### `src/components`

Esta carpeta contiene archivos JavaScript
que representan [componentes](https://lenguajejs.com/vuejs/componentes/que-es-un-componente/)
reutilizables de tu aplicación. 

### `src/data`

En esta carpeta están los datos de las escritoras, los cuales fueron generados
por medio de inteligencia artificial.

### `src/lib`

En esta carpeta, están los módulos con funcionalidades no relacionadas
al DOM. 

### `src/views`

En esta carpeta están las vistas.

### `src/index.html`

En este archivo
HTML encontrarás un elemento DOM `<div id='root'></div>` donde vas a
renderizar las diferentes vistas de tu aplicación.

### `src/index.js`

El punto de partida para tu SPA sera el archivo `src/index.js`. 

### `src/router.js`

En este archivo se maneja el enrutamiento de tu aplicación. 

### `src/style.css`

Se almacenan los estilos de la aplicación.

### `src/test`

Esta carpeta contiene los tests de  funciones y componentes. 

## 6. Hitos

A continuación se relacionan los hitos y objetivos de aprendizaje con los que 
trabajamos en este proyecto.

* [Hito 1](./docs/01-milestone.md)
* [Hito 2](./docs/02-milestone.md)
* [Hito 3](./docs/03-milestone.md)
* [Hito 4](./docs/04-milestone.md)
* [Hito 5](./docs/05-milestone.md)

## 7. Criterios de aceptación mínimos del proyecto

Este proyecto cumple con los siguientes ítems:

### Definición del producto

En el archivo `README.md` se comenta cuál fue
el proceso de diseño y el problema que resuelvió.

### Historias de usuaria

Se relacionan las historias de usuarias y su impacto en 
el diseño del pryecto.

### Diseño de la Interfaz de Usuaria

Se presentan los bocetos de diseño del proyecto.

### Testeos de usabilidad

Se hacen testeos de usabilidad.

### Pruebas unitarias

Se realizan test de pruebas unitarias para gran parte del proyecto, 
lo que le da mayor confiabilidad al código.


## 8. Project feeback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

* [x ] Cumple con todas las pruebas unitarias al ejecutar `npm run test` y
  que tienen una cobertura del 70% de _statements_ (_sentencias_),
  _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
* [ x] Esta libre de _errores_ de `eslint` al ejecutar `npm run pretest`
* [x] Está subido a GitHub y desplegado en Netlify o Vercel.
* Tiene un `README.md` con la siguiente:
  - [ x] _Definición del producto_ clara e informativa
  - [ x] Historias de usuaria
  - [ x] Un _sketch_ de la solución (prototipo de baja fidelidad) y
    _Diseño de la Interfaz de Usuaria_ (prototipo de alta fidelidad)
  - [x] El listado de problemas que detectaste a través de tests
    de usabilidad en el `README.md`
* Tiene un UI que cumple las funcionalidades:
  - [ x] Permite ver toda la data en la pantalla principal con opciones para
    filtrar y ordenar.
  - [ x] Permite ingresar un API Key a través de un formulario.
  - [x ] Permite ver una página con más detalles de cada entidad. En esta página
    se puede iniciar el chat.
  - [x] Permite conversar con el personaje o entidad de la data a través
    de un chat.
  - [ x] Permite chatear de forma grupal con todas las entidades de la data.
  - [ x] Es responsive y fue realizado usando la metodología mobile first.

Recuerda que debes hacer una autoevaluación de _objetivos de aprendizaje_ y
_life skills_ desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista para
tu sesión de Project Feedback.
