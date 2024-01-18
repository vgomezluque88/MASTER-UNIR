var count = 1;
var img1;

function flip() {
    var muertos = document.getElementById("muertos");
    img1 = document.getElementById("muerto");
    var img = document.getElementById("muerto");

    muertos.style.width = (count * 127) + "px";
    muertos.style.border = "solid 1px white";
    muertos.innerHTML += img1.outerHTML;
    img.src = "img/muerto.png";


    count++;
}


function sumarmsn() {
    var chat = document.getElementById("mensajes");
    var msn = document.getElementById("mensajeenviar");
    chat.innerHTML += msn.value



}


function abrirregister() {
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
}

function abrirlogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";

}


function quitarregister() {
    document.getElementById("register").style.display = "none";
}

function quitarlogin() {
    document.getElementById("login").style.display = "none";

}

function mueveReloj() {
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()", 1000)
}