function compare2(){
  $("#due").addClass("dx");
$("#due").removeClass("sx");}

function compare3(){
  $("#tre").addClass("dx");
$("#tre").removeClass("sx");}

function compare4(){
  $("#quattro").addClass("dx");
$("#quattro").removeClass("sx");}

function compare6(){
  $("#sei").addClass("dx");
$("#sei").removeClass("sx");}

function compare7(){
  $("#sette").addClass("dx");
$("#sette").removeClass("sx");}

function compare8(){
  $("#otto").addClass("dx");
$("#otto").removeClass("sx");}

function compare9(){
  $("#nove").addClass("dx");
$("#nove").removeClass("sx");}

function compare10(){
  $("#dieci").addClass("dx");
$("#dieci").removeClass("sx");}


function compare(){
  if ($("#nove").hasClass("dx"))
  compare10();
  else if ($("#otto").hasClass("dx"))
  compare9();
  else if ($("#sette").hasClass("dx"))
  compare8();
  else if ($("#sei").hasClass("dx"))
  compare7();
  else if ($("#quattro").hasClass("dx"))
  compare6();
  else if ($("#tre").hasClass("dx"))
  compare4();
  else   if ($("#due").hasClass("dx"))
  compare3();
  else compare2();}

$("#freccia_dx").click(compare);





function scompare2(){
  $("#due").addClass("sx");
  $("#due").removeClass("dx");}

  function scompare3(){
    $("#tre").addClass("sx");
  $("#tre").removeClass("dx");}

  function scompare4(){
    $("#quattro").addClass("sx");
  $("#quattro").removeClass("dx");}

  function scompare6(){
    $("#sei").addClass("sx");
  $("#sei").removeClass("dx");}

  function scompare7(){
    $("#sette").addClass("sx");
  $("#sette").removeClass("dx");}

  function scompare8(){
    $("#otto").addClass("sx");
  $("#otto").removeClass("dx");}

  function scompare9(){
    $("#nove").addClass("sx");
  $("#nove").removeClass("dx");}

  function scompare10(){
    $("#dieci").addClass("sx");
  $("#dieci").removeClass("dx");}


    function scompare(){
      if ($("#dieci").hasClass("dx"))
      scompare10();
      else if ($("#nove").hasClass("dx"))
      scompare9();
      else if ($("#otto").hasClass("dx"))
      scompare8();
      else if ($("#sette").hasClass("dx"))
      scompare7();
      else if ($("#sei").hasClass("dx"))
      scompare6();
      else if ($("#quattro").hasClass("dx"))
      scompare4();
      else  if ($("#tre").hasClass("dx"))
      scompare3();
      else scompare2();}


$("#freccia_sx").click(scompare);
