$(document).ready(function(){
    for(var i = 1; i < 51; i++){
        var s = '<div class="image-container">' +
                '<div>' +
                    '<img src="img/photo ('+ i +').jpg">'
                '</div>' +
            '</div>';
        $('.container').append(s);
    }
});