$(document).ready(function(){

    let key= "AIzaSyAIhkXJnuDnLMq0FCtoLiRaC25Sx6iutxw";
    let playlistId = "PLBeeiCx5Kc2s-gOu3U0awfa0NqOvU6v9Q";
    let URL ="https://www.googleapis.com/youtube/v3/playlistItems";

    let options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }
    loadVids();
    
    function loadVids(){
        $.getJSON(URL, options, function(data){
            console.log(data);
            mainVid();
        })
    }

    function mainVid() {
        $('#video').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6BPDktJNBwE" frameborder="0" allow="accelerometer; autoplay;
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    }
});