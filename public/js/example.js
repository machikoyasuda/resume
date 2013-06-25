/*
$(document).ready(function() {
	console.log('im alive');
	$.ajax('/api/resumes/51c32c21c5adbbf516000001', {
		complete : function(response) {
			var first = response.responseJSON.name_first;
			var last = response.responseJSON.name_last;
			var fullName = first + " " + last;
			$('#name').html(fullName);
		}
	});
});
*/

$(document).ready(function() {

	$('.education_block_add').click(function() {
		var html = $('.education_block').first().clone();
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(600);
		return false;
	});

	$('#userDataForm').submit(function() {
		var userData = {};
		userData.schools = [];
		var education_blocks = $('.education_block');
		for (i = 0; i < education_blocks.length; i++) {
			school = {};
			school.name = $(education_blocks[i]).find('.name').val();
			school.degree = $(education_blocks[i]).find('.degree').val();
			userData.schools.push(school);

			console.log(userData);
		}
		// education_blocks.each(function(index, item) {
		// 	userData.schools.push({
		// 		name 	: $(item).find('.name').val(),
		// 		degree 	: $(item).find('.degree').val()
		// 	});
		// 	console.log(userData);
		// });
		return false;
	});

});
























