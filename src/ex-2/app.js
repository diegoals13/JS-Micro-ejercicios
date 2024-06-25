
const num1 = 3;
const num2 = 5;

const div = document.getElementById("app");

function suma(n1,n2){

   let total = n1 + n2;

    div.innerHTML = "La suma de " + num1 + " y " + num2 + " es " + total;
    
}

suma(3,5);