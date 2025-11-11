let totalItems = 0;
let totalPrecio = 0;
let productos = [];

function agregarAlCarrito(nombre, precio) {
    totalItems++;
    totalPrecio += precio;
    productos.push(nombre);
    document.getElementById("total-items").innerText = totalItems;
    document.getElementById("total-precio").innerText = totalPrecio;
    if (totalPrecio > 50) {
        alert("¡Envío gratis aplicado!");
    }
    console.log("Productos en el carrito:", productos);
}

function vaciarCarrito() {
    totalItems = 0;
    totalPrecio = 0;
    productos = [];

    document.getElementById("total-items").innerText = totalItems;
    document.getElementById("total-precio").innerText = totalPrecio;

    alert("Carrito vaciado");
}