//var ubicacionProd = document.getElementById("paraCarru");
var lugar = document.getElementsByName("nomC");
var limpiar = "malandra";
function envio() {
    let patronNA = /^(?!\s)(\D){2,}$/;
    let patronMail = /^[a-z||A-Z||0-9||.||_||-]+@[a-z||A-Z||0-9||.||-]+\.[a-z||A-Z]{2,4}$/;
    let patronDT = /^\d{6,10}$/
    let elForm = document.forms["contactar"];
    let elNom = elForm["nomC"].value;
    let elCorreo = elForm["correoC"].value;
    let elTel = elForm["telC"].value;
    let elTexto = elForm["textoC"].value;
    if (patronNA.test(elNom) && patronMail.test(elCorreo) && patronDT.test(elTel) && patronNA.test(elTexto)) {
        document.getElementById("miForm").reset();
        alert("Se han enviado los datos correctamente")
    } else {
        if (!patronNA.test(elNom)) {
            let ubica = document.getElementById("mesNom");
            let elememto = document.createElement("span");
            elememto.innerHTML = "Introduzca su nombre<br>";
            elememto.className = "mensaje";
            ubica.innerHTML = elememto.outerHTML;
            //setTimeout(() =>{ubica.remove()}, 2000);
            setTimeout(() => {
                let cadena = "";
                ubica.innerHTML = cadena;
            }, 2000);
        }
        if(!patronMail.test(elCorreo)){
            let ubica = document.getElementById("mesCorreo");
            let elemento = document.createElement("span");
            elemento.innerHTML = "Introduzca un correo válido<br>";
            elemento.className = "mensaje";
            ubica.innerHTML = elemento.outerHTML;
            //setTimeout(()=>{ubica.remove()}, 2000);
            setTimeout(() => {
                let cadena = "";
                ubica.innerHTML = cadena;
            }, 2000);
        }
        if(!patronDT.test(elTel)){
            let ubica = document.getElementById("mesTel");
            let elemento = document.createElement("span");
            elemento.innerHTML = "Introduzca un teléfono válido<br>";
            elemento.className = "mensaje";
            ubica.innerHTML = elemento.outerHTML;
            //setTimeout(()=>{ubica.remove()}, 2000);
            setTimeout(() => {
                let cadena = "";
                ubica.innerHTML = cadena;
            }, 2000);
        }

        if(!patronNA.test(elTexto)){
            let ubica = document.getElementById("mesTexto");
            let elemento = document.createElement("span");
            elemento.innerHTML = "Introduzca un mensaje<br>";
            elemento.className = "mensaje";
            ubica.innerHTML = elemento.outerHTML;
            setTimeout(() => {
                let cadena = "";
                ubica.innerHTML = cadena;                
            }, 2000);
        }
    }
}