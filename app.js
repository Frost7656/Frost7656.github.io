/*------------------------------Loading page------------------------------*/

$(window).on("load", function () {
    setTimeout(function () {
        $(".loader").fadeOut(1200);
    }, 2675)
});

/*------------------------------Nav------------------------------*/

//Large screens version

$("nav a").on("click", function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("nav .slide1").css({ opacity: 1, left: +position.left, width: width });
});

$("#logo").on("click", function () {
    var position = $("nav a").parent().position();
    var width = $("nav a").parent().width();
    $("nav .slide1").css({ opacity: 1, left: +position.left, width: width });
});

$("nav a").on("mouseover", function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("nav .slide2").css({
        opacity: 1,
        left: +position.left,
        width: width
    });
});

$("nav a").on("mouseout", function () {
    $("nav .slide2").css({ opacity: 0 });
});

var currentWidth = $("nav").find("li:nth-of-type(1) a").parent("li").width();
var current = $("li:nth-of-type(1) a").position();
$("nav .slide1").css({ left: +current.left, width: currentWidth });

//Mobile version

$(".menu-btn, li").click(function () {
	$(".menu-btn").toggleClass("active");
	$(".overlay").toggleClass("active");
	$(".menu-container").toggleClass("active");
});

const cursor = curDot();

cursor.over(".line-1", {
	borderColor: "rgba(255,255,255,.38)",
	broderWidth: 2
});