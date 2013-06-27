$(document).ready(function(){
	$.ajax('/api/resumes/51c209393b22bf56db000001', {
		complete: function(response){
			// fullName
			var first = response.responseJSON.name_first;
			var last = response.responseJSON.name_last;
			var fullName = first + " " + last;

			// contact_info
			var website = response.responseJSON.website;
			var linked_in = response.responseJSON.linked_in;
			var twitter = response.responseJSON.twitter;
			var email = response.responseJSON.contact_info.email;

			// street_address
			var phone = response.responseJSON.contact_info.phone;
			var street = response.responseJSON.contact_info.street_address.street;
			var zip_code = response.responseJSON.contact_info.street_address.zip_code;
			var city = response.responseJSON.contact_info.street_address.city;
			var state = response.responseJSON.contact_info.street_address.state;
			var street_address = street + ' ' + city + ' ' + state + ' ' + zip_code;

			$('.name').html(fullName);
			$('.website').html(website);
			$('.address').html(street_address);
			$('.email').html(email);
			$('.twitter').html(twitter);

			schoolLoop(); 
			accomplishmentsLoop();
			experienceLoop();

			// start schools
			function schoolLoop() {
				var schools = response.responseJSON.schools; // set schools as hash
				for (i = 0; i < schools.length; i++) { // loop
					var schools_name = response.responseJSON.schools[i].name;
					var schools_degree = response.responseJSON.schools[i].degree;
					var schools_major = response.responseJSON.schools[i].major;
					var schools_minor = response.responseJSON.schools[i].minor;
					var schools_start_month_year = response.responseJSON.schools[i].start_month_year;

					// console.log(response.responseJSON.schools[i].degree); // verify in console
					// console.log(schools_degree);

					$('.timeline_schools').append("<div class='schools'>" + "<h5>" + schools_name + "</h5>" + "</hr>" + "<hr>" + "<ul><li>" + schools_degree + "</li><li>" + schools_major + "</li></ul>" + "</div>");
				}
			};
			// end schools

			// start accomplishments
			function accomplishmentsLoop() {
				var accomplishments = response.responseJSON.accomplishments; // set accomplishments as hash
				for (i = 0; i < accomplishments.length; i++) { // loop
					var accomplishments_title = response.responseJSON.accomplishments[i].title;
					var accomplishments_descriptions = response.responseJSON.accomplishments[i].description; 
					var accomplishments_month_year = response.responseJSON.accomplishments[i].month_year; 

					//console.log(response.responseJSON.accomplishments[i]);
					$('.timeline_accomplishments').append("<div class='accomplishments'>" + "<h5>" + accomplishments_title + "</h5>" + "<hr>" + accomplishments_descriptions + "</div>");

				}
			};
			// end accomplishments

			// start experience
			function experienceLoop() {
				var experience = response.responseJSON.experience; // set experience as hash
				for (i = 0; i < experience.length; i++) { // loop
					var experience_organization  = response.responseJSON.experience[i].organization; 
					var experience_project = response.responseJSON.experience[i].project;
					var experience_role = response.responseJSON.experience[i].role;
					var experience_start_month_year = response.responseJSON.experience[i].start_month_year;
					var experience_end_month_year = response.responseJSON.experience[i].end_month_year;
					var experience_location = response.responseJSON.experience[i].location;
					var experience_responsibilities  = response.responseJSON.experience[i].responsibilities;

				// console.log(response.responseJSON.experience[i]);
				$('.timeline_experience').append("<div class='experience'>" + "<h5>" + experience_role + " @ " + experience_organization + "</h5>" +  "<hr>" + experience_responsibilities + "</div>");
				} 
			}; 
			// end experience 
		}
	});
});


			
