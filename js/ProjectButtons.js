/* 
Toggles info
UGLY COPY AND PASTE FOR NOW!
LEARN MORE JQuery
-Myself 02/28/2017
*/

$(document).ready(function(){
  $("#hidden-content1").on("hide.bs.collapse", function(){
    $("#readBtn1").html('Read more <span class="glyphicon glyphicon-chevron-down">');
  });
  $("#hidden-content1").on("show.bs.collapse", function(){
    $("#readBtn1").html('Less <span class="glyphicon glyphicon-chevron-up">');
  });
  
  $("#hidden-content2").on("hide.bs.collapse", function(){
    $("#readBtn2").html('Read more <span class="glyphicon glyphicon-chevron-down">');
  });
  $("#hidden-content2").on("show.bs.collapse", function(){
    $("#readBtn2").html('Less <span class="glyphicon glyphicon-chevron-up">');
  });
  
  $("#hidden-content3").on("hide.bs.collapse", function(){
    $("#readBtn3").html('Read more <span class="glyphicon glyphicon-chevron-down">');
  });
  $("#hidden-content3").on("show.bs.collapse", function(){
    $("#readBtn3").html('Less <span class="glyphicon glyphicon-chevron-up">');
  });
  
  $("#hidden-content4").on("hide.bs.collapse", function(){
    $("#readBtn4").html('Read more <span class="glyphicon glyphicon-chevron-down">');
  });
  $("#hidden-content4").on("show.bs.collapse", function(){
    $("#readBtn4").html('Less <span class="glyphicon glyphicon-chevron-up">');
  });
  
});
