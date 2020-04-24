$('.post-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });

  function changeImage() {

        document.getElementById('foreground').src = "img/catmovie.jpg";
  
}
function changeImage2() {

  document.getElementById('foreground').src = "img/catmovie2.jpg";

}