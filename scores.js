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
var utst1 = 0;

var oral1 = participants/1;
var ohst1 = 0;

var bay1 = participants/17;

var lc1 = participants/8;
var gt1 = 0;

var orst1 = participants/7;
var tenn1 = 0;

var lib1 = 0;
var okst1 = participants/14;

var wisc1 = participants/9;
var unc1 = 0;

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

var davidScore = fla1 + ark1 + ill1 + utst1 + bay1 + ohst1 + gt1 + tenn1 + okst1 + wisc1; //+ hou1 + pur1 + clem1 + syra1 + wvir1 + vill1;
var daveScore = vt1 + col1 + ill1 + utst1 + bay1 + ohst1 + lc1 + tenn1 + okst1 + wisc1; //+ hou1 + pur1 + clem1 + syra1 + mst1 + vill1;
var aprilScore = fla1 + ark1 + ill1 + tt1 + bay1 + ohst1 + lc1 + tenn1 + okst1 + wisc1;//+ hou1 + pur1 + clem1 + syra1 + wvir1 + vill1;
var calebScore = vt1 + col1 + ill1 + utst1 + bay1 + ohst1 + lc1 + orst1 + okst1 + unc1; //+ hou1 + ntex1 + rut1 + sdst1 + mst1 + win1;
var ethanScore = fla1 + ark1 + ill1 + utst1 + bay1 + ohst1 + gt1 + orst1 + okst1 + unc1; //+ hou1 + pur1 + clem1 + sdst1 + wvir1 + vill1;
var rachelScore = vt1 + ark1 + ill1 + utst1 + bay1 + ohst1 + gt1 + tenn1 + okst1 + wisc1; //+ hou1 + pur1 + rut1 + syra1 + wvir1 + vill1;
var hyrumScore = fla1 + ark1 + ill1 + tt1 + bay1 + ohst1 + lc1 + tenn1 + okst1 + unc1; //+ hou1 + pur1 + clem1 + sdst1 + wvir1 + vill1;
var paigeScore = fla1 + ark1 + ill1 + utst1 + bay1 + ohst1 + gt1 + orst1 + lib1 + unc1; //+ hou1 + ntex1 + clem1 + syra1 + wvir1 + vill1;
var mattScore = vt1 + ark1 + ill1 + tt1 + bay1 + ohst1 + gt1 + tenn1 + lib1 + unc1; //+ hou1 + ntex1 + rut1 + sdst1 + wvir1 + vill1;
var reedScore = fla1 + ark1 + ill1 + tt1 + bay1 + oral1 + gt1 + orst1 + okst1 + wisc1; //+ hou1 + pur1 + clem1 + sdst1 + mst1 + win1;
var katieScore = fla1 + ark1 + ill1 + utst1 + bay1 + ohst1 + gt1 + tenn1 + okst1 + wisc1; //+ hou1 + pur1 + rut1 + syra1 + wvir1 + vill1;
var noahScore = fla1 + ark1 + ill1 + tt1 + bay1 + ohst1 + lc1 + tenn1 + okst1 + unc1; //+ hou1 + pur1 + clem1 + sdst1 + wvir1 + vill1;
var dennisScore = vt1 + ark1 + ill1 + utst1 + bay1 + ohst1 + lc1 + tenn1 + okst1 + wisc1; //+ hou1 + pur1 + rut1 + syra1 + mst1 + win1;
var susanScore = fla1 + ark1 + ill1 + utst1 + bay1 + ohst1 + lc1 + orst1 + okst1 + unc1; //+ hou1 + pur1 + clem1 + sdst1 + wvir1 + vill1;
var suzyScore = vt1 + ark1 + drex1 + utst1 + bay1 + ohst1 + lc1 + orst1 + lib1 + wisc1; //+ clev1 + pur1 + clem1 + syra1 + wvir1 + win1;
var sheaScore = fla1 + ark1 + ill1 + utst1 + bay1 + ohst1 + gt1 + tenn1 + okst1 + unc1; //+ hou1 + pur1 + clem1 + sdst1 + wvir1 + vill1;
var leviScore = fla1 + ark1 + ill1 + utst1 + bay1 + ohst1 + gt1 + orst1 + okst1 + wisc1; //+ clev1 + ntex1 + clem1 + sdst1 + wvir1 + vill1;

var ndavid = davidScore.toFixed(2);
var ndennis = dennisScore.toFixed(2);
var nsusan = susanScore.toFixed(2);
var ndave = daveScore.toFixed(2);
var napril  = aprilScore.toFixed(2);
var ncaleb = calebScore.toFixed(2);
var nethan = ethanScore.toFixed(2);
var nlevi = leviScore.toFixed(2);
var nhyrum = hyrumScore.toFixed(2);
var nrachel = rachelScore.toFixed(2);
var npaige = paigeScore.toFixed(2);
var nmatt = mattScore.toFixed(2);
var nkatie = katieScore.toFixed(2);
var nreed = reedScore.toFixed(2);
var nnoah = noahScore.toFixed(2);
var nsuzy = suzyScore.toFixed(2);
var nshea = sheaScore.toFixed(2);

$("#davidScore").text(ndavid);
$("#dennisScore").text(ndennis);
$("#susanScore").text(nsusan);
$("#daveScore").text(ndave);
$("#aprilScore").text(napril);
$("#calebScore").text(ncaleb);
$("#ethanScore").text(nethan);
$("#leviScore").text(nlevi);
$("#hyrumScore").text(nhyrum);
$("#rachelScore").text(nrachel);
$("#paigeScore").text(npaige);
$("#mattScore").text(nmatt);
$("#katieScore").text(nkatie);
$("#reedScore").text(nreed);
$("#noahScore").text(nnoah);
$("#suzyScore").text(nsuzy);
$("#sheaScore").text(nshea);