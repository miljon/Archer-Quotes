$(document).ready(function () {
    readRandomQuote();
    $("#quoteButton").click(function () {
        readRandomQuote();
    });
});

function readRandomQuote() {
    $.getJSON('../../resources/quotes.json', function (json) {
        $('.quote').html(json[getRandomInt(0, Object.keys(json).length)]);
        console.log($(".quote").html());
        $('.twitter-share-button').attr("href", "https://twitter.com/intent/tweet?text=Classic Archer quote: \"" + $(".quote").html() + "\"")
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// From Twitter site
window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));