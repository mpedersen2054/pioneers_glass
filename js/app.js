$(document).ready(function() {

    var clientId = 'dec355921049a2b';
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Client-ID ' + clientId
        }
    });

    $.getJSON('https://api.imgur.com/3/account/patmedersen/album/6ZEqg/title',
        function(results) {
            console.log(results)
            manipulateData(results.data.images);
        }
    );


});