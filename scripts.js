let arrayPalabras = [
  "alfabeto",
  "bocina",
  "casa",
  "dado",
  "elefante",
  "foca",
  "gato",
  "hola",
  "iglesia",
  "jirafa",
  "kilo",
  "luna",
  "mano",
  "nido",
  "ojo",
  "perro",
  "queso",
  "raton",
  "silla",
  "taza",
  "uva",
  "vaca",
  "waffle",
  "xilofono",
  "yoyo",
  "zorro",
];

let palabra = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)];
let palabraCompleta = palabra.split("");
let palabraOculta = new Array(palabraCompleta.length).fill("_");

document.addEventListener("DOMContentLoaded", function () {
  
  let palabraP = document.getElementById("palabra");
  let tamanioPalabra = document.getElementById("tamanioPalabra");
  /* palabraP.innerHTML = palabra; */
  tamanioPalabra.innerHTML = palabraOculta.join(" ");
});

function letraIngresada(letra) {
  let letterOccurrences = palabraCompleta.filter((letter) => letter === letra);

  if (letterOccurrences.length > 0) {
    mostrarLetra(letra);
  } else {
    mostrarError(letra);
  }
}

function mostrarLetra(letra) {
  for (let i = 0; i < palabraCompleta.length; i++) {
    if (palabraCompleta[i] === letra) {
      let tamanioPalabra = document.getElementById("tamanioPalabra");
      palabraOculta[i] = letra;
      tamanioPalabra.innerHTML = palabraOculta.join(" ");
    }
  }
  
    if (!palabraOculta.includes("_")) {
        alert("Ganaste");
        window.location.reload();
    }
}

function mostrarError(letra) {
    let errores = document.getElementById("errores");
    let ahorcadoImg = document.getElementById("ahorcado");
    console.log(errores.innerHTML.length);
    errores.innerHTML += letra;
    ahorcadoImg.src = `./img/hangman/Hangman-${errores.innerHTML.length}.png`;

    if (errores.innerHTML.length === 7) {
        alert("Perdiste");
        window.location.reload();
    }
}


