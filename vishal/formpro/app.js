var submit = $("#submitButton");
$(document).ready(function(){
    $(submit).click(function(){
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
     
	  });
   });

   window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('imgUp');
          img.src = URL.createObjectURL(this.files[0]);
      }
  });
});

function imageIsLoaded() { 
alert(this.src);  
}

window.addEventListener('load', function() {
  document.querySelector('input[id="file1"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img1 = document.getElementById('imgUp1');
          img1.src = URL.createObjectURL(this.files[0]);
      }
  });
});

function imageIsLoaded() { 
  alert(this.src);  
}