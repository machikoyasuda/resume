$(document).ready(function(){
	$.ajax('/api/resumes/51c209393b22bf56db000001', {
		complete: function(response){

			// experience
			//function experienceLoop() {
				var experience = response.responseJSON.experience; // set experience as hash
				for (i = 0; i < experience.length; i++) { // loop
					var experience_organization  = response.responseJSON.experience[i].organization; 
					var experience_project = response.responseJSON.experience[i].project;
					var experience_role = response.responseJSON.experience[i].role;
					var experience_start_month_year = response.responseJSON.experience[i].start_month_year;
					var experience_end_month_year = response.responseJSON.experience[i].end_month_year;
					var experience_location = response.responseJSON.experience[i].location;
					var experience_responsibilities  = response.responseJSON.experience[i].responsibilities;

				console.log(response.responseJSON.experience[i]);
				$('.timeline_experience').append("<div class='experience'>" + "<ul><li>" + experience_role + "</li><li>" + experience_responsibilities + "</li></ul>" + "</div>");

				}
			

			console.log(response.responseJSON.experience[0]);

			experienceLoop();
		}
	});
});