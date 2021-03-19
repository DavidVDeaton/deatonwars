var david = $("<img>", {
    class: "med-circle",
    alt: "David",
    src: "assets/profile/david.jpg"
});

var dave = $("<img>", {
    class: "med-circle",
    alt: "Dave",
    src: "assets/profile/dave.jpg"
});

var april = $("<img>", {
    class: "med-circle",
    alt: "April",
    src: "assets/profile/april.jpg"
});

var caleb = $("<img>", {
    class: "med-circle",
    alt: "Caleb",
    src: "assets/profile/caleb.jpg"
});

var ethan = $("<img>", {
    class: "med-circle",
    alt: "Ethan",
    src: "assets/profile/ethan.png"
});

var katie = $("<img>", {
    class: "med-circle",
    alt: "Katie",
    src: "assets/profile/katie.jpg"
});

var matt = $("<img>", {
    class: "med-circle",
    alt: "Katie",
    src: "assets/profile/matt.jpg"
});

var paige = $("<img>", {
    class: "med-circle",
    alt: "Paige",
    src: "assets/profile/paige.jpg"
});

var noah = $("<img>", {
    class: "med-circle",
    alt: "Noah",
    src: "assets/profile/noah.jpg"
});

var reed = $("<img>", {
    class: "med-circle",
    alt: "Reed",
    src: "assets/profile/reed.jpg"
});

var dennis = $("<img>", {
    class: "med-circle",
    alt: "Dennis",
    src: "assets/profile/dennis.jpg"
});

var susan = $("<img>", {
    class: "med-circle",
    alt: "Susan",
    src: "assets/profile/susan.png"
});

var hyrum = $("<img>", {
    class: "med-circle",
    alt: "Hyrum",
    src: "assets/profile/hyrum2.jpg"
});

var levi = $("<img>", {
    class: "med-circle",
    alt: "Levi",
    src: "assets/profile/levi2.jpg"
});

var rachel = $("<img>", {
    class: "med-circle",
    alt: "Rachel",
    src: "assets/profile/rachel.jpg"
});

var shea = $("<img>", {
    class: "med-circle",
    alt: "Shea",
    src: "assets/profile/shea.png"
});

var suzy = $("<img>", {
    class: "med-circle",
    alt: "Suzy",
    src: "assets/profile/suzy.jpg"
});

$(".david").append(david);
$(".dave").append(dave);
$(".april").append(april);
$(".caleb").append(caleb);
$(".ethan").append(ethan);
$(".katie").append(katie);
$(".matt").append(matt);
$(".paige").append(paige);
$(".noah").append(noah);
$(".reed").append(reed);
$(".dennis").append(dennis);
$(".susan").append(susan);
$(".hyrum").append(hyrum);
$(".rachel").append(rachel);
$(".levi").append(levi);
$(".suzy").append(suzy);
$(".shea").append(shea);

var participants = 17;

var fla1 = participants/11;
var vt1 = 0;

var ark1 = participants/15;
var col1 = 0;

var ill1 = participants/16;
var drex1 = 0;

var tt1 = participants/5;
var utst1 = participants/12;

var oral1 = participants/1;
var ohst1 = participants/16;

var bay1 = participants/17;

var gt1 = participants/9;
var lc1 = participants/8;

var orst1 = participants/7;
var tenn1 = participants/10;

var lib1 = participants/3;
var okst1 = participants/14;

var wisc1 = participants/9;
var unc1 = participants/8;

var clev1 = participants/2;
var hou1 = participants/15;

var ntex1 = participants/4;
var pur1 = participants/13;

var rut1 = participants/5;
var clem1 = participants/12;

var syra1 = participants/8;
var sdst1 = participants/9;

var mst1 = participants/4;
var wvir1 = participants/13;

var win1 = participants/4;
var vill1 = participants/13;

var davidScore = fla1 + ark1 + ill1;
var daveScore = vt1 + col1 + ill1;
var aprilScore = fla1 + ark1 + ill1;
var calebScore = vt1 + col1 + ill1;
var ethanScore = fla1 + ark1 + ill1;
var rachelScore = vt1 + ark1 + ill1;
var hyrumScore = fla1 + ark1 + ill1;
var leviScore = fla1 + ark1 + ill1;
var paigeScore = fla1 + ark1 + ill1;
var mattScore = vt1 + ark1 + ill1;
var reedScore = fla1 + ark1 + ill1;
var katieScore = fla1 + ark1 + ill1;
var noahScore = fla1 + ark1 + ill1;
var dennisScore = vt1 + ark1 + ill1;
var susanScore = fla1 + ark1 + ill1;
var suzyScore = vt1 + ark1 + drex1;
var sheaScore = fla1 + ark1 + ill1;

$("#davidScore").text(davidScore);
$("#dennisScore").text(dennisScore);
$("#susanScore").text(susanScore);
$("#daveScore").text(daveScore);
$("#aprilScore").text(aprilScore);
$("#calebScore").text(calebScore);
$("#ethanScore").text(ethanScore);
$("#leviScore").text(leviScore);
$("#hyrumScore").text(hyrumScore);
$("#rachelScore").text(rachelScore);
$("#paigeScore").text(paigeScore);
$("#mattScore").text(mattScore);
$("#katieScore").text(katieScore);
$("#reedScore").text(reedScore);
$("#noahScore").text(noahScore);
$("#suzyScore").text(suzyScore);
$("#sheaScore").text(sheaScore);