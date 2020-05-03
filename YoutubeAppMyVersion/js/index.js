$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });

$(document).ready(function(){
   
    var key = 'AIzaSyAQrx0r9z8RSJQRD0c3LvRzJZxZ_LuzWjw';
    var playlistId = 'PLsxGGcnM5j_RjzgynryZaEdLqrGgyLqXA';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVids();
    function loadVids(){
        $.getJSON(URL, options, function(data){
            console.log(data);
            var id = data.items[0].snippet.resourceId.videoId;
          resultsLoop(data);
        })
    }


    function resultsLoop(data){
        $.each(data.items, function(i, item){
            var id = data.items[0].snippet.resourceId.videoId;
            $('.post-wrapper').append(`
            <div class="post">
            <iframe width="300" height="450" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay;
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                `)
        });
    }
});
