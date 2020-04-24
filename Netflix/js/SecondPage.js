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

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
   if (startchange.length){
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $("#nav").css('background-color', '#f0f0f0');
      } else {
         $('#nav').css('background-color', 'transparent');
      }
  });
   }
});