console.log("Hello World!");
//$("Select Item").What happens(What happens pt.2)
$("#Template").text("Hello Human o/");
// Main Menu Dropdown(Probably a better way to do this)
$(".aboutMeBtn").click(function () { 
    $(".whyMade").hide();
    $(".whereTo").hide();
    $(".aboutMe").toggle();
    $(".aboutMeBtn").toggleClass("clickedBtn");
    $(".whyMadeBtn").removeClass("clickedBtn");
    $(".whereToBtn").removeClass("clickedBtn");
});
$("header").mouseover(function () { 
    $("#htmlThingy").hide();
    $("#colan3").show();
});
$("header").mouseleave(function () { 
    $("#colan3").hide();
    $("#htmlThingy").show();
});
$(".whyMadeBtn").click(function () { 
    $(".aboutMe").hide();
    $(".whereTo").hide();
    $(".whyMade").toggle();
    $(".whyMadeBtn").toggleClass("clickedBtn");
    $(".aboutMeBtn").removeClass("clickedBtn");
    $(".whereToBtn").removeClass("clickedBtn");
});
$(".whereToBtn").click(function () { 
    $(".aboutMe").hide();
    $(".whyMade").hide();
    $(".whereTo").toggle();
    $(".whereToBtn").toggleClass("clickedBtn");
    $(".aboutMeBtn").removeClass("clickedBtn");
    $(".whyMadeBtn").removeClass("clickedBtn");
});
$("#sus").mouseenter (function () { 
    $("#red").show();
});
$("#sus").mouseleave(function () { 
    $("#red").hide();
});