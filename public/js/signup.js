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

		// define keys and find class for values
		userData.name_first 		= $('.name_first').val();
		userData.name_last 			= $('.name_last').val();
		userData.website			= $('.website').val();
		userData.linked_in 			= $('.linked_in').val();
		userData.twitter 			= $('.twitter').val();

		userData.email 				= $('.email').val();
		userData.phone				= $('.phone').val();
		userData.street_address		= $('.street').val();
		userData.zip_code			= $('.zip_code').val();
		userData.city				= $('.city').val();
		userData.state				= $('.state').val();

		// school_groups
		userData.schools = []; 

		var school_groups = $('.school_group'); // get each .class

		// for each class, create array:
		school_groups.each(function(index, item) {
			userData.schools.push({
				name 			: $(item).find('.schools_id').val(),
				major 			: $(item).find('.schools_major').val(),
				minor			: $(item).find('.schools_minor').val(),
				end_month_year	: $(item).find('.end_month_year').val(),
			}); // end .push loop
			
		}); // end .each function

		// experiences_groups:
		userData.experiences = []; 

		var experience_groups = $('.experiences_group'); // get each .class

		experience_groups.each(function(index, item) {
			userData.experiences.push({
				organization	: $(item).find('.organization').val(),
				role			: $(item).find('.role').val(), 
				responsibilities: $(item).find('.responsibilities').val(),
				start_month_year: $(item).find('.start_month_year').val(),
				end_month_year: $(item).find('.end_month_year').val(),
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

		var accomplishments_groups = $('.accomplishments_group');

		accomplishments_groups.each(function(index, item) {
			userData.accomplishments.push({
				title			: $(item).find('.title').val(),
				description		: $(item).find('.description').val(),
				month_year		: $(item).find('.month_year').val(),
			});
		});

		console.log(userData);
		return false;
	});
});



