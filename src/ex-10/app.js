const texto = document.getElementById("texto");
const respuesta = document.getElementById("respuesta");
const btn = document.getElementById("contar");

const vocales = {
  a: 0,
  o: 0,
  u: 0,
  e: 0,
  i: 0,
};

btn.addEventListener("click", () => {
  comprobacion();
});

texto.addEventListener("input", () => {
  respuesta.innerHTML = "";
  for (let letter in letters) {
    letters[letter] = 0;
  }
});

function comprobacion() {
  let result = texto.value.split("");
  result.forEach((element) => {
    switch (element) {
      case "a":
        vocales.a++;
        break;
      case "e":
        vocales.e++;
        break;
      case "i":
        vocales.i++;
        break;
      case "o":
        vocales.o++;
        break;
      case "u":
        vocales.u++;
        break;
    }
  });
  respuesta.innerHTML = `a: ${vocales.a} e: ${vocales.e} i: ${vocales.i} o: ${vocales.o} u: ${vocales.u}`;
}
