var userGrupo = "grupo1";
var passGrupo = "123456g";
var grupoMail = "Grupo1@gmail.com";

//Empezamos por asignar eventos a los botones de el menu

//var inicio = document.getElementById("productos");
var prod = document.getElementById("productos");
var contac = document.getElementById("contacto");
//var contacto = document.getElementById("acceso");
var ingreso = document.getElementById("ingreso"); //Boton de ingreso
var oPass = document.getElementById("olvidoPass");
var Email = document.getElementById("mail");
const manejador = document.getElementById("mostrar-modal");
const manejador2 = document.getElementById("mostrarRegistro");
const elSubmit = document.getElementById("vaRegistro");
const elSubmit2 = document.getElementById("registro");
const cierroModal = document.getElementById("cerrar");
const cierroModal2 = document.getElementById("cerrar2");
const iSesion = document.getElementById("iSesion");
var formR = document.forms["registro"];

prod.addEventListener("click", navProd);
contac.addEventListener("click", navContac);
//contacto.addEventListener("click", navegacion);
ingreso.addEventListener("click", abrir); //Lsitener de ingreso
cierroModal.addEventListener("click", cierroM);
cierroModal2.addEventListener("click", cierroM2);
elSubmit.addEventListener("click", abrir2);
iSesion.addEventListener("click", validar);
formR.addEventListener("submit", validarRegistro);
oPass.addEventListener("click", olviPass);
elSubmit2.addEventListener("click", validarRegistro);

function abrir() {
  cierroM2();
  manejador.classList.add("muestro");
}

function cierroM() {
  manejador.classList.remove("muestro");
}

var userReg = localStorage.getItem("userReg");
var passReg = localStorage.getItem("passReg");
console.log(userReg);
console.log(passReg);

function validar(e) {
  e.preventDefault();
  const borrar = document.querySelectorAll(".mensajError");
  borrar.forEach((borrar) => {
    borrar.remove();
  });
  let formI = document.forms["ingreso"];
  let Us = formI["usuario"];
  let Pa = formI["clave"];
  let U = Us.value;
  let P = Pa.value;
  let labels = document.querySelectorAll(".lbl");

  if (userReg === U && passReg === P) {
    localStorage.setItem("sesionIniciada", "true"); // Establece la sesión iniciada
    localStorage.setItem("user", U);
    formI.submit();
    // ingreso.textContent = userGrupo;
    cierroM();
  } else {
    if (U !== userReg) {
      let msj = document.createElement("p");
      msj.className = "mensajError";
      msj.innerHTML = "Nombre de usuario incorrecto o inexistente";
      msj.style.color = "white";
      Us.insertAdjacentElement("afterend", msj);
      labels[0].appendChild(msj);
    }
    if (P !== passReg) {
      let msj1 = document.createElement("p");
      msj1.className = "mensajError";
      msj1.innerHTML = "Contraseña incorrecta";
      msj1.style.color = "white";
      Pa.insertAdjacentElement("afterend", msj1);
      labels[1].appendChild(msj1);
    }
    return false;
  }
}

