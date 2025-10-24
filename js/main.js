
const tamanos = ["cuarto","medio kilo", "kilo"];
const gustos = ["frutilla", "chocolate", "dulce de leche", "tramontana", "granizado"];
const pedido = [];
let cantidad_gustos;
let precio;
let elegir_tamanos;
let sabor;

elegirTamano();


function elegirTamano() {
    elegir_tamanos = prompt("¡Bienvenidos a SampaHeladerias! Seleccione el tamaño de helado:" + tamanos.join(", "));
    console.log("El tamaño seleccionado es: " + elegir_tamanos);
    tamanos.indexOf(elegir_tamanos);

switch (elegir_tamanos) {
    
    case "cuarto":
    cantidad_gustos = 2;   
    alert("Usted seleccionó:"+ elegir_tamanos);
    alert("Podés elegir 2 gustos")

    elegirSabores(cantidad_gustos);
    calcularPrecio(elegir_tamanos);

    break;

    case "medio kilo":
        cantidad_gustos = 3;
        alert("Usted seleccionó:"+ elegir_tamanos);
        alert("Podés elegir 3 gustos")

        elegirSabores(cantidad_gustos);
        calcularPrecio(elegir_tamanos);

        break;

    case "kilo":
        cantidad_gustos = 4;
        alert("Usted seleccionó:"+ elegir_tamanos);
        alert("Podés elegir 4 gustos")

        elegirSabores(cantidad_gustos);
        calcularPrecio(elegir_tamanos);
        break;        
        
    default:
        alert("El tamaño seleccionado no es válido. Por favor, recargue la página e intente nuevamente.");
        break;
}
}

function elegirSabores(cantidad_gustos) {

do  {
    sabor = prompt("Ingrese un sabor de helado: " + gustos.join(", "));
    if (gustos.includes(sabor)) {
        pedido.push(sabor);
        cantidad_gustos--;
        alert("Has seleccionado: " + sabor + ". Te quedan " + cantidad_gustos + " gustos por elegir.");
    } else {
        alert("El sabor ingresado no es válido. Por favor, elige un sabor de la lista.");
    }
} while (cantidad_gustos > 0);

}


function calcularPrecio(elegir_tamanos) {

switch (elegir_tamanos) {

    case "cuarto":
        precio = 500;
        alert("El precio de un cuarto de kilo es de $" + precio)
    break

    case "medio kilo":
        precio = 900;
        alert("El precio de medio kilo es de $" + precio)
    break

    case "kilo":
        precio = 1700;
        alert("El precio de un kilo es de $" + precio);
    break

default:
    alert("Por favor seleccione el helado nuevamente.");
    break
}
    console.log("Elegiste un helado de:" + elegir_tamanos + " y el precio es de $" + precio);
    alert("Elegiste un helado de:" + elegir_tamanos + " y el precio es de $" + precio + ".\n Los sabores elegidos son: " + pedido.join(", "));
} 