function comprobarDivisibilidad() {
  let numero = parseInt(document.getElementById("numero").value);
  let divisores = [];
  let resultado = "";

  if (isNaN(numero)) {
    resultado = "Por favor, introduce un número válido.";
  } else {
    if (numero % 2 === 0) divisores.push(2);
    if (numero % 3 === 0) divisores.push(3);
    if (numero % 5 === 0) divisores.push(5);
    if (numero % 7 === 0) divisores.push(7);

    if (divisores.length > 0) {
      resultado = "El número es divisible por: " + divisores.join(", ") + ".";
    } else {
      resultado =
        "El número no es divisible ni por 2, ni por 3, ni por 5, ni por 7.";
    }
  }

  document.getElementById("resultado").textContent = resultado;
}
