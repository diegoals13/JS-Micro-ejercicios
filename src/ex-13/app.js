function encontrarDivisores() {
  let numero = parseInt(document.getElementById("numero").value);
  let divisores = [];
  let resultado = "";

  if (isNaN(numero) || numero <= 0) {
    resultado = "Por favor, introduce un número válido mayor que 0.";
  } else {
    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        divisores.push(i);
      }
    }
    resultado =
      "Los divisores de " + numero + " son: " + divisores.join(", ") + ".";
  }

  document.getElementById("resultado").textContent = resultado;
}
