
var inputPass = document.getElementById('txtPassword');
var botonGenerar = document.getElementById('btnGenerar');
var botonCopiar = document.getElementById('btnCopiar');
var elSlider = document.getElementById('sliderLargo');
var elNumeroLargo = document.getElementById('numLargo');

var checkMayus = document.getElementById('checkMayus');
var checkMinus = document.getElementById('checkMinus');
var checkNum = document.getElementById('checkNum');
var checkSimbolos = document.getElementById('checkSimbolos');

var textoFuerza = document.getElementById('txtFuerza');

var letrasMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letrasMinus = "abcdefghijklmnopqrstuvwxyz";
var numeros = "0123456789";
var simbolos = "!@#$%^&*()";

elSlider.addEventListener('input', function () {
    elNumeroLargo.textContent = elSlider.value;
});

function crearPassword() {
    var largo = parseInt(elSlider.value);
    var caracteresPosibles = "";
    var resultado = "";

    if (checkMayus.checked) {
        caracteresPosibles = caracteresPosibles + letrasMayus;
    }
    if (checkMinus.checked) {
        caracteresPosibles = caracteresPosibles + letrasMinus;
    }
    if (checkNum.checked) {
        caracteresPosibles = caracteresPosibles + numeros;
    }
    if (checkSimbolos.checked) {
        caracteresPosibles = caracteresPosibles + simbolos;
    }

    if (caracteresPosibles == "") {
        inputPass.value = "Selecciona algo";
        return;
    }

    for (var i = 0; i < largo; i++) {
        var numeroAzar = Math.floor(Math.random() * caracteresPosibles.length);
        resultado = resultado + caracteresPosibles.charAt(numeroAzar);
    }

    inputPass.value = resultado;

    if (largo > 12) {
        textoFuerza.textContent = "Fuerte";
        textoFuerza.style.color = "green";
    } else if (largo > 8) {
        textoFuerza.textContent = "Media";
        textoFuerza.style.color = "orange";
    } else {
        textoFuerza.textContent = "Débil";
        textoFuerza.style.color = "red";
    }
}
botonCopiar.addEventListener('click', function () {
    if (inputPass.value != "" && inputPass.value != "Selecciona algo") {
        navigator.clipboard.writeText(inputPass.value);
        alert("¡Clave copiada al portapapeles!");
    }
});

botonGenerar.addEventListener('click', crearPassword);

crearPassword();
