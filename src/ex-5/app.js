const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn = document.getElementById("mostrar");
const resultado = document.getElementById("resultado");


btn.addEventListener("click", () => {
  const ValueOne = Number(num1.value);
  const ValueTwo = Number(num2.value);
  resultado.innerHTML = Math.max(ValueOne, ValueTwo);
})

