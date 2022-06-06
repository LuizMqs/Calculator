document.getElementById("button").addEventListener("click", function() {
    let operando1 = document.getElementById("operando1").value

    let operando2 = document.getElementById("operando2").value

    const seletor = document.getElementById("operadores").value
    let result

    console.log(operando1)
    if (operando1 == "") {
        document.getElementById("final").innerHTML = "O primeiro campo não foi preenchido"
    }

    else if (operando2 == "") {
        document.getElementById("final").innerHTML = "O segundo campo não foi preenchido"
    }

    else if (seletor == 0) {
        document.getElementById("final").innerHTML = "O operador não foi selecionado"
    }

    else {
        operando1 = parseInt(operando1)
        operando2 = parseInt(operando2)

        if (seletor == 1) {
            result = operando1 + operando2
        }

        else if (seletor == 2) {
            result = operando1 - operando2
        }

        else if (seletor == 3) {
            result = operando1 * operando2
        }

        else {
            result = operando1 / operando2
        }

        document.getElementById("final").innerHTML = result
    }
})