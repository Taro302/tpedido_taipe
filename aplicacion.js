const addButtons = document.querySelectorAll(".add-to-cart");
const boletaTable = document.querySelector(".boleta table");

// Agregar evento de clic a cada botón "Agregar"
addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const productName = product.querySelector("h3").textContent;
    const productPrice = parseFloat(
      product.querySelector("p").textContent.replace("Precio: $", "")
    );
    const productQuantity = parseInt(product.querySelector("input").value);

    // Crear una nueva fila en la tabla de la boleta
    const newRow = document.createElement("tr");

    // Crear las celdas de la fila
    const quantityCell = document.createElement("td");
    quantityCell.textContent = productQuantity;
    const nameCell = document.createElement("td");
    nameCell.textContent = productName;
    const priceCell = document.createElement("td");
    priceCell.textContent = `$${productPrice.toFixed(2)}`;
    const totalCell = document.createElement("td");
    totalCell.textContent = `$${(productQuantity * productPrice).toFixed(2)}`;
    const actionsCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.classList.add("boton-editar");
    editButton.textContent = "Editar";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("boton-eliminar");
    deleteButton.textContent = "Eliminar";
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    // Agregar las celdas a la fila
    newRow.appendChild(quantityCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);
    newRow.appendChild(totalCell);
    newRow.appendChild(actionsCell);

    // Agregar la fila a la tabla de la boleta
    boletaTable.appendChild(newRow);
  });
});
// obtener referencias a los elementos del DOM
const btnAgregar1 = document.getElementById('agregar');
const btnAgregar2 = document.getElementById('btnAgregar2');
const btnAgregar3 = document.getElementById('btnAgregar3');
const inputCantidad1 = document.getElementById('inputCantidad1');
const inputCantidad2 = document.getElementById('inputCantidad2');
const inputCantidad3 = document.getElementById('inputCantidad3');
const tablaCarrito = document.getElementById('tablaCarrito');
const btnGuardar = document.getElementById('btnGuardar');
const btnEliminar = document.getElementById('btnEliminar');
const btnModificar = document.getElementById('btnModificar');

// inicializar variables
let subtotal1 = 0;
let subtotal2 = 0;
let subtotal3 = 0;

// agregar listeners a los botones de agregar
btnAgregar1.addEventListener('click', () => {
  const cantidad = Number(inputCantidad1.value);
  subtotal1 = 2.99 * cantidad;
  agregarProducto('Producto 1', cantidad, 2.99, subtotal1);
});

btnAgregar2.addEventListener('click', () => {
  const cantidad = Number(inputCantidad2.value);
  subtotal2 = 4.99 * cantidad;
  agregarProducto('Producto 2', cantidad, 4.99, subtotal2);
});

btnAgregar3.addEventListener('click', () => {
  const cantidad = Number(inputCantidad3.value);
  subtotal3 = 6.99 * cantidad;
  agregarProducto('Producto 3', cantidad, 6.99, subtotal3);
});

// agregar un producto a la tabla de carrito
function agregarProducto(nombre, cantidad, precio, subtotal) {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${nombre}</td>
    <td>${cantidad}</td>
    <td>$${precio.toFixed(2)}</td>
    <td>$${subtotal.toFixed(2)}</td>
    <td><button class="btnEliminar">Eliminar</button></td>
  `;
  tablaCarrito.appendChild(fila);
}

// eliminar un producto de la tabla de carrito
tablaCarrito.addEventListener('click', (event) => {
  if (event.target.classList.contains('btnEliminar')) {
    event.target.parentElement.parentElement.remove();
  }
});

// calcular el total de la compra y mostrarlo en la boleta de pedido
btnGuardar.addEventListener('click', () => {
  let total = 0;
  const filas = tablaCarrito.querySelectorAll('tr');
  filas.forEach((fila) => {
    const subtotal = Number(fila.children[3].textContent.substring(1));
    total += subtotal;
  });
  const boleta = document.getElementById('boleta');
  boleta.innerHTML = `
    <p><strong>Total: $${total.toFixed(2)}</strong></p>
    <button id="btnModificar">Modificar</button>
    <button id="btnEliminar">Eliminar</button>
  `;
});