function validarRegistro(e) {
  e.preventDefault();
  try {
    const borrar = document.querySelectorAll(".mensajError");
    borrar.forEach((borrar) => {
      borrar.remove();
    });
    let patronNA = /^\D{2,}$/;
    let nombre = formR["nombre"];
    let nomV = nombre.value;
    let apellido = formR["apellido"];
    let apeV = apellido.value;
    let patronMail =
      /^[a-z||A-Z||0-9||.||_||-]+@[a-z||A-Z||0-9||.||-]+\.[a-z||A-Z]{2,4}$/;
    let email = formR["mail"];
    let mailV = email.value;
    let patronDT = /^\d{6,10}$/;
    let elDNI = formR["dni"];
    let dni = elDNI.value;
    let tel = formR["telefono"];
    let telef = tel.value;
    let patronDire = /^\D{2,}\s\d{1,4}$/;
    let dire = formR["direccion"];
    let direV = dire.value;
    let patronPass = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,18}$/;
    let patronUser = /^\D{2,}/;
    let user = formR["usuario"];
    var userV = user.value;
    let contraseñaF = formR["clave"];
    var pass = contraseñaF.value;

    let labels = document.querySelectorAll(".lbl");

    if (
      patronNA.test(nomV) &&
      patronNA.test(apeV) &&
      patronMail.test(mailV) &&
      patronDT.test(dni) &&
      patronDire.test(direV) &&
      patronDT.test(telef) &&
      patronUser.test(userV) &&
      patronPass.test(pass)
    ) {
      var datos = {
        nomReg: nomV,
        apeReg: apeV,
        correReg: mailV,
        dniReg: dni,
        telReg: telef,
        dirReg: direV,
        userReg: userV,
        passReg: pass,
      };
      localStorage.setItem("sesionIniciada", "true");
      localStorage.setItem("nomReg", nomV);
      localStorage.setItem("apeReg", apeV);
      localStorage.setItem("correReg", mailV);
      localStorage.setItem("dniReg", dni);
      localStorage.setItem("telReg", telef);
      localStorage.setItem("dirReg", direV);
      localStorage.setItem("userReg", userV);
      localStorage.setItem("passReg", pass);
      // ingreso.textContent = datos.nomReg;
      formR.submit();
      reload.location();
    } else {
      if (!patronNA.test(nomV)) {
        let nom = document.createElement("p");
        nom.className = "mensajError";
        nom.innerHTML = "Debe ingresar su nombre";
        nom.style.color = "white";
        nombre.insertAdjacentElement("afterend", nom);
        labels[2].appendChild(nom);
      }

      if (!patronNA.test(apeV)) {
        let ape = document.createElement("p");
        ape.className = "mensajError";
        ape.innerHTML = "Debe ingresar su apellido";
        ape.style.color = "white";
        apellido.insertAdjacentElement("afterend", ape);
        labels[3].appendChild(ape);
      }

      if (!patronMail.test(mailV)) {
        let mail = document.createElement("p");
        mail.className = "mensajError";
        mail.innerHTML = "Debe ingresar un eMail valido";
        mail.style.color = "white";
        email.insertAdjacentElement("afterend", mail);
        labels[4].appendChild(mail);
      }

      if (!patronDT.test(dni)) {
        let docu = document.createElement("p");
        docu.className = "mensajError";
        docu.innerHTML = "Debe ingresar un documento valido o existente";
        docu.style.color = "white";
        elDNI.insertAdjacentElement("afterend", docu);
        labels[5].appendChild(docu);
      }

      if (!patronDire.test(direV)) {
        let calle = document.createElement("p");
        calle.className = "mensajError";
        calle.innerHTML = "Ingrese un domicilio valido";
        calle.style.color = "white";
        dire.insertAdjacentElement("afterend", calle);
        labels[6].appendChild(calle);
      }

      if (!patronDT.test(telef)) {
        let cel = document.createElement("p");
        cel.className = "mensajError";
        cel.innerHTML = "Debe ingresar un telefono valido";
        cel.style.color = "white";
        tel.insertAdjacentElement("afterend", cel);
        labels[7].appendChild(cel);
      }

      if (!patronUser.test(userV)) {
        let usu = document.createElement("p");
        usu.className = "mensajError";
        usu.innerHTML = "Debe ingresar un nombre de usuario valido";
        usu.style.color = "white";
        user.insertAdjacentElement("afterend", usu);
        labels[8].appendChild(usu);
      }

      if (!patronPass.test(pass)) {
        let password = document.createElement("p");
        password.className = "mensajError";
        password.innerHTML = "La contraseña debe contener números y letras";
        password.style.color = "white";
        contraseñaF.insertAdjacentElement("afterend", password);
        labels[9].appendChild(password);
      }
    }
  } catch (error) {
    console.error("Error en la función validarRegistro: ", error);
  }
}

// Funciones para la carga inicial de la pagina

function cargarFunciones() {
  navProd();
  navContac();
}

function navProd() {
  let elemProd = document.createElement("a");
  //elemProd.setAttribute("onclick", "cargoProd()");
  elemProd.href = "paginas/productos.html";
  elemProd.text = "Productos";
  elemProd.className = "itemsMenu";
  elemProd.style.position = "relative";
  elemProd.style.left = "20px";
  prod.innerHTML = elemProd.outerHTML;
}

function navContac() {
  let elemContac = document.createElement("a");
  elemContac.setAttribute("onclick", "cargoCont()");
  elemContac.text = "Contacto";
  elemContac.className = "itemsMenu";
  elemContac.style.position = "relative";
  elemContac.style.left = "250px"
  contac.innerHTML = elemContac.outerHTML;
}

//Creamos el iframe
var ubicacionProd = document.getElementById("paraCarru");
function cargoCont() {
  let elemento = document.createElement("iframe");
  elemento.className = "claseIframe";
  elemento.src = "paginas/contacto.html";
  ubicacionProd.innerHTML = elemento.outerHTML;
}
function navegacion() {}

