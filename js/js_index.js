$(document).ready(function () {
    // FUNCÃO PARA MOSTRAR E ESCONDER AS INFORMAÇÕES
    
    $("#prev").click(function() { //USO DO CLICK   
        $("#listPrev").slideToggle() //USO DO TOGGLE
        $("#prev").css({"height": "500px", "background": "#fff"})
        $("#titPrev").slideToggle()
    })
    $("#prev").mouseleave(function () {
        $("#prev").css({"height": "250px", "background": "#b8dba1"})
    })

    $("#transm").click(function() {    
        $("#listTransm").slideToggle()
        $("#transm").css({"height": "500px", "background": "#fff"})
        $("#titTransm").slideToggle()
    })
    $("#transm").mouseleave(function () {
        $("#transm").css({"height": "250px", "background": "#b8dba1"})
    })

    $("#sint").click(function() {    
        $("#listSint").slideToggle()
        $("#sint").css({"height": "500px", "background": "#fff"})
        $("#titSint").slideToggle()
        })
    $("#transm").mouseleave(function () {
        $("#sint").css({"height": "250px", "background": "#b8dba1"})
        })

    // FUNÇÃO PARA AUMENTAR E DIMINUIR AS IMAGENS 
    $("#img1").click(function() {
        $("#img1").css("height","300px")
        $("#img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10").hide()
        })  
    $("#img2").click(function() {
        $("#img2").css("height","300px")
        $("#img1, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10").hide()
        })
    $("#img3").click(function() {
        $("#img3").css("height","300px")
        $("#img1, #img2, #img4, #img5, #img6, #img7, #img8, #img9, #img10").hide()
        }) 
    $("#img4").click(function() {
        $("#img4").css("height","300px")
        $("#img1, #img2, #img3, #img5, #img6, #img7, #img8, #img9, #img10").hide()
        })  
    $("#img5").click(function() {
        $("#img5").css("height","300px")
        $("#img1, #img2, #img3, #img4, #img6, #img7, #img8, #img9, #img10").hide()
        })
    $("#img6").click(function() {
        $("#img6").css("height","300px")
        $("#img1, #img2, #img3, #img4, #img5, #img7, #img8, #img9, #img10").hide()
        }) 
    $("#img7").click(function() {
        $("#img7").css("height","300px")
        $("#img1, #img2, #img3, #img4, #img5, #img6, #img8, #img9, #img10").hide()
        })
    $("#img8").click(function() {
        $("#img8").css("height","300px")
        $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img9, #img10").hide()
        })
    $("#img9").click(function() {
        $("#img9").css("height","300px")
        $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img10").hide()
        })
    $("#img10").click(function() {
        $("#img10").css("height","300px")
        $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9").hide()
        })
                       
    $(".imagens").mouseleave(function() {
        $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10").css("height", "120px")
        $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10").show()
    })
})