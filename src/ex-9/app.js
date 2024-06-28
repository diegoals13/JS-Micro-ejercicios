const texto = document.getElementById("texto");
const respuesta = document.getElementById("respuesta");
const btn = document.getElementById("contar");

const vocales = "aeiouáéíóúü";
let cont = 0;

btn.addEventListener("click", () => {
  comprobacion();
});

function comprobacion() {
  const length = texto.value.length;

  if (length === 0) {
    window.alert("El campo esta vacio");
  } else {
    showText();
  }
}

function showText() {
  let mostrar = texto.value;
  contarVocales(mostrar);
}

function contarVocales(infotexto) {
  for (let i = 0; i < infotexto.length; i++) {
    const letra = infotexto[i].toLowerCase();
    if (vocales.includes(letra)) {
      cont++;
    }
  }
  respuesta.innerHTML = "Este texto contiene " + cont + " vocales";
  cont = 0;
}
