console.log("Hello Mortal Human! How are thy doing?");
$("#hewo").text("Hello Human o/");
$("header").mouseover(function () {
    $("#colan3").show();
});
$("header").mouseleave(function () { 
    $("#colan3").hide();
});
// Main Menu Dropdown(Probably a better way to do this)
$(".aboutMeBtn").click(function () { 
    $(".whyMade").hide();
    $(".whereTo").hide();
    $(".aboutMe").toggle();
    $(".aboutMeBtn").toggleClass("clickedBtn");
    $(".whyMadeBtn").removeClass("clickedBtn");
    $(".whereToBtn").removeClass("clickedBtn");
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
$("#infoBoxesBtn").click(function (){
    $("#infoBoxes").slideToggle();
    $("#infoBoxesBtn i").toggleClass("rotated");
    $("nav").fadeIn();
});
$("#setupInfoBtn").click(function (){
    $("#setupInfo").slideToggle();
    $("#setupInfoBtn i").toggleClass("rotated");
});
$("#htmlInfoBtn").click(function (){
    $("#htmlInfo").slideToggle();
    $("#htmlInfoBtn i").toggleClass("rotated");
});
$("#cssInfoBtn").click(function (){
    $("#cssInfo").slideToggle();
    $("#cssInfoBtn i").toggleClass("rotated");
});
$("#jqueryInfoBtn").click(function (){
    $("#jqueryInfo").slideToggle();
    $("#jqueryInfoBtn i").toggleClass("rotated");
});
$("#setupBtn").click(function (){
    $(".setup").slideToggle();
    $("#setupBtn i").toggleClass("rotated");
});
$("#toggleExBtn").click(function () { 
    $("#toggleEx").toggle();
});
$("#setupIMG1").mouseover(function () {
    $("#setupIMG1").hide();
    $("#setupIMG2").show();
});
$("#setupIMG2").mouseleave(function () {
    $("#setupIMG1").show();
    $("#setupIMG2").hide();
});
$("#cssWave1").mouseover(function () {
    $("#cssWave1").hide();
    $("#cssWave2").show();
});
$("#cssWave2").mouseleave(function () {
    $("#cssWave1").show();
    $("#cssWave2").hide();
});
$("#jqPopup1").mouseover(function () {
    $("#jqPopup1").hide();
    $("#jqPopup2").show();
});
$("#jqPopup2").mouseleave(function () {
    $("#jqPopup1").show();
    $("#jqPopup2").hide();
});
// Ricks:
$("#setupTip1").mouseover(function () {
    $("#setupTip1").hide();
    $("#setupRick1").show();
});
$("#setupRick1").mouseleave(function () {
    $("#setupTip1").show();
    $("#setupRick1").hide();
});
$("#setupTip2").mouseover(function () {
    $("#setupTip2").hide();
    $("#setupRick2").show();
});
$("#setupRick2").mouseleave(function () {
    $("#setupTip2").show();
    $("#setupRick2").hide();
});
$("#setupTip3").mouseover(function () {
    $("#setupTip3").hide();
    $("#setupRick3").show();
});
$("#setupRick3").mouseleave(function () {
    $("#setupTip3").show();
    $("#setupRick3").hide();
});
$("#setupTip4").mouseover(function () {
    $("#setupTip4").hide();
    $("#setupRick4").show();
});
$("#setupRick4").mouseleave(function () {
    $("#setupTip4").show();
    $("#setupRick4").hide();
});