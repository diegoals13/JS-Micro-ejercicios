const texto = document.getElementById("texto");
const respuesta = document.getElementById("respuesta");
const btn = document.getElementById("contar");
let cont=0;
const letraa = "a";
const letraA = "A";

btn.addEventListener('click', () =>{

    comprobacion()
   
        
})

function comprobacion(){
  const length = texto.value.length;

  if(length===0){
      window.alert("El campo esta vacio");
  }else{
      showText();
  }
}

function showText() {
    let mostrar = texto.value;
    contarletra(mostrar);
  }

  function contarletra(infotexto){
    for (let i = 0; i < infotexto.length; i++) {
      
      if (infotexto[i] === letraa) {
          cont++;
      }
      if (infotexto[i] === letraA) {
        cont++;
    }
      }
      respuesta.innerHTML = "Esta frase contiene la letra a "+ cont + " veces";
      cont=0;
  }