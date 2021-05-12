/*---------------divs que informam a situacao atual de sao paulo--------*/
/*---------------uso do slidetoglle-------------------------------------*/

$(document).ready(function () {
    $("#atualUti").click(function () { //USO DO TOGGLE
        $("#h4um,#h4dois,#h4tres").slideToggle(); //USO DO TOGGLE

    })
})
$(document).ready(function () {
    $("#faseVermelha h2").click(function () {
        $("#faseVermelha h3").slideToggle()
    })
});
$(document).ready(function () {
    $("#faseLaranja h2").click(function () {
        $("#faseLaranja h3").slideToggle()
    })
});
$(document).ready(function () {
    $("#faseAmarela h2").click(function () {
        $("#faseAmarela h3").slideToggle()
    })
});
$(document).ready(function () {
    $("#faseVerde h2").click(function () {
        $("#faseVerde h3").slideToggle()
    })
});
$(document).ready(function () {
    $("#faseAzul h2").click(function () {
        $("#faseAzul h3").slideToggle()
    })
});

