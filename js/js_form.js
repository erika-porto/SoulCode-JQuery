function imc() {
    var peso = $("#peso").val();
    var altura = $("#altura").val();

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    var imc = peso / (altura * altura);

    if (imc < 18.5) {
        $("#resultadoImc").text(`IMC = ${imc.toFixed(2)} (abaixo do peso)`);
    } else if (imc >= 18.5 && imc < 25) {
        $("#resultadoImc").text(`IMC = ${imc.toFixed(2)} (peso ideal)`);
    } else if (imc >= 25 && imc < 30) {
        $("#resultadoImc").text(`IMC = ${imc.toFixed(2)} (sobrepeso)`);
    } else if (imc >= 30 && imc < 40) {
        $("#resultadoImc").text(`IMC = ${imc.toFixed(2)} (obesidade)`);
    } else if (imc >= 40) {
        $("#resultadoImc").text(`IMC = ${imc.toFixed(2)}. (Obesidade grau 3 - Se enquadra em pessoa com comorbidades)`)
    } else {
        $("#resultadoImc").text(`Por favor digite seu peso e altura corretamente`)
    }

}

window.addEventListener('resize', function () {
    $(document).ready(function () {
        var tam = $(window).width();
        if (tam >= 950) { //quando a largura tamanho minimo, muda a posição da label
            $(".etiqueta").css("text-align", "end")
        } else {
            $(".etiqueta").css("text-align", "center")

        }
    });
});

function VerificaCPF() {
    strCpf = document.getElementById('cpf').value;
    var soma = 0;
    var resto;
    var valido = 0;
    if (strCpf == "00000000000" || strCpf.length != 11) {
        alert("CPF Inválido");
        return false;
    }
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(9, 10))) {
        console.log(strCpf);
        return false;
    }

    soma = 0;
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }

    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {
        alert("CPF Inválido");
        return false;
    }
    return true;
};

