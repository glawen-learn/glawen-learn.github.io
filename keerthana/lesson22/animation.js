$(document).ready(function(){
	
$('ul').on('click','li.title',function(){
$(this).siblings('li.fields').slideToggle(200);


});
$("#input").mouseleave(function(){
	alert("please fill all the fields with proper information");
});


$(".req").focus(function(){
    $(this).css("background-color", "pink");
  });
	 $(".req").blur(function(){
    $(this).css("background-color", "lime");
  });	
 
 
  
 
  });
  
  
