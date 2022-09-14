$(function () {

  $(".mv-slider").slick({
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "15%",
    dots: true,
  });
       
      $('.top-pickup__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: "15%",
        dots: true,
        arrows: true,
      })

      $('.top-pickup__slider-smartphone').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      })

})