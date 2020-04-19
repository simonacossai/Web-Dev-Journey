 $('li').each(function(i) {
  
    
  
  
   $(this).delay( i*(2000) ).show("drop", {direction: "down",easing: 'easeInOutExpo'}, 1500);
      var current_height = $(".chat-w").prop("scrollHeight");
        $(".chat-w").animate({
             scrollTop: current_height
         }, 1000);
 });

 $(".car").delay(15000).animate({left: -200}, 1000, function() {
       $(".car").delay(500).animate({left: -400}, 1000);
     });




var current_height = $(".chat-w").prop("scrollHeight");
$("li:nth-child(1)").show("drop", {direction: "down",easing: 'easeInOutExpo'}, 1000, function() {
$("li:nth-child(2)").delay(1000).show("drop", {direction: "down",easing: 'easeInOutCirc'}, 1000, function() {
$("li:nth-child(3)").delay(1000).show("drop", {direction: "down",easing: 'easeInOutCirc'}, 1000, function() {
$("li:nth-child(4)").delay(1000).show("drop", {direction: "down",easing: 'easeInOutCirc'}, 1000, function() {
$("li:nth-child(5)").delay(1000).show("drop", {direction: "down",easing: 'easeInOutCirc'}, 1000, function() {
$(".chat-w").animate({scrollTop: current_height}, 1000, function() {
$("li:nth-child(6)").delay(500).show("drop", {direction: "down",easing: 'easeInOutCirc'}, 1000, function() {
$(".chat-w").animate({scrollTop: current_height}, 1000, function() {
$("li:nth-child(7)").delay(500).show("drop", {direction: "down",easing: 'easeInOutCirc'}, 1000, function() {
$(".chat-w").animate({scrollTop: current_height}, 1000, function() {
$("li:nth-child(8)").delay(500).show("drop", {direction: "down",easing: 'easeInOutCirc'}, 1000, function() {
$(".chat-w").animate({scrollTop: current_height}, 1000, function() {
$("li:nth-child(9)").delay(500).show("drop", {direction: "down",easing: 'easeInOutCirc'}, 1000, function() {
$(".car").delay(1000).animate({left: -220}, 1000, function() {
$(".car").delay(1000).animate({left: -440}, 1000, function() {

});
});
}); 
});
}); 
});
}); 
});
});
});
});
});
});
});
});