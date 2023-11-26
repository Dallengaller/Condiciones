function verificar() {
     cifra1 = document.getElementById("valor1").value;
     cifra2 = document.getElementById("valor2").value;
     cifra3 = document.getElementById("valor3").value;

     resultado = document.getElementById("resultado");

    if (cifra1 === "9" && cifra2=== "1" && cifra3 === "1") {
        resultado.innerHTML = "Password 1 Correcto";
    } 
    else if ( cifra1 === "7" && cifra2 === "1" && cifra3 === "4" ) {
        resultado.innerHTML = 'Password 2 Correcto';
    } 
    else {
        resultado.innerHTML = "Password Incorrecto";
    }
    }