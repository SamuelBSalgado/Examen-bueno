function validar() {
    let variable = document.getElementById("numero").value;
    let resultadoPar = "par";
    let resultadoImpar = "impar";

    //El número 0 es considerado como PAR.
    //Los números negativos también entran en la categoría de números pares e impares.
    if (variable%2==0) {
        document.getElementById("texto").innerHTML = resultadoPar;
    } else{
        document.getElementById("texto").innerHTML = resultadoImpar;
    }

    if (variable=="") {
        document.getElementById("texto").innerHTML = "Syntax Error"
    }
}

function limpiar() {
    document.getElementById("formulario").reset();
}