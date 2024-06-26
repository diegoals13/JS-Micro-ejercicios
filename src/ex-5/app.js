let resultado = document.getElementById("resultado");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function sabermayor(n1, n2) {
  if (n1 > n2) {
    resultado.innerHTML = `El número mayor es el ${n1}`;
  } else if (n2 > n1) {
    resultado.innerHTML = `El número mayor es el ${n2}`;
  }
}

mostrar.addEventListener("click", () => {
  let infonum1 = num1.value;
  let infonum2 = num2.value;
  sabermayor(parseInt(infonum1), parseInt(infonum2));
});
