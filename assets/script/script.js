/*Selection*/
var submited1 = false;
function submit1(nour){
var allanswers1 = document.getElementsByClassName("answers1");
for (let a = 0; a < allanswers1.length; a++) {
    allanswers1[a].style.background = "red";
    allanswers1[a].style.color = "white";
    allanswers1[a].disabled=true;
}
 allanswers1[2].style.background = "green";
 nour.style.border ="black solid 2px";
}
var submited2 = false;
function submit2(nour){                                                                                                                                                                             
var allanswers2 = document.getElementsByClassName("answers2");
for (let b = 0; b < allanswers2.length; b++) {
    allanswers2[b].style.background = "red";
    allanswers2[b].style.color = "white";
    allanswers2[b].disabled=true;
}
allanswers2[1].style.background = "green";
nour.style.border = "black solid 2px";
}
var submited3 = false;
function submit3(nour){
var allanswers3 = document.getElementsByClassName("answers3");
for (let c = 0; c < allanswers3.length; c++) {
    allanswers3[c].style.background = "red";
    allanswers3[c].style.color = "white";
    allanswers3[c].disabled=true;
}
allanswers3[0].style.background = "green";
nour.style.border = "black solid 2px";
}
            var submited4=false;
        function submit4(nour){
            
            var allanswers4 = document.getElementsByClassName("answers4");
             for (let d = 0; d < allanswers4.length; d++) {
                allanswers4[d].style.background= "red";
                allanswers4[d].style.color ="white"; 
                allanswers4[d].disabled =true;
            }
             allanswers4[0].style.background = "green";
             nour.style.border ="black solid 2px";
            }
            var num1 = 1;
    var num2 = 1;
    var num3 = 1;
    var num4 = 1;
    function changeimg1s(n) {
    num1 = num1+1;
    if ( num1 % 2 == 0   ) {
        n.src = "assets/images/true.svg";
    }
    else{
        n.src = "assets/images/notselected.svg";
    }
}
function changeimg2s(n) {
    num2 = num2+1;
    if ( num2 % 2 == 0   ) {
        n.src = "assets/images/true.svg";
    }
    else{
        n.src = "assets/images/notselected.svg";
    }
}
function changeimg3s(n) {
    num3 = num3+1;
    if ( num3 % 2 == 0   ) {
        n.src = "assets/images/true.svg";
    }
    else{
        n.src = "assets/images/notselected.svg";
    }
}
function changeimg4s(n) {
    num4 = num4+1;
    if ( num4 % 2 == 0   ) {
        n.src = "assets/images/true.svg";
    }
    else{
        n.src = "assets/images/notselected.svg";
    }
}
            var click22=document.getElementById("submit");
            var click222=document.getElementsByClassName("circle");
        function answers(){
            if (num1 > 1 || num2 > 1 || num3 >1 || num4 >1) {
                
            for (let k = 0; k < click222.length; k++) {
                click222[k].src="assets/images/wrong.svg";
                
            }
            click222[0].src="assets/images/right.svg";
            click222[1].src="assets/images/right.svg";
        }
        }
        var num5 = 1;
        var num6 = 1;
        var num7 = 1;
        var num8 = 1;
    function changeimg1g(n) {
        num5 = num5+1;
        if ( num5 % 2 == 0   ) {
            n.src = "assets/images/true.svg";
        }
        else{
            n.src = "assets/images/notselected.svg";
        }
    }
    function changeimg2g(n) {
        num6 = num6+1;
        if ( num6 % 2 == 0   ) {
            n.src = "assets/images/true.svg";
        }
        else{
            n.src = "assets/images/notselected.svg";
        }
    }
    function changeimg3g(n) {
        num7 = num7+1;
        if ( num7 % 2 == 0   ) {
            n.src = "assets/images/true.svg";
        }
        else{
            n.src = "assets/images/notselected.svg";
        }
    }
    function changeimg4g(n) {
        num8 = num8+1;
        if ( num8 % 2 == 0   ) {
            n.src = "assets/images/true.svg";
        }
        else{
            n.src = "assets/images/notselected.svg";
        }
    }
            
    
    var clickgg=document.getElementById("submitg");
                var clickg2=document.getElementsByClassName("circleg");
                function answersg(){
                    if (num5 > 1 || num6 > 1 || num7 >1 || num8 >1){
                for (let kg = 0; kg < clickg2.length; kg++) {
                    clickg2[kg].src="assets/images/wrong.svg"   
                }
                clickg2[0].src="assets/images/right.svg"
                clickg2[2].src="assets/images/right.svg"    
                }
            }
