
const tamanos = [
    
    {
        nombre: "un cuarto",
        precio: 500,  
    },
    {
        nombre: "medio kilo",
        precio: 900,  
    },
    {
        nombre: "kilo",
        precio: 1700,  
    }
];

const gustos = ["frutilla", "chocolate", "dulce de leche", "tramontana", "granizado"];
const pedido = [];
let cantidad_gustos;
let precio;
let elegir_tamanos;
let sabor;


//
//recorrer los arrays con un foreach
//mostrar por pantalla los gustos y tamaños
//poner input para elegir el tamaño y los gustos
//segun el input darle la cantidad de gustos
//crear array de pedido en base a lo que elija el usuario

function mostrarTamanos(tamanos){

  const tamanosFieldset = document.getElementById("tamanos-fieldset");

    tamanos.forEach((tamano) => { 
        const label = document.createElement("label");

        label.innerHTML = `
            <input type="radio" name="tamanos" value="${tamanos.id}">
            <span>${tamano.nombre}</span>
            <div><button id="${tamano.id}">Seleccionar</button></div>
        `  
        
        tamanosFieldset.appendChild(label) 
        const boton = document.getElementById(`${tamano.nombre}${tamano.id}`)
        boton.addEventListener("click", () => agregarAlPedido(tamanos) )
    })
}

mostrarTamanos(tamanos)


function agregarAlPedido(tamanos, gustos){
    //const boton = document.getElementById("boton-seleccionar")
    
    

    boton.addEventListener("click", () => {
        pedidos.push(tamanos, gustos)
        console.log(pedidos)
})
}