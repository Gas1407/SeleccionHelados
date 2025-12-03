
const tamanosDisponibles = [
    
    {
        id: 1,
        nombre: "1/4 cuarto",
        precio: 500,  
    },
    {
        id: 2,
        nombre: "1/2 kilo",
        precio: 900,  
    },
    {
        id: 3,
        nombre: "1 kilo",
        precio: 1700,  
    }
];

const gustosDisponibles = ["frutilla", "chocolate", "dulce de leche", "tramontana", "granizado"];
const pedido = []
let cantidad_gustos;
let precio;
let elegir_tamanos;
let sabor;
var tamanoSeleccionado;
var gustosSeleccionados = [];
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
        <input type="checkbox" id="${gustos}" name="gustos" value="${gustos}">
        </li>
        `  
        divGustos.appendChild(opcionElemento);

    })
      

    agregarAlPedido();
}

 

function agregarAlPedido(){

    tamanoSeleccionado = document.querySelector("input[name='tamano']:checked");
    gustosSeleccionados = document.querySelectorAll("input[type=checkbox][name=gustos]:checked")  



    pedido = [

        {
            gustos: gustosSeleccionados.forEach((g) => pedido.push(g.value)),
            tamano: pedido.push(tamanoSeleccionado.value),
        }
    ]
  
   
        

           
    console.log("Tus gustos son :" + pedido.gustos + "y el tamaño es:" + pedido.tamano);


}

//usarLocalStorage para guardar el pedido
function confirmarPedido(pedido){
    const boton_confirmar = document.getElementById("confirmar-pedido")     

}

mostrarElementos(tamanosDisponibles, gustosDisponibles);

    let boton = document.getElementById("agregar-al-pedido")
    .addEventListener("click", agregarAlPedido)



//EN OTRO JS
//funcion para mostrar el pedido final con tamaños, gustos y precio total
//funcion para editar el pedido

        

        