/* trueorfalse */
    var num1 = 1;
    var num2 = 1;
    var num3 = 1;
    var num4 = 1;
    var num5 = 1;
    var num6 = 1;
    var num7 = 1;
    var num8 = 1;
    var num9 = 1;
    var num10 = 1;
    var allimages = document.getElementsByClassName("circle")
    function changeimg1(a,b) {
        a.src="assets/images/notselected.svg";
        document.getElementById(b).src="assets/images/notselected.svg";
        a.src = "assets/images/select.svg";
        num1 = num1+1
}
function changeimg2(c,d) {
        c.src="assets/images/notselected.svg";
        document.getElementById(d).src="assets/images/notselected.svg";
        c.src = "assets/images/select.svg";
        num2 = num2+1
}
function changeimg3(e,f) {
        e.src="assets/images/notselected.svg";
        document.getElementById(f).src="assets/images/notselected.svg";
        e.src = "assets/images/select.svg";
        num3 = num3+1
}
function changeimg4(g,h) {
        g.src="assets/images/notselected.svg";
        document.getElementById(h).src="assets/images/notselected.svg";
        g.src = "assets/images/select.svg";
        num4 = num4+1
}
function changeimg5(i,j) {
        i.src="assets/images/notselected.svg";
        document.getElementById(j).src="assets/images/notselected.svg";
        i.src = "assets/images/select.svg";
        num5 = num5+1
}
    function submit() {
        for (let i = 0; i < allimages.length; i++) {
          if (num1 > 1 || num2 > 1 || num3 > 1 || num4 > 1 || num5 > 1 ){
            allimages[i].src="assets/images/wrong.svg"
        allimages[1].src="assets/images/right.svg";
        allimages[2].src="assets/images/right.svg";
        allimages[4].src="assets/images/right.svg";
        allimages[7].src="assets/images/right.svg";
        allimages[9].src="assets/images/right.svg";
    }
}
return true
}
/* Complete */ 
var right1 = "اليربوع";
var right11 = "يربوع" ;
   

var right2 = "الإشعاع";
var right22 = "الاشعاع";

   
var right3 = "K";
var right33 = "k";

   
var right4 = "11";

  

var right5 = "365";

function showTrueorFalse() {
    var answer1 = document.getElementById("inputanswer1").value;
   if (answer1 == right1 || answer1 == right11) {
    alert("الإجابة الأولى :صحيحة")
   }
   else {
        alert("الإجابة الأولى : خطأ")
    }

    var answer2 = document.getElementById("inputanswer2").value;
   if (answer2 == right2 || answer2 == right22) {
    alert("الإجابة الثانية :صحيحة")
   }
   else {
        alert("الإجابة الثانية : خطأ")
    }

    var answer3 = document.getElementById("inputanswer3").value;
   if (answer3 == right3 || answer3 == right33) {
    alert("الإجابة الثالثة :صحيحة")
   }
   else {
        alert("الإجابة الثالثة : خطأ")
    }


var answer4 = document.getElementById("inputanswer4").value;
if (answer4 == right4) {
 alert("الإجابة الرابعة :صحيحة")
}
else {
     alert("الإجابة الرابعة : خطأ")
 }
    var answer5 = document.getElementById("inputanswer5").value;
    if (answer5 == right5) {
     alert("الإجابة الخامسة :صحيحة")
    }
    else {
         alert("الإجابة الخامسة : خطأ")
    }
    }
/* Ailments */
    var inputal = document.getElementsByClassName("inputailments");
function submitailments1(){
    if (numail1 % 2 == 0 ) {
        alert("لاختلاف كثافة كل منها عن الآخر")        
    }
}
function submitailments2(){
    if (numail2 % 2 == 0 ) {
    alert("لأنها مصدر دائم ورخيص وغير ملوث للبيئة")
}
}
function submitailments3(){
    if (numail3 % 2 == 0 ) {
    alert("لحمايتها من الصدأ والتآكل")
    }
}
var numail1 = 1;
var numail2 = 1;
var numail3 = 1;
function activefun1(c){
    numail1 = numail1+1;
    if ( numail1 % 2 == 0   ) {
        c.src = "assets/images/true.svg";
    }
    else{
        c.src = "assets/images/notselected.svg";
    }
}
function activefun2(c){
    numail2 = numail2+1;
    if ( numail2 % 2 == 0   ) {
        c.src = "assets/images/true.svg";
    }
    else{
        c.src = "assets/images/notselected.svg";
    }
}
function activefun3(c){
    numail3 = numail3+1;
    if ( numail3 % 2 == 0   ) {
        c.src = "assets/images/true.svg";
    }
    else{
        c.src = "assets/images/notselected.svg";
    }
}
/* Matching */
var firstelement;
var secondelement;
var thirddelem;
var fourthelem;
var fifthelem;
var sixthelem;
function add(elem){
    if(firstelement!==undefined&&secondelement!==undefined&&thirddelem!==undefined&&fourthelem!==undefined&&fifthelem!==undefined&&sixthelem==undefined){
        sixthelem = "#"+elem.id;
        elem.style.border="black solid 4px"
    }
    if(firstelement!==undefined&&secondelement!==undefined&&thirddelem!==undefined&&fourthelem!==undefined&&fifthelem==undefined){
        fifthelem = "#"+elem.id;
        elem.style.border="black solid 4px"
    }
    if(firstelement!==undefined&&secondelement!==undefined&&thirddelem!==undefined&&fourthelem==undefined){
        fourthelem = "#"+elem.id;
        elem.style.border="black solid 4px"
    }
    if(firstelement!==undefined&&secondelement!==undefined&&thirddelem==undefined){
        thirddelem = "#"+elem.id;
        elem.style.border="black solid 4px"
    }
    if(firstelement!==undefined&&secondelement==undefined){
        secondelement = "#"+elem.id;
        elem.style.border="black solid 4px"
    }
    if(firstelement==undefined){
        firstelement = "#"+elem.id;
        elem.style.border="black solid 4px"
    }
    if(firstelement!==undefined&&secondelement!==undefined){
        connectElements($("#svg1"), $("#path6"), $(firstelement),   $(secondelement));
    }
    if(thirddelem!==undefined&&fourthelem!==undefined){
        connectElements($("#svg1"), $("#path5"), $(thirddelem),   $(fourthelem));
    }
    if(fifthelem!==undefined&&sixthelem!==undefined){
        connectElements($("#svg1"), $("#path4"), $(fifthelem),   $(sixthelem));
    }
}
//helper functions, it turned out chrome doesn't support Math.sgn() 
function signum(x) {
    return (x < 0) ? -1 : 1;
}
function absolute(x) {
    return (x < 0) ? -x : x;
}

