$(function() {
    $('a').each(function() {
        $(this).css("text-decoration","line-through");
        $(this).attr('href', "https://www.google.com");
    });
    $('img').each(function() {
        $(this).attr('src') = "img/die1.png";
    });
});