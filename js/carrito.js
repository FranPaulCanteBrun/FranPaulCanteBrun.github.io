try {
  var datos = [];
  datos[0] = localStorage.getItem("nomReg");
  datos[1] = localStorage.getItem("apeReg");
  datos[2] = localStorage.getItem("correReg");
  datos[3] = localStorage.getItem("dirReg");
  datos[4] = localStorage.getItem("dniReg");
  datos[5] = localStorage.getItem("telReg");
  datos[6] = localStorage.getItem("userReg");

  var carrito = JSON.parse(localStorage.getItem("vaArray"));
} catch (er) {
  var carrito = [];
}

var precioTotal = 0;

///Este loop cambia las keys en "datos" para que no muestre las originales (nomReg, apeReg, etc).
///También  saca los últimos dos elementos de "datos" para que no muestre usuario y contraseña.
const totalKeys = Object.keys(datos).length;
var i = 0;
for (const key in datos) {
  if (i < totalKeys - 1) {
    const cambioKey = mapaKey(key);
    añadirPerfil(`${cambioKey}${datos[key]}`);
    // "cambioKey + "hola" +  "
  }
  i++;
}
function mapaKey(keyOriginal) {
  if (keyOriginal === "0") return "Nombre: ";
  if (keyOriginal === "1") return "Apellido: ";
  if (keyOriginal === "2") return "Correo: ";
  if (keyOriginal === "4") return "D.N.I: ";
  if (keyOriginal === "5") return "Telefono: ";
  if (keyOriginal === "3") return "Direccion: ";
  return keyOriginal;
}
//Se crea un hijo div con class perfiles y se llena de los datos.
function añadirPerfil(dato) {
  var perfilElemento = document.createElement("div");
  perfilElemento.className = "perfiles";

  perfilElemento.innerHTML = `
        <div>
        <span class="keys"> ${dato}</span>
        </div>
       
    `;

  ///Carga el div hijo creado dinamicamente y lo carga bajo la sección con id perfil.-
  document.querySelector("#perfil").appendChild(perfilElemento);
}
//Recorre los elementos en el arreglo carrito traido del localStorage y los agrega a la funcion añadirProducto
if (carrito == null) {
  console.log("");
} else {
  for (let i = 0; i < carrito.arrayProd.length; i++) {
    añadirProducto(carrito.arrayProd[i]);
    console.log("entro en el for " + carrito.arrayProd[i]);
  }
}
function añadirProducto(producto) {
  //Crea un div con class productos
  var productoElemento = document.createElement("div");
  productoElemento.className = "productos";

  //Lo llena de lo que hay en el array carrito
  productoElemento.innerHTML = `
        <div>
            <img src="${producto.imagen}"></img>
        </div>    
        <div>
        <span class="nombreProducto">${producto.nombre}</span>
        </div>
        <div>
        <span class="descripcionProducto">${producto.descripcion}</span>
        </div>
        <div>
            <span class="precioProducto">$${producto.precio}</span>           
        </div>
        <div>
            <span class="tipoProducto">${producto.tipoProducto}</span>           
        </div>

        <button class="botonRemover" type="button">Remover</button>
        <hr>
    `;

  //Le da el hijo del div nuevo con clase producto.
  document.querySelector("#product").appendChild(productoElemento);

  //el precioTotal contador que estaba en 0 se le suma el precio del producto.
  precioTotal += producto.precio;

  //Función que suma el precio del producto agregado y lo muestra en un span
  actualizarTotalCarroPrecio();

  //Evento del botón remover agregado dinámicamente cuando se muestra un producto nuevo
  var botonRemover = productoElemento.querySelector(".botonRemover");
  botonRemover.addEventListener("click", function () {
    removerProductoDelCarro(productoElemento, producto);
    //Ahora sustrae el precio del producto removido y lo muestra en un span
    actualizarTotalCarroPrecio();
  });
}

function actualizarTotalCarroPrecio() {
  //toma el span con clase totalCarroPrecio.
  var totalCarroPrecioElement = document.querySelector(".totalCarroPrecio");
  //Ubica la suma del precio de los productos en el span correspondiente y le agrega los centabos
  totalCarroPrecioElement.textContent = `$${precioTotal.toFixed(2)}`;
}

function removerProductoDelCarro(productoElemento, productos) {
  // Remueve el elemento carrito
  productoElemento.remove();
  //Sustrae al total
  precioTotal -= productos.precio;

  // Encuentra y remueve el producto del Array carrito
  var actualizarCarrito = carrito.filter;

  // Guarda el carrito actualizado en localStorage
  localStorage.setItem("vaArray", JSON.stringify(actualizarCarrito));
}
//boton para ir a productos
// document.getElementById('main').addEventListener('click', function () {
//     window.location.href = '../paginas/productos.html';
// });
//botón comprar
var botonComprar = document.querySelector(".posCompraFinal");
botonComprar.addEventListener("click", function () {
  comprar();
});

function comprar() {
  localStorage.removeItem("vaArray");
  carrito = [];
  let ubicar = document.getElementById("product");
  let elemento = document.createElement("span");
  // Agrego un date con la fecha de hoy
  const fechaCompra = new Date();
  // Dias minimo y maximo que tardara la entrega
  const diasEntregaMin = 4;
  const diasEntregaMax = 7;
  // Les establezco la fecha de hoy
  const fechaEntregaMin = new Date(fechaCompra);
  const fechaEntregaMax = new Date(fechaCompra);
  // Les sumo los dias que tarda el producto en llegar
  fechaEntregaMin.setDate(fechaEntregaMin.getDate() + diasEntregaMin);
  fechaEntregaMax.setDate(fechaEntregaMax.getDate() + diasEntregaMax);
  // Le doy un formato de fecha, dependiendo del lugar donde estoy
  const fechaEntregaMinString = fechaEntregaMin.toLocaleDateString();
  const fechaEntregaMaxString = fechaEntregaMax.toLocaleDateString();
  elemento.innerHTML =
    "<h3>¡Gracias por su compra!</h3>" +
    "<p>El producto llegará entre el " +
    fechaEntregaMinString +
    " y el " +
    fechaEntregaMaxString +
    ".</p>";
  ubicar.innerHTML = elemento.outerHTML;
}
console.log(datos);
console.log(carrito);
