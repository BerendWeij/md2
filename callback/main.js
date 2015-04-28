$(function() {

    var playlistLoader = new JSONLoader();
    playlistLoader.load('data.json', function(data){
        console.log(data);
    });

});