
const tamanosDisponibles = [
    
    {
        nombre: "1/4 cuarto",
        precio: 500,  
    },
    {
        nombre: "1/2 kilo",
        precio: 900,  
    },
    {
        nombre: "1 kilo",
        precio: 1700,  
    }
];

const gustosDisponibles = ["frutilla", "chocolate", "dulce de leche", "tramontana", "granizado"];
const pedido = [];
let cantidad_gustos;
let precio;
let elegir_tamanos;
let sabor;
let tamanoSeleccionado;
let gustosSeleccionados = [];
let tamano;
let gustos; 
//
//recorrer los arrays con un foreach
//mostrar por pantalla los gustos y tamaños
//poner input para elegir el tamaño y los gustos
//segun el input darle la cantidad de gustos
//crear array de pedido en base a lo que elija el usuario


//cambiar la funcion para que muestre tambien los gustos
//agregar el precio
function mostrarElementos(tamanosDisponibles, gustosDisponibles){

    const divTamanos = document.getElementById("contenedor-tamanos");
    const divGustos = document.getElementById("contenedor-gustos");
    
    tamanosDisponibles.forEach((tamano) => { 
        const opcionElemento = document.createElement("ul");

        opcionElemento.innerHTML = `
        <li> ${tamano.nombre} - Precio: ${tamano.precio} 
        <input type="radio" id="${tamano.id}" name="tamano" value="${tamano.nombre}">
        </li>
        `  
   
        divTamanos.appendChild(opcionElemento);

    })

    gustosDisponibles.forEach((gustos) => { 
        const opcionElemento = document.createElement("ul");

        opcionElemento.innerHTML = `
        <li> ${gustos}
        <input type="checkbox" id="${gustos}" name="${gustos}" value="${gustos}">
        </li>
        `  
        divGustos.appendChild(opcionElemento);

    })


}


mostrarElementos(tamanosDisponibles, gustosDisponibles);


function agregarAlPedido(tamano, gustos){
    const boton = document.getElementById("agregar-al-pedido")
    .addEventListener("change", agregarAlPedido)
    console.log(gustos, tamano);
   /* if (gustos === null & tamano === null){
        alert("Por favor, seleccione al menos un gusto y tamaño para su helado.")
    } else {
    pedidos.push({ tamanos: tamano.nombre, gustos: gustos.nombre});
        alert(`Se ha agregado al pedido: ${tamano.nombre} con gustos: ${gustos.nombre}`);
}*/
}

//usarLocalStorage para guardar el pedido
function confirmarPedido(pedido){
    const boton_confirmar = document.getElementById("confirmar-pedido")     

}

agregarAlPedido();

//funcion para mostrar el pedido final con tamaños, gustos y precio total
//funcion para que el usuario ingrese sus datos


//TAMAÑOS
        //const boton = document.getElementById(`contenedor-elementos`)
        //boton.addEventListener("change", () => agregarAlPedido(tamano))


//GUSTOS
        //const boton = document.getElementById(`contenedor-gustos`)
        //boton.addEventListener("change", () => agregarAlPedido(gustos))  
        

        
