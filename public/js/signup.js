$(document).ready(function() {

	// on signup.html, create span hrefs with classes "school_group_add", "accomplishments_add", "experiences_add", "responsibilities_add"
	// clone the html of the first instance of ".school_group" div and set that variable to html
	// on page-load, hide the block by setting CSS to display: none
	// clear any typed values by finding the input elements within this div, set input values to ' '
	// when this gets clicked, add html before the link's parent, the div
	// add these effects: fade in 600 ms, slide down 400 ms
	// return false; to prevent any side effects from the link click action

	// school_group_add
	$('.school_group_add').click(function() { 
		var html = $('.school_group').first().clone();  
		html.css('display', 'none'); 
		html.find('input').val(''); 
		$(this).before(html); 
		html.fadeIn(600); 
		html.slideDown(400); 
		return false;

	});

	// accomplishments_add
	$('.accomplishments_group_add').click(function() {
		var html = $('.accomplishments_group').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// experiences-add
	$('.experiences_group_add').click(function() {
		var html = $('.experiences_group').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// experiences responsibilities-add
	$('.responsibilities_add').click(function() { 
		var html = $('.responsibilities_add_group').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// skill-add
	$('.skill_group_add').click(function() {
		var html = $('.skill_group').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// pull #userDataForm submit values

	$('#userDataForm').submit(function() {
		var userData = {}; // create new object named userData

		// contact_info - create array contact_info in userData
		userData.contact_info 							= [];
		userData.contact_info.email 					= $('.email').val();
		userData.contact_info.phone						= $('.phone').val();

		// contact_info.street_address - create array in contact_info, street_address
		userData.contact_info.street_address 			= [];
		userData.contact_info.street_address.city		= $('.city').val();
		userData.contact_info.street_address.state		= $('.state').val();
		userData.contact_info.street_address.street 	= $('.street').val();
		userData.contact_info.street_address.zip_code	= $('.zip_code').val();

		// twitter, website, linkedin
		userData.name_first 							= $('.name_first').val();
		userData.name_last 								= $('.name_last').val();
		userData.website								= $('.website').val();
		userData.linked_in 								= $('.linked_in').val();
		userData.twitter 								= $('.twitter').val();

		// school_groups - create array to store multiple schools
		userData.schools = []; 

		var school_groups = $('.school_group'); // select all schools, get each .class

		// for each class, create object with keys and values:
		school_groups.each(function(index, item) {
			var end 			= $(item).find('.end_month_year').val();
			var end_month_year	= end.slice(5,7) + end.slice(2,4); // slice month-year to get into MMYY format
			userData.schools.push({
				name 			: $(item).find('.schools_name').val(),
				degree			: $(item).find('.schools_degree').val(),
				major 			: $(item).find('.schools_major').val(),
				minor			: $(item).find('.schools_minor').val(),
				end_month_year	: end_month_year
			}); // end .push loop
			
		}); // end .each function

		// experiences_groups:
		userData.experiences 	= []; 

		var experience_groups 	= $('.experiences_group'); // get each .class

		experience_groups.each(function(index, item) {
			var exp_start 		= $(item).find('.start_month_year').val();
			var exp_end			= $(item).find('.end_month_year').val();
			var start_month_year= exp_start.slice(5,7) + exp_start.slice(2,4);
			var end_month_year 	= exp_end.slice(5,7) + exp_end.slice(2,4);
			var responsibilities= [];
			$(item).find('.responsibilities').each(function(index2, item2){
				responsibilities.push($(item2).val());
			});
			userData.experiences.push({
				organization	: $(item).find('.organization').val(),
				role			: $(item).find('.role').val(), 
				responsibilities: responsibilities,
				start_month_year: start_month_year,
				end_month_year	: end_month_year
			});
		});

		// skills
		userData.skills = []; 

		var skill_groups = $('.skill_group'); // get each .class

		// for each class, create array
		skill_groups.each(function(index, item) {
			userData.skills.push({
				title 			: $(item).find('.title').val(),
				level 			: $(item).find('.level').val(),
			}); // end .push loop
			
		}); // end .each function

		// projects & accomplishments
		userData.accomplishments = [];

		var accomplishments_groups= $('.accomplishments_group');

		accomplishments_groups.each(function(index, item) {
			var date				= $(item).find('.month_year').val();
			var month_year 			= date.slice(5,7) + date.slice(2,4);
			userData.accomplishments.push({
				title			: $(item).find('.title').val(),
				description		: $(item).find('.description').val(),
				month_year		: month_year
			});
		});

		console.log(userData);
		return false;
	});
});



