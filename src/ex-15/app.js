function esPrimo() {
    let numero = parseInt(document.getElementById("numero").value);
    let esPrimo = true;
    let resultado = "";

    if (isNaN(numero) || numero <= 1) {
        resultado = "Por favor, introduce un número válido mayor que 1.";
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            resultado = "El número " + numero + " es primo.";
        } else {
            resultado = "El número " + numero + " no es primo.";
        }
    }

    document.getElementById("resultado").textContent = resultado;
}