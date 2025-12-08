
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
let tamanoSeleccionado;
let gustosSeleccionados = [];
let gustosArray = [];
let tamanoValue;



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
   
     tamanoValue = tamanoSeleccionado ? tamanoSeleccionado.value : null;
     gustosSeleccionados.forEach(g => {
        gustosArray.push(g.value);
    });

    if (!tamanoSeleccionado || gustosSeleccionados.length === 0) {
        console.log("Por favor selecciona un tamaño y al menos un gusto.");
        return;
    }

    const pedidoObj = {
    tamano: tamanoValue,
     gustos: gustosArray,
    };
    
    pedido.push(pedidoObj);

    console.log("Tus gustos son: " + (pedidoObj.gustos.length ? pedidoObj.gustos.join(", ") : "ninguno") +
                " y el tamaño es: " + (pedidoObj.tamano ?? "no seleccionado"));

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

        

        
