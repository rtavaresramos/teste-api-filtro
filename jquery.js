
$(document).ready(function(){
	
var $cities = $('#city')
var $courses = $('#course')

$.ajax({
	type: 'GET',
	url: 'https://testapi.io/api/redealumni/scholarships',
	success: function(data){
		
		$.each(data, function(i, data){
			$cities.append('<option>'+ data.campus.city +' </option>')
		
			$courses.append('<option>'+ data.course.name +' </option>')

		})
		
	

	}
})

});
