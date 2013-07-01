$(document).ready(function(){
	$.ajax('/api/resumes', {						// access /api/resumes with AJAX
		complete: function(response){				// "jQuery callback" - when request is complete, run: 
			var resume = response.responseJSON[0];	// attach id as data-id to .class element
			console.log(resume.id);
			$('.name').attr('data-id', resume.id);
		}
	});

	$('.delete').submit(function() {				// on .delete button submit, run:
		var id = $('.name').data('id');				// find .data('id') from .name
		console.log(id);							// clog test
		$.ajax({
			url : '/api/resumes'+id,				// go to /api/resumes/id URL
			type: 'DELETE'							// delete it
		});
		window.location = window.location;			// reload the page
	});
});