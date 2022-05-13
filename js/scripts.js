// Hide home until I get things sorted

$('#tikka').hide();
$('#lbchicken').hide();
$('#steakrb').hide();

$(document).ready(function () {

    $('#homebutton').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".hero-container").offset().top
        }, 2000);
    });

    $('#infobutton').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".info-container").offset().top
        }, 2000);
    });

    $('#signbutton').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".copy-container").offset().top
        }, 2000);
    });

});