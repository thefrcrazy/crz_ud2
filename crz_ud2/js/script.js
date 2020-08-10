
var appendNumber = 1;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 100,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 20,
        hide: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


$(document).ready(function(){
    
    $(".body").css("opacity", "100%").hide()
    $(".swiper-slide").hide()

    hideAllNavMenu()

    $("#capot").hide()
    $("#parchocav").hide()
    
    window.addEventListener("message", function(event){
        
        $(".body").fadeIn()
        $(".swiper-slide").animate({width: "show"}, 1000)
        $("#capot").fadeIn()
        //Nav Bar 1 (0 a 4)
        $(".menu1_prev").fadeIn()
        $(".navmenu").fadeIn()
        $(".menu1_next").fadeIn()


        swiper.slideTo(0)
        
        if (event.data.capot == 0 ) {
            $("#item1").css("background" , "radial-gradient(rgba(0, 0, 0, 0.8), rgba(112, 0, 0, 0.6) 70%)")
        }

        if (event.data.parchocav == 0 ) {
            $("#item2").css("background" , "radial-gradient(rgba(0, 0, 0, 0.8), rgba(112, 0, 0, 0.6) 70%)")
        }

        if (event.data.parchocar == 0 ) {
            $("#item3").css("background" , "radial-gradient(rgba(0, 0, 0, 0.8), rgba(112, 0, 0, 0.6) 70%)")
        }

        if (event.data.spoiler == 0 ) {
            $("#item4").css("background" , "radial-gradient(rgba(0, 0, 0, 0.8), rgba(112, 0, 0, 0.6) 70%)")
        }

        if (event.data.neon == 0 ) {
            $("#item5").css("background" , "radial-gradient(rgba(0, 0, 0, 0.8), rgba(112, 0, 0, 0.6) 70%)")
        }

        if (event.data.roue == 0 ) {
            $("#item6").css("background" , "radial-gradient(rgba(0, 0, 0, 0.8), rgba(112, 0, 0, 0.6) 70%)")
        }

        if (event.data.primcouleur == 0 ) {
            $("#item7").css("background" , "radial-gradient(rgba(0, 0, 0, 0.8), rgba(112, 0, 0, 0.6) 70%)")
        }

        if (event.data.seconcouleur == 0 ) {
            $("#item8").css("background" , "radial-gradient(rgba(0, 0, 0, 0.8), rgba(112, 0, 0, 0.6) 70%)")
        }

    
        $(document).keydown(function(e){
            if(e.which == 27){ // if "ECHAP" is pressed
                $(".body").fadeOut()
                $(".swiper-slide").animate({width: "hide"}, 1000)
                hideAllNavMenu()

                $("#capot").hide()
                $("#parchocav").hide()
                $.post('http://crz_ud2/disablenuifocus');
            }
        });

        $(".menu1_next").on("click", function(e){
            $(".menu1_prev").slideUp()
            $(".navmenu").slideUp()
            $(".menu1_next").slideUp()

            $(".menu2_prev").slideDown()
            $(".navmenu2").slideDown()
            $(".menu2_next").slideDown()
        });

        $(".menu2_next").on("click", function(e){
            $(".menu2_prev").slideUp()
            $(".navmenu2").slideUp()
            $(".menu2_next").slideUp()

            $(".menu3_prev").slideDown()
            $(".navmenu3").slideDown()
            $(".menu3_next").slideDown()
        });

        $(".menu3_next").on("click", function(e){
            $(".menu3_prev").slideUp()
            $(".navmenu3").slideUp()
            $(".menu3_next").slideUp()

            $(".menu4_prev").slideDown()
            $(".navmenu4").slideDown()
            $(".menu4_next").slideDown()
        });


        $(".menu4_prev").on("click", function(e){
            $(".menu4_prev").slideUp()
            $(".navmenu4").slideUp()
            $(".menu4_next").slideUp()

            $(".menu3_prev").slideDown()
            $(".navmenu3").slideDown()
            $(".menu3_next").slideDown()
        });

        $(".menu3_prev").on("click", function(e){
            $(".menu3_prev").slideUp()
            $(".navmenu3").slideUp()
            $(".menu3_next").slideUp()

            $(".menu2_prev").slideDown()
            $(".navmenu2").slideDown()
            $(".menu2_next").slideDown()
        });

        $(".menu2_prev").on("click", function(e){
            $(".menu2_prev").slideUp()
            $(".navmenu2").slideUp()
            $(".menu2_next").slideUp()

            $(".menu1_prev").slideDown()
            $(".navmenu").slideDown()
            $(".menu1_next").slideDown()
        });










        $('#item1').on('click', function(e){
            $("#capot").show()
            swiper.slideTo(0)
            resetNavMenu()
            
            $("#parchocav").hide()
        });

        $('#item2').on('click', function(e){
            $("#parchocav").show()
            swiper.slideTo(1)
            resetNavMenu()
            $("#capot").hide()
        });


        

    })
})


var resetNavMenu = function() {
    //Nav Bar 1 (0 a 4)
    $(".menu1_prev").slideDown()
    $(".navmenu").slideDown()
    $(".menu1_next").slideDown()

    //Nav Bar 2 (5 a 9)
    $(".menu2_prev").hide()
    $(".navmenu2").hide()
    $(".menu2_next").hide()

    //Nav Bar 3 (10 a 14)
    $(".menu3_prev").hide()
    $(".navmenu3").hide()
    $(".menu3_next").hide()

    //Nav Bar 4 (15 a 19)
    $(".menu4_prev").hide()
    $(".navmenu4").hide()
    $(".menu4_next").hide()
}

var hideAllNavMenu = function() {
    //Nav Bar 1 (0 a 4)
    $(".menu1_prev").hide()
    $(".navmenu").hide()
    $(".menu1_next").hide()

    //Nav Bar 2 (5 a 9)
    $(".menu2_prev").hide()
    $(".navmenu2").hide()
    $(".menu2_next").hide()

    //Nav Bar 3 (10 a 14)
    $(".menu3_prev").hide()
    $(".navmenu3").hide()
    $(".menu3_next").hide()

    //Nav Bar 4 (15 a 19)
    $(".menu4_prev").hide()
    $(".navmenu4").hide()
    $(".menu4_next").hide()
}