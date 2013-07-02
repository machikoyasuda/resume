function formatMY(month_year) {
	var month 	= ' ';
	var year 	= ' ';
	var formatMY= ' ';
	formatMY 	= String(parseInt(month_year));
	if (formatMY.length < 4) {
		formatMY= '0' + formatMY;
	}
	month 		= formatMY.substring(0,2);
	year 		= formatMY.substring(2,4);
	formatMY	= month + " / 20" + year;
	return formatMY;
}


$(document).ready(function(){
	$('section').css('display', 'none');
	$('section').hide().fadeIn(1000).slideDown(1000);

	$.ajax('/api/resumes/51ccc3273b22bf5115000005', {
		// send ajax request to get data from /api/resumes/id
		complete: function(response){ // when the request is complete:
			// fullName
			var first 		= response.responseJSON.name_first;
			var last 		= response.responseJSON.name_last;
			var fullName	= first + " " + last;

			// contact_info
			var website 	= response.responseJSON.website;
			var linked_in 	= response.responseJSON.linked_in;
			var twitter 	= response.responseJSON.twitter;
			var email 		= response.responseJSON.contact_info.email;

			// street_address
			var phone 		= response.responseJSON.contact_info.phone;
			var street 		= response.responseJSON.contact_info.street_address.street;
			var zip_code 	= response.responseJSON.contact_info.street_address.zip_code;
			var city 		= response.responseJSON.contact_info.street_address.city;
			var state 		= response.responseJSON.contact_info.street_address.state;
			var street_address = street + ' ' + city + ' ' + state + ' ' + zip_code;

			$('.name').html(fullName);
			$('.website').html(website);
			$('.address').html(street_address);
			$('.email').html(email);
			$('.twitter').html(twitter);

			schoolLoop(); 
			accomplishmentsLoop();
			experienceLoop();
			skillsLoop();

			// start schools
			function schoolLoop() {
				var schools = response.responseJSON.schools; // set schools as hash
				for (i = 0; i < schools.length; i++) { // loop
					var schools_name 	= response.responseJSON.schools[i].name;
					var schools_degree 	= response.responseJSON.schools[i].degree;
					var schools_major 	= response.responseJSON.schools[i].major;
					var schools_minor 	= response.responseJSON.schools[i].minor;
					var schools_end_month_year = response.responseJSON.schools[i].end_month_year;
					var schools_month_year= formatMY(schools_end_month_year);

					// console.log(response.responseJSON.schools[i].degree); // verify in console
					// console.log(schools_degree);
					$('.timeline_schools').append("<div class='schools well well-small' data-content='" + schools_month_year + "'>" + "<h5>" + schools_degree + " @ " + schools_name + "</h5>" + "<hr><p>Major: " + schools_major + "</p></div>");
				}
			};
			// end schools

			// start accomplishments
			function accomplishmentsLoop() {
				var accomplishments = response.responseJSON.accomplishments; // set accomplishments as hash
				for (i = 0; i < accomplishments.length; i++) { // loop through each accomplishment to make variables out of values
					var accomplishments_title 			= response.responseJSON.accomplishments[i].title;
					var accomplishments_descriptions	= response.responseJSON.accomplishments[i].description; 
					var accomplishments_month_year_o 	= response.responseJSON.accomplishments[i].month_year;
					var accomplishments_month_year 		= formatMY(accomplishments_month_year_o);

					$('.timeline_accomplishments').append("<div class='accomplishments well well-small' data-content='" + accomplishments_month_year + "'>" + "<h5>" + accomplishments_title + "</h5><hr><p>" + accomplishments_descriptions + "</p></div>");
				}
			};
			// end accomplishments

			// start skills
			function skillsLoop() {
				var skills = response.responseJSON.skills;
				for (i = 0; i < skills.length; i++) {
					var skills_title				= response.responseJSON.skills[i].title;
					var skills_level				= response.responseJSON.skills[i].level;

					console.log(skills[i]);
					console.log(skills_title);
					console.log(skills_level);
					// console.log(skills[i].skills_title);
					// console.log(skills[i].skills_level);

					$('.timeline_skills').append("<div class='skills'><h4>" + skills_title + " -   " + skills_level + "/5" + "</h4></div>");

					$('.timeline_skills').append('<img src="//chart.googleapis.com/chart?chxr=0,0,5&chxs=0,FFFFFF,11.5,0,_,FFFFFF&chxt=x&chbh=10,0,0&chs=426x40&cht=bhs&chco=3E02F0&chds=0,5&chd=t:' + skills_level+ '&chma=0,5" width="426" height="40" alt="" />');
				}
			};

			// end skills

			// start experience
			function experienceLoop() {
				var experience = response.responseJSON.experiences;  window.experience = response.responseJSON.experiences;

				for (i = 0; i < experience.length; i++) { 
					var experience_organization  	= response.responseJSON.experiences[i].organization; 
					var experience_project 			= response.responseJSON.experiences[i].project;
					var experience_role = response.responseJSON.experiences[i].role;
					var experience_start_month_year = response.responseJSON.experiences[i].start_month_year;
					var experience_end_month_year 	= response.responseJSON.experiences[i].end_month_year;
					var experience_location = response.responseJSON.experiences[i].location;
					var experience_responsibilities  = response.responseJSON.experiences[i].responsibilities;
					var experience_month_year 		= formatMY(experience_end_month_year);
				
					$(".timeline_experience").append("<div class='experience well well-small' data-content='" + experience_month_year + "'>" + "<h5>" + experience_role + " @ " + experience_organization + "</h5>" + "<hr><ul style='margin-top: 30px; list-style-type: square;'></ul>");
					
					console.log(response.responseJSON.experiences[i].responsibilities);
					console.log(experience[i]);
					console.log(experience[i].responsibilities);
					// console.log(experience[i].responsibilities.length); returns 4
					var i2=0;
					$(experience[i].responsibilities).each(function(index, item){
						//alert(index + " : " + item);
						//alert(experience[0].responsibilities[3].length); returns 0
						//console.log(experience[i+1].responsibilities[])

						if(experience[i].responsibilities[i2].length = 0){
							$(experience[i].responsibilities[i2]).remove();
						}
						else {
							$(".experience").find("ul").append("<li><p>" + item + "</p></li>");
						}
						return false;
					});
				} 
			}; 
			// end experience 
		}
	});
});


			
