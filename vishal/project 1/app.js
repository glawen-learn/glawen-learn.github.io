
var FirstNext , next,  prev//buttons

/// next buttons

$(".FirstNext").click(function(){
$(".slide-page").css("margin-left","-25%");

});
$(".secondNext").click(function(){
    $(".slide-page").css("margin-left","-50%");
 });
 
 $(".thirdNext").click(function(){
    $(".slide-page").css("margin-left","-75%");
 });
 //prev buttons
 $(".secondPrev ").click(function(){
    $(".slide-page").css("margin-left","-0%");
 });
 $(".thirdPrev").click(function(){
    $(".slide-page").css("margin-left","-25%");
 });
 $(".fourthPrev").click(function(){
    $(".slide-page").css("margin-left","-50%");
 });
//  submit button
 $(".submit").click(function(){
     alert("Thank you form Submitted");
 });

    

 


