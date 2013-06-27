$(document).ready(function() {
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

	// pull #userDataForm submit
	$('#userDataForm').submit(function() {
		var userData = {}; // create new object named userData

		// contact_info
		userData.contact_info 							= [];
		userData.contact_info.email 					= $('.email').val();
		userData.contact_info.phone						= $('.phone').val();

		// contact_info.street_address
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

		// school_groups
		userData.schools = []; 

		var school_groups = $('.school_group'); // get each .class

		// for each class, create array:
		school_groups.each(function(index, item) {
			var end 			= $(item).find('.end_month_year').val();
			var end_month_year	= end.slice(5,7) + end.slice(2,4);
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

		// for each class, create array:
		skill_groups.each(function(index, item) {
			userData.skills.push({
				title 			: $(item).find('.title').val(),
				level 			: $(item).find('.level').val(),
			}); // end .push loop
			
		}); // end .each function

		// projects & accomplishments
		userData.accomplishments = [];

		var accomplishments_groups	= $('.accomplishments_group');

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



