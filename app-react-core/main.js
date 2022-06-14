//Clase del 09-06-22

//ACCEDO AL ROOT PERO LO GUARDO EN UNA VARIABLE CONST Y AL IGUAL ELEMENT PARA MANIPULAR EL DOM
const root = document.getElementById("div-root");
const element = document.createElement("div");

// MANIPULACION DEL DOM COMO SE HACE DESDE JS

// element.textContent = "Hello world DOM";
// element.className = "container";
// root.appendChild(element);

/** APLICADO CON REACT USANDO EL VIRTUAL DOM*/

//ACA ESTOY CREANDO EL ELEMENTO AUN NO SE MUESTRA EN EL DOM
const elementReact = React.createElement("span", {}, "Hello world con react");

const secondElementReact = React.createElement("div", {
    children: React.createElement(
    "span",
    {
        children: React.createElement(),
        className: "span-style",
    },
    "Este es mi span dentro de mi div"
    ),
});

/*
 *
 * SINTAXIS React.createElement(typo_de_elemento, { children },  valor)
 */

//ESTE EL METODO ES LA ENTRADA PRINCIPAL DE NUESTRO PROYECTO
//el primer parametro es el elemento que quiero crear, el segundo es donde lo quiero mostrar
ReactDOM.render(secondElementReact, root);