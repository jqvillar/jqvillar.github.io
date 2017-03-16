/* 
Toggles info
Improved on 03/15/2017
*/

$(document).ready(function(){
  
  $(".readBtn").click(function(){
      //change button content
      if($(this).parent().find('.hidden-content').is(":visible")){
          $(this).html('Read more <span class="glyphicon glyphicon-chevron-down">');
      }
      else{   
        $(this).html('Less <span class="glyphicon glyphicon-chevron-up">');
      }
      //slide toggle
      $(this).parent().find('.hidden-content').slideToggle(); 
  });
  
});
