jQuery.fn.toggleText = function (a, b) { 
    return this.html(this.html().replace(new RegExp("(" + a + "|" + b + ")"), function (x) { return (x == a) ? b : a; }));
}

$(document).ready(function () { //MOSTRA E ESCONDE O TEXTO
    $('.box1').before('<span> Conheça as vacinas aprovadas no Brasil </span>');
    $('.box1').css('display', 'none')
    $('span', '#folha').click(function () {
        $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast'); //USO DO TOGGLE
        // aqui começa o funcionamento do plugin
        $(this).toggleText('Mostrar', 'Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar', 'Esconder')
    });
})

$(function () { //JQUERY UI - HIDE
    function runEffect() { 
        $("#effect").hide("blind", { times: 10, distance: 100 }, 1000, callback);
    };
    // callback function to bring a hidden box back
    function callback() {
        setTimeout(function () {
            $("#effect").removeAttr("style").hide().fadeIn(); //USO DO FADE
        }, 1000);
    };

    $("#button").click(function () {
        runEffect();
        return false;
    });
});

jQuery.fn.toggleText = function (a, b) {
    return this.html(this.html().replace(new RegExp("(" + a + "|" + b + ")"), function (x) { return (x == a) ? b : a; }));
}

$(document).ready(function () {
    $('.box2').before('<span> Como combater o Coronavirus? </span>');
    $('.box2').css('display', 'none')
    $('span', '#folha').click(function () {
        $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
        // aqui começa o funcionamento do plugin
        $(this).toggleText('Mostrar', 'Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar', 'Esconder')
    });
})

jQuery.fn.toggleText = function (a, b) {
    return this.html(this.html().replace(new RegExp("(" + a + "|" + b + ")"), function (x) { return (x == a) ? b : a; }));
}

$(document).ready(function () {
    $('.box3').before('<span> Conheça as formas de tratamento </span>');
    $('.box3').css('display', 'none')
    $('span', '#folha').click(function () {
        $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
        // aqui começa o funcionamento do plugin
        $(this).toggleText('Mostrar', 'Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar', 'Esconder')
    });
})

function animeScroll() { //SCROLL
    //   var tela = $(window).height() * 3 / 4;

    var disTopoScroll = $(document).scrollTop();
    console.log(disTopoScroll);
    $(".imagem_inicial").each(function () {
        itemTopo = $(this).offset().top
        console.log(itemTopo);
        //-tela
        if (disTopoScroll > itemTopo - 200) {
            $(this).addClass("imagem_final");
        } else {
            $(this).removeClass("imagem_final")
        }

    })
}

animeScroll();

$(window).scroll(function () {
    animeScroll();
})





