window.addEventListener('resize', function () { //chama a função quando a tela é redimensionada
    $(document).ready(function () {//Exibindo menu conforme resolução do monitor
        var tam = $(window).width();
        if (tam >= 800) {
            $("header").show();
            $("#header2").hide();
        } else {
            $("header").hide();
            $("#header2").show();
        }
    });
});

// Função para exibir data e hora do sistema nas paginas
function dataHora() {
    let hoje = new Date()
    let hora = hoje.getHours()
    let minuto = hoje.getMinutes()
    if (minuto < 10) {
        minuto = "0" + minuto
    }
    let segundo = hoje.getSeconds()
    if (segundo < 10) {
        segundo = "0" + segundo
    }

    let dia = hoje.getDate()
    if (dia < 10) {
        dia = "0" + dia
    }
    let mes = (hoje.getMonth()) + 1
    if (mes < 10) {
        mes = "0" + mes
    }
    let ano = hoje.getFullYear()

    document.getElementById('hora').innerHTML = (hora + ":" + minuto + ":" + segundo);
    setTimeout('dataHora()', 1000)
    document.getElementById('data').innerHTML = (dia + "/" + mes + "/" + ano);
}

$(document).ready(function () {
    var x = 20;

    $("#aumenta").click(function () {
        if (x < 23) {
            x = x + 1;
            $("body, li, #containerMaior, #tabela, footer, #atualSp, #folha, .alerta").css({ "font-size": x + "px" });
        }
    });
    $("#diminui").click(function () {
        if (x >= 17) {
            x = x - 1;
            $("body, li,  #containerMaior, #tabela, footer, #atualSp, #folha, .alerta").css({ "font-size": x + "px" });
        }
    });

    $("#aumenta1").click(function () {
        if (x < 23) {
            x = x + 1;
            $("body, li, #containerMaior, #tabela, footer, #atualSp, #folha, .alerta").css({ "font-size": x + "px" });
        }
    });
    $("#diminui1").click(function () {
        if (x >= 17) {
            x = x - 1;
            $("body, li,  #containerMaior, #tabela, footer, #atualSp, #folha, .alerta").css({ "font-size": x + "px" });
        }
    });
})