const usuario = document.getElementById("username");
const boton = document.getElementById("boton");
const frase = document.getElementById("frase");

boton.addEventListener("click", () => {
  const username = usuario.value;
  render(username);
});

function render(username) {
  if (isEmpty(username)) {
    frase.innerHTML = `<span>Debe introducir su nombre</span>`;
    return;
  }
  frase.innerHTML = `<span>Hola ${username}</span>`;
}
function isEmpty(username) {
  const stringLength = username.length;
  return stringLength === 0 ? true : false;
}