function drawPath(svg, path, startX, startY, endX, endY) {
    // get the path's stroke width (if one wanted to be  really precize, one could use half the stroke size)
    path.attr("stroke-width", 10);
    var stroke =  parseFloat(path.attr("stroke-width"));
    // check if the svg is big enough to draw the path, if not, set heigh/width
    if (svg.attr("height") <  endY)                 svg.attr("height", endY);
    if (svg.attr("width" ) < (startX + stroke) )    svg.attr("width", (startX + stroke));
    if (svg.attr("width" ) < (endX   + stroke) )    svg.attr("width", (endX   + stroke));
    
    var deltaX = (endX - startX) * 0.15;
    var deltaY = (endY - startY) * 0.15;
    // for further calculations which ever is the shortest distance
    var delta  =  deltaY < absolute(deltaX) ? deltaY : absolute(deltaX);
    console.log(deltaY < absolute(deltaX) ? "deltay: "+deltaY : "deltaX: "+absolute(deltaX))

    // set sweep-flag (counter/clock-wise)
    // if start element is closer to the left edge,
    // draw the first arc counter-clockwise, and the second one clock-wise
    var arc1 = 0; var arc2 = 1;
    if (startX > endX) {
        arc1 = 1;
        arc2 = 0;
    }
    // draw tha pipe-like path
    // 1. move a bit down, 2. arch,  3. move a bit to the right, 4.arch, 5. move down to the end 
    path.attr("d",  "M"  + startX + " " + startY +
                    " V" + (startY + delta) +
                    " A" + delta + " " +  delta + " 0 0 " + arc1 + " " + (startX + delta*signum(deltaX)) + " " + (startY + 2*delta) +
                    " H" + (endX - delta*signum(deltaX)) + 
                    " A" + delta + " " +  delta + " 0 0 " + arc2 + " " + endX + " " + (startY + 3*delta) +
                    " V" + endY );
}

function connectElements(svg, path, startElem, endElem) {
    var svgContainer= $(".svgContainer");

    // if first element is lower than the second, swap!

    if(startElem.offset().top > endElem.offset().top){
        var temp = startElem;
        startElem = endElem;
        endElem = temp;
    }

    // get (top, left) corner coordinates of the svg container   
    var svgTop  = svgContainer.offset().top;
    var svgLeft = svgContainer.offset().left;

    // get (top, left) coordinates for the two elements
    var startCoord = startElem.offset();
    var endCoord   = endElem.offset();

    // calculate path's start (x,y)  coords
    // we want the x coordinate to visually result in the element's mid point
    var startX = startCoord.left + 0.5*startElem.outerWidth() - svgLeft;    // x = left offset + 0.5*width - svg's left offset
    var startY = startCoord.top  + startElem.outerHeight() - svgTop;        // y = top offset + height - svg's top offset

        // calculate path's end (x,y) coords
    var endX = endCoord.left + 0.5*endElem.outerWidth() - svgLeft;
    var endY = endCoord.top  - svgTop;

    // call function for drawing the path
    drawPath(svg, path, startX, startY, endX, endY);

}



function connectAll() {
    // connect all the paths you want!
    //connectElements($("#svg1"), $("#path1"), $("#teal"),   $("#orange"));
    //connectElements($("#svg1"), $("#path2"), $("#red"),    $("#purple"));
    //connectElements($("#svg1"), $("#path3"), $("#teal"),   $("#aqua")  );
    //connectElements($("#svg1"), $("#path4"), $("#green"),    $("#aqua")  ); 
    //connectElements($("#svg1"), $("#path5"), $("#purple"), $("#teal")  );
    //connectElements($("#svg1"), $("#path6"), $("#orange"), $("#green") );

}

$(document).ready(function() {
    // reset svg each time 
    $("#svg1").attr("height", "0");
    $("#svg1").attr("width", "0");
    connectAll();
    
  
});

$(window).resize(function () {
    // reset svg each time 
    $("#svg1").attr("height", "0");
    $("#svg1").attr("width", "0");
    connectAll();
});