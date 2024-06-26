const result = document.getElementById("resultado");
const sumar = document.getElementById("sumar");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

let printSum = function () {
  let result = `${num1.value} + ${num2.value}`;
  result = eval(result);
  resultado.innerText = `La suma de ${num1.value} + ${num2.value} es ${result}`;
};
sumar.addEventListener("click", () => {
  printSum();
});