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
