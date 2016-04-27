'use strict';


// $(".project-detail-wrapper").click(function() {
//     // console.log("div clicked");
//     if ($(".projects").hasClass("fade-main")) {
//         $(".projects").removeClass("fade-main");
//     }
//
//     $(".project-detail-wrapper").remove();
// });
//
// $("#bathy-proj").click(function() {
//     $(".projects").addClass("fade-main");
//     $("#projects-wrapper").append($("<div class='project-detail-wrapper'></div>").load("bathy.html"));
// });

function scrollToTop(target, duration, offset, callback) {
    var offset = offset || 0;
    $('html, body').animate({
        scrollTop: $(target).offset().top + offset
    }, duration);
    callback || $.noop;
}

function showDetail() {
    $(".projects").addClass("fade-main");
    $(".project-detail-wrapper").load("bathy.html")
    $(".project-detail-wrapper").removeClass("close").addClass("open");
};

function hideDetail() {
    if ($(".projects").hasClass("fade-main")) {
        $(".projects").removeClass("fade-main");
    };

    $("#bathy-project-detail").remove();
    $(".project-detail-wrapper").removeClass("open").addClass("close");
};


$(".project-detail-wrapper").on("click", hideDetail);
$("#bathy-proj").click(showDetail);

$('#bathy-proj').click(function() {
    scrollToTop('#site-header', 500);
})

console.log("Hi, I'm Ryan. What's your name?");
