function comprobarDivisibilidad() {
  let numero = parseInt(document.getElementById("numero").value);
  let resultado = "";

  if (isNaN(numero)) {
    resultado = "Por favor, introduce un número válido.";
  } else if (numero % 2 === 0) {
    resultado = "El número es divisible por 2.";
  } else if (numero % 3 === 0) {
    resultado = "El número es divisible por 3.";
  } else if (numero % 5 === 0) {
    resultado = "El número es divisible por 5.";
  } else if (numero % 7 === 0) {
    resultado = "El número es divisible por 7.";
  } else {
    resultado =
      "El número no es divisible ni por 2, ni por 3, ni por 5, ni por 7.";
  }

  document.getElementById("resultado").textContent = resultado;
}
