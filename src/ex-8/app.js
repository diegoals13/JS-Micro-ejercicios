const texto = document.getElementById("texto");
const respuesta = document.getElementById("respuesta");
const btn = document.getElementById("contar");
const vocales = "aeiouáéíóúü";

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
  escribirVocales(mostrar);
}

function escribirvocales(infotexto) {
  let showVocales = [];
  for (let i = 0; i < infotexto.length; i++) {
    const letra = infotexto[i].toLowerCase();
    if (vocales.includes(letra)) {
      showVocales.push(infotexto[i]);
    }
  }
  respuesta.innerHTML = showVocales;
}
