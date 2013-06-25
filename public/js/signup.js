$(document).ready(function() {

	// school_group_add
	$('.school_group_add').click(function() {
		var html = $('.school_group').first().clone();
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// accomplishments_add
	$('.accomplishments_group_add').click(function() {
		var html = $('.accomplishments_group').first().clone();
		$(this).before(html);
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// experiences-add
	$('.experiences_group_add').click(function() {
		var html = $('.experiences_group').first().clone();
		$(this).before(html);
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// skill-add
	$('.skill_group_add').click(function() {
		var html = $('.skill_group').first().clone();
		$(this).before(html);
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// submit form
	// $('#userDataForm').submit(function() {
	// 	var userData = {};
	// 	userData.name_first 		= $('.name_first').val();
	// 	userData.name_last 			= $('.name_last').val();
	// 	userData.website			= $('.website').val();
	// 	userData.linked_in 			= $('.linked_in').val();
	// 	userData.twitter 			= $('.twitter').val();

	// 	userData.email 				= $('.email').val();
	// 	userData.phone				= $('.phone').val();
	// 	userData.street_address		= $('.street_address').val();
	// 	userData.zip_code			= $('.zip_code').val();
	// 	userData.city				= $('.city').val();
	// 	userData.state				= $('.state').val();

	// 	// counter and interate to get school(s)
	// 	userData.schools = [];
	// 	var school_groups 			= $('.school_group');
	// 	for (i = 0; i < school_groups.length; i++) {
	// 		school 		= {};
	// 		school.name = $(school_groups[i]).find('.schools_name').val();
	// 		userData.schools.push(school); 
	// 		}
	// 		return false;
	// 	});

	$('#userDataForm').submit(function() {
		var userData = {};

		userData.name_first 		= $('.name_first').val();
		userData.name_last 			= $('.name_last').val();
		userData.website			= $('.website').val();
		userData.linked_in 			= $('.linked_in').val();
		userData.twitter 			= $('.twitter').val();

		userData.email 				= $('.email').val();
		userData.phone				= $('.phone').val();
		userData.street_address		= $('.street_address').val();
		userData.zip_code			= $('.zip_code').val();
		userData.city				= $('.city').val();
		userData.state				= $('.state').val();

		userData.schools = [];
		var school_groups = $('.school_group');

		school_groups.each(function(index, item) {
			userData.schools.push({
				name 	: $(item).find('.schools_id').val(),
				major 	: $(item).find('.schools_major').val(),
				minor	: $(item).find('.schools_minor').val(),
			});
			
		});
				console.log(userData);
				return false;
		});
	});



