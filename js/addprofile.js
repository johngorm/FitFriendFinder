
// // Chosen CSS
//     var config = {
//       '.chosen-select'           : {},
//       '.chosen-select-deselect'  : {allow_single_deselect:true},
//       '.chosen-select-no-single' : {disable_search_threshold:10},
//       '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
//       '.chosen-select-width'     : {width:"95%"}
//     }
//     for (var selector in config) {
//       $(selector).chosen(config[selector]);
//     }

   

    Capture the form inputs
    $("#submit").on("click", function(event) {
      event.preventDefault();

      // Form validation
      function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".chosen-select").each(function() {

          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }

      	if ($("#running").checked) {
      		$.post("/api/friends", function(res,req){
      			running:req.body.running
      		})
      	}


		// If all required fields are filled
		if (validateForm() == true)
		{
			//Create an object for the user's data
	    	var userData = {
	    		username:$("#username").val(),
	    		age:$("#age").val(),
	    		height:$("#height").val(),
	    		weight:$("#weight").val(),
	    		intensity: $("#intensity").val(),
                frequency: $("#frequency").val(),
                goal: $("#goal").val(),
                perception: $('#perception').val(),
                //capture checkbox values
                activity: $('#activity').val()
	    	}

	    	// Grab the URL of the website
	    	var currentURL = window.location.origin;
	    	// AJAX post the data to the friends API. 
	    	$.post(currentURL + "/api/friends", userData, function(data){
	    		// Grab the result from the AJAX post so that the best match's info appears
	    		$("#matchUsername").text(data.username);
	    		$("#matchAge").text(data.age);
				$("#matchHeight").text(data.height);
				$("#matchWeight").text(data.weight);
	    		$('#matchIntensity').text(data.intensity);
                $('#matchFrequency').text(data.frequency);
                $('#matchGoal').text(data.goal);
                $('#matchPerception').text(data.perception);
	    	});
	    alert("Headed to profile page!");
	   
		}
		else
		{
			alert("Please fill out all fields before submitting!");
		}
    	
    	return false;

    	
    });

