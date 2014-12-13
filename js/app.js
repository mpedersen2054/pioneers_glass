$(document).ready(function() {

var clientId = 'dec355921049a2b';
$.ajaxSetup({
    headers: {
        'Authorization' : 'Client-ID ' + clientId
    }
});

$.getJSON('https://api.imgur.com/3/account/patmedersen/album/6ZEqg/title',
    function(results) {
        manipulateData(results.data.images);
    }
);

function manipulateData(data) {

    // find by a-z, artist, date

    var alphaData = sortByTitle(data);
    insertHtml(alphaData);

    function sortByTitle(unsorted) {
        var byTitle = unsorted.slice(0);
        byTitle.sort(function(a, b) {
            var x = a.title.toLowerCase(),
                y = b.title.toLowerCase();

            if (x < y) { return -1 }
            else if (x > y) { return 1 }
            else { byTitle.slice(a,b) }
        });
        return byTitle
    }

    function sortByDate(unsorted) {
        var byDate = unsorted.slice(0);
        byDate.sort(function(a, b) {
            return a.title - b.title
        });
    }
}

function insertHtml(items) {
}

$('.artwork-image').hover(imgMouseOn, imgMouseOff)
function imgMouseOn() {
    $(this)
        .find($('.artwork-meta'))
            .animate({
                height: '+=100px',
                borderTop: '2px solid #444'
            }, 200)
        .find($('.artwork-artists, .more-imgs')).show(200)
    .end()
        .find($('.artwork-description')).show(200)
}
function imgMouseOff() {
    $(this)
        .find($('.artwork-meta'))
            .animate({
                height: '-=100px',
                borderTop: '0px solid #444'
            }, 300)
        .find($('.artwork-artists, .more-imgs')).hide()
    .end()
        .find($('.artwork-description')).hide()
}

$('#dropdown-1').click(function () {
    alert('hi')
})


});