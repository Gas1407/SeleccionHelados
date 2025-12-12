function mostrarPedido() {
    pedidoGuardado = JSON.parse(localStorage.getItem("pedido"));
    
    //console.log("Pedido recuperado:", pedidoGuardado);
    const divPedido = document.getElementById("contenedor-pedido");
    divPedido.innerHTML = ""; // Limpiar el contenedor antes de mostrar el pedido

    if (pedidoGuardado === 0) {

        divPedido.innerHTML = "<p>No hay pedidos realizados.</p>";
        return;
    }

    pedidoGuardado.forEach((pedido, index) => {
        const pedidoElemento = document.createElement("div");
        pedidoElemento.classList.add("pedido-item");

        pedidoElemento.innerHTML = `
        <h3>Pedido ${pedido.id}</h3>
        <p>Tamaño: ${pedido.tamano}</p>
        <p>Gustos: ${pedido.gustos.length ? pedido.gustos.join(", ") : "ninguno"}</p>
    }}        `;

        divPedido.appendChild(pedidoElemento);
    });
}

function eliminarPedido() {
    localStorage.removeItem("pedido");

}



    let boton = document.getElementById("eliminar-pedido")
    .addEventListener("click", eliminarPedido)

      let botonConfirmar = document.getElementById("confirmar-pedido")
    .addEventListener("click", confirmarPedido)

