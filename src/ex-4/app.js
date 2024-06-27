const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumar = document.getElementById("sumar");
const result = document.getElementById("resultado");

sumar.addEventListener("click", () => {
  printSuma();
});

let printSuma = function () {
  let result = `${num1.value} + ${num2.value}`;
  result = eval(result);
  resultado.innerHTML = `La suma de ${num1.value} + ${num2.value} es ${result}`;
};