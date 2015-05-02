/* JavaScript and jQuery functions specific to PSDI */
$(document).ready(function(){
    
    /* Inititalize Slick Carousel */
    $(".slick-carousel").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        mobileFirst: true,
        swipeToSlide: true,
        variableWidth: true,
        adaptiveHeight: true,
    });
    
    /* FitVids Initialize */
    $("#fitvids-video").fitvids();
    
    /* Collapsible Panel Group */
    $(".collapse").collapse();
});