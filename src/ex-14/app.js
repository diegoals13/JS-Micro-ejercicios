function encontrarDivisoresComunes() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let divisoresComunes = [];
    let resultado = "";

    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
        resultado = "Por favor, introduce números válidos mayores que 0.";
    } else {
        let menorNumero = Math.min(numero1, numero2);

        for (let i = 1; i <= menorNumero; i++) {
            if (numero1 % i === 0 && numero2 % i === 0) {
                divisoresComunes.push(i);
            }
        }

        if (divisoresComunes.length > 0) {
            resultado = "Los divisores comunes de " + numero1 + " y " + numero2 + " son: " + divisoresComunes.join(", ") + ".";
        } else {
            resultado = "No hay divisores comunes entre " + numero1 + " y " + numero2 + ".";
        }
    }

    document.getElementById("resultado").textContent = resultado;
}