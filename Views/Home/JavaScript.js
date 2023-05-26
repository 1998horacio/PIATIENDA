// Código JavaScript para agregar productos al carrito
var botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
botonesAgregarCarrito.forEach(function (boton) {
    boton.addEventListener('click', function () {
        var producto = this.parentElement;
        var nombre = producto.querySelector('h2').textContent;
        var descripcion = producto.querySelector('p').textContent;
        var cantidad = parseInt(producto.querySelector('.cantidad').value);

        // Crea un objeto de producto con los detalles
        var productoCarrito = {
            nombre: nombre,
            descripcion: descripcion,
            cantidad: cantidad
        };

        // Agrega el producto al carrito (puedes implementar esta función según tus necesidades)
        agregarAlCarrito(productoCarrito);
    });
});

// Función para agregar el producto al carrito (ejemplo)
function agregarAlCarrito(producto) {
    // Implementa tu lógica para agregar el producto al carrito aquí
    console.log('Producto agregado al carrito:', producto);
}