function abrir2(event) {
  event.preventDefault();
  cierroM();
  manejador2.classList.add("muestro2");
}

function cierroM2() {
  manejador2.classList.remove("muestro2");
}

var correReg = localStorage.getItem("correReg");
function olviPass() {
  let patronMail =
      /^[a-z||A-Z||0-9||.||_||-]+@[a-z||A-Z||0-9||.||-]+\.[a-z||A-Z]{2,4}$/;
  let mailP = prompt("Ingrese el mail con el que se registro para enviarle su contraseña")
  if(patronMail.test(mailP) && mailP == correReg){
      alert("La contraseña ha sido enviada al mail con el que se registro: " + correReg); 
  }else{
    alert("No hay ningun usuario registrado con ese mail")
  }
}

//Tomamos el incio de sesión y vaidamos que si existe ya no es necesario el botón de acceso
var sesionIniciada = localStorage.getItem("sesionIniciada");
if (sesionIniciada !== null) {
  ingreso.classList.remove("posBoton");
  ingreso.classList.add("posBotonOcultar");
}

if (sesionIniciada != null) {
  let usuario = localStorage.getItem("userReg"); // Cambiado a 'userReg'
  let ubicoBien = document.getElementById("laSesion");
  // Encabezado de bienvenida
  let bienvenido = document.createElement("span");
  bienvenido.className = "cargoBienvenida";
  bienvenido.innerText = "Bienvenido ";
  ubicoBien.appendChild(bienvenido);

  let formato = {
    nomReg: localStorage.getItem("nomReg"),
    apeReg: localStorage.getItem("apeReg"),
  };

  // Datos de el inicio de sesión
  let ubicoUsuario = document.getElementById("datosUser");
  let elUsuario = document.createElement("span");
  elUsuario.className = "cargoUsuario";
  elUsuario.innerText = formato.nomReg + " " + formato.apeReg;
  elUsuario.style.top = "7px";
  ubicoUsuario.appendChild(elUsuario);

  let ubBtn = document.getElementById("btnSalir");
  let elBtn = document.createElement("button");
  elBtn.className = "btnSalir";
  elBtn.setAttribute("onclick", "cerrarSesion()");
  elBtn.textContent = "Salir";
  elBtn.value = "Salir";
  ubBtn.appendChild(elBtn);
  elBtn.style.top = "3px";
}

function cerrarSesion() {
  // Eliminar la variable de sesión del LocalStorage
  let sl = confirm("¿Está seguro de que desea cerrar sesión?")
  if (sl) {
    localStorage.removeItem('sesionIniciada');
    localStorage.removeItem('vaArray');
    // Recargar la página
    window.location.assign("index.html");
  } else {
    location.reload();
  }
}

// Armamos el carrusel

var ruta = "img/";

var imagenes = [];
imagenes[0] = ruta + "tv01.png";
imagenes[1] = ruta + "tv02.png";
imagenes[2] = ruta + "tv03.png";


function precargarImagenes() {
  const arrayPrecargado = []; 
  for (let i = 0; i < imagenes.length; i++) {
    const imagen = new Image();
    imagen.src = imagenes[i];
    arrayPrecargado.push(imagen); 
  }
  console.log('Imagenes precargadas');
}

precargarImagenes(); 


var ubicacion = document.getElementById("carrusel");
var irAtras = document.getElementById("atras");
var irAdelante = document.getElementById("adelante");
var contador = 0;
irAdelante.addEventListener("click", voyAdelante);
irAtras.addEventListener("click", voyAtras);

function voyAdelante() {
  if (contador < imagenes.length - 1) {
    contador++;
    let elemento = document.createElement("img");
    elemento.src = imagenes[contador];
    ubicacion.innerHTML = elemento.outerHTML;
  } else {
    contador = 0;
    let elemento = document.createElement("img");
    elemento.src = imagenes[contador];
    ubicacion.innerHTML = elemento.outerHTML;
  }
}

function voyAtras() {
  if (contador > 0) {
    contador--;
    let elemento = document.createElement("img");
    elemento.src = imagenes[contador];
    ubicacion.innerHTML = elemento.outerHTML;
  } else {
    contador = imagenes.length - 1;
    let elemento = document.createElement("img");
    elemento.src = imagenes[contador];
    ubicacion.innerHTML = elemento.outerHTML;
  }
}

