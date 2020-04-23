$('.post-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });

    function pictureChange()
    {
          document.getElementsBySrc("../img/background.jpg").src="../img/catmovie.jpg";
    }
