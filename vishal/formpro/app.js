$(document).ready(function(){
    $("#submitButton").click(function(){
		if(!$("input[name='consent']").is(":checked")){
			alert("Please accept terms and conditions");
			return false;
		}
     var formData = $("form").serialize();

		$("#loadMe").modal({
		  backdrop: "static", 
		  keyboard: false, 
		  show: true 
		});	  
		var jqxhr = $.post( "https://shrishakthi.herokuapp.com/memberships", formData, function() {

		})
		  .done(function() {
			setTimeout(function() {
			  $("#loadMe").modal("hide");
			}, 500);
			alert( "Thanks, your information saved successfully" );

			
		  })
		  .fail(function() {
			$("#loadMe").modal("hide");		  
			alert( "Sorry, there is an error, please try again." );

          })
          
          $("#loadMe1").modal({
            backdrop: "static", 
            keyboard: false, 
            show: true 
          });
          
     
      });
      
     
	  
	$(".bor").click(function () {
		$("#imgFile").trigger('click');
	});	  
	  
  $("#imgFile").change(function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('imgUp');
          img.src = URL.createObjectURL(this.files[0]);
      }
  });	  
	  
   });







