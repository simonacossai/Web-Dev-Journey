$('.post-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });

  function changeImage() {

    if (document.getElementById("foreground").src == "../img/background.jpg") 
    {
        document.getElementById("foreground").src = "../img/catmovie.jpg";
    }
    else 
    {
        document.getElementById("foreground").src = "../img/background.jpg";
    }
}