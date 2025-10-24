
const tamanos = ["cuarto","medio kilo", "kilo"];
const gustos = ["frutilla", "chocolate", "dulce de leche", "tramontana", "granizado"];
let cantidad_gustos;
let precio;



function elegirTamano() {
    let elegir_tamanos = prompt(" Seleccione los gustos de helado: Cuarto, MedioKg o Kilo")

switch (tamanos) {
    case "cuarto":
     cantidad_gustos = 2;   
    alert("Usted seleccionó:"+ elegir_tamanos);
    alert("Podés elegir 2 gustos")

        break;

    case "medio kilo":
        cantidad_gustos = 3;
        alert("Usted seleccionó:"+ elegir_tamanos);
        alert("Podés elegir 3 gustos")

        break;

    case "kilo":
        cantidad_gustos = 4;
        alert("Usted seleccionó:"+ elegir_tamanos);
        alert("Podés elegir 4 gustos")
        break;        
        
    default:
        alert("El tamaño seleccionado no es válido. Por favor, recargue la página e intente nuevamente.");
        break;
}
}

function elegirSabores() {
    let elegir_sabores = prompt("Bienvenidos a SampaHeladerias! Seleccione los sabores deseados")

if (cantidad_gustos > 0) {
  alert("Podés elegir " + cantidad_gustos + " gustos.");

const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

} else {}   

}

function calcularPrecio() {


    if (tamano === "cuarto") {
        precio = 500;
        alert("El precio de un cuarto de kilo es de $" + precio)
    } else if (tamano === "medio kilo") {
        precio = 900;
        alert("El precio de medio kilo es de $" + precio)
    } else if (tamano === "kilo") {
        precio = 1700;
        alert("El precio de un kilo es de $" + precio);
    } else {
    }
   
    console.log("Elegiste un helado de:" + elegir_tamanos + " y el precio es de $" + precio);

} 