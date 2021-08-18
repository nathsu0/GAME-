
$(document).ready(function() {
    $(function(){
      
      $('#popup1').css("visibility", "visible"); 
       $('#popup1').css("opacity", 1); 
      
       });
  
  $( ".close" ).click(function() {
    
       $('#popup1').css("visibility", "hidden"); 
       $('#popup1').css("opacity", 0);
    });
});