

$(function () { //JQUERY UI
    $("#accordion").accordion();
});


$(document).ready(function () {
    $("#button1").next().slideToggle();
    $("#button1").click("click", function () {
        $(this).next().slideToggle();
    });
});
$(document).ready(function () {
    $("#button2").next().slideToggle();
    $("#button2").click("click", function () {
        $(this).next().slideToggle();
    });
});
$(document).ready(function () {
    $("#button3").next().slideToggle();
    $("#button3").click("click", function () {
        $(this).next().slideToggle();
    });
});
$(document).ready(function () {
    $("#button4").next().slideToggle();
    $("#button4").click("click", function () {
        $(this).next().slideToggle();
    });
});
$(document).ready(function () {
    $("#button5").next().slideToggle();
    $("#button5").click("click", function () {
        $(this).next().slideToggle();
    });
});