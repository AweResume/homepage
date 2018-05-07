$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(600).fadeOut("slow");
    $(".top_text h1").animated("fadeInUp", "fadeOutDown");
    $(".top_text p").animated("fadeInUp", "fadeOutDown");
});