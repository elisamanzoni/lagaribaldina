function compare_a_2(){
  $("#a_2").addClass("dx");
$("#a_2").removeClass("sx");
$("#b_2").addClass("dx");
$("#b_2").removeClass("sx");}

function compare_a_3(){
  $("#a_3").addClass("dx");
$("#a_3").removeClass("sx");
$("#b_3").addClass("dx");
$("#b_3").removeClass("sx");}

function compare_a_4(){
  $("#a_4").addClass("dx");
$("#a_4").removeClass("sx");
$("#b_4").addClass("dx");
$("#b_4").removeClass("sx");}

function compare_a_5(){
  $("#a_5").addClass("dx");
$("#a_5").removeClass("sx");
$("#b_5").addClass("dx");
$("#b_5").removeClass("sx");}





function compare(){
 if ($("#a_4").hasClass("dx"))
  compare_a_5();
  else if ($("#a_3").hasClass("dx"))
  compare_a_4();
  else   if ($("#a_2").hasClass("dx"))
  compare_a_3();
  else compare_a_2();}

$("#freccia_dx").click(compare);





function scompare_a_2(){
  $("#a_2").addClass("sx");
  $("#a_2").removeClass("dx");
  $("#b_2").addClass("sx");
  $("#b_2").removeClass("dx");}

  function scompare_a_3(){
    $("#a_3").addClass("sx");
  $("#a_3").removeClass("dx");
  $("#b_3").addClass("sx");
$("#b_3").removeClass("dx");}

  function scompare_a_4(){
    $("#a_4").addClass("sx");
  $("#a_4").removeClass("dx");
  $("#b_4").addClass("sx");
$("#b_4").removeClass("dx");}

  function scompare_a_5(){
    $("#a_5").addClass("sx");
  $("#a_5").removeClass("dx");
  $("#b_5").addClass("sx");
$("#b_5").removeClass("dx");}



    function scompare(){
     if ($("#a_5").hasClass("dx"))
      scompare_a_5();
      else if ($("#a_4").hasClass("dx"))
      scompare_a_4();
      else  if ($("#a_3").hasClass("dx"))
      scompare_a_3();
      else scompare_a_2();}


$("#freccia_sx").click(scompare);






















function compare_c_2(){
  $("#c_2").addClass("dx");
$("#c_2").removeClass("sx");
$("#d_2").addClass("dx");
$("#d_2").removeClass("sx");}

function compare_c_3(){
  $("#c_3").addClass("dx");
$("#c_3").removeClass("sx");
$("#d_3").addClass("dx");
$("#d_3").removeClass("sx");}

function compare_c_4(){
  $("#c_4").addClass("dx");
$("#c_4").removeClass("sx");
$("#d_4").addClass("dx");
$("#d_4").removeClass("sx");}







function compare2(){
if ($("#c_3").hasClass("dx"))
  compare_c_4();
  else   if ($("#c_2").hasClass("dx"))
  compare_c_3();
  else compare_c_2();}

$("#freccia_dx2").click(compare2);





function scompare_c_2(){
  $("#c_2").addClass("sx");
  $("#c_2").removeClass("dx");
  $("#d_2").addClass("sx");
  $("#d_2").removeClass("dx");}

  function scompare_c_3(){
    $("#c_3").addClass("sx");
  $("#c_3").removeClass("dx");
  $("#d_3").addClass("sx");
$("#d_3").removeClass("dx");}

  function scompare_c_4(){
    $("#c_4").addClass("sx");
  $("#c_4").removeClass("dx");
  $("#d_4").addClass("sx");
$("#d_4").removeClass("dx");}





    function scompare2(){
     if ($("#c_4").hasClass("dx"))
      scompare_c_4();
      else  if ($("#c_3").hasClass("dx"))
      scompare_c_3();
      else scompare_c_2();}


$("#freccia_sx2").click(scompare2);
