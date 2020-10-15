$(".SliderTeam").slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed:5000
});


 $(document).ready(function(){
    $(".menu").on("click","a", function () {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top},2000)
    });
});
