
$(document).ready(function(){
	
var $cities = $('#city')

$.ajax({
	type: 'GET',
	url: 'https://testapi.io/api/redealumni/scholarships',
	success: function(data){
		var myArray = []
		$.each(data, function(i, data) {
			myArray = data.campus.city

			return myArray
		})

		function removeDumplicateValue(myArray){ 
			var newArray = [];
		  
			$.each(myArray, function(key, value) {
			  var exists = false;
			  $.each(newArray, function(k, val2) {
				if(value.id == val2.id){ exists = true }; 
			  });
			  if(exists == false && value.id != "") { newArray.push(value); }
			});
		 
			return newArray;
		  }
		  var newArray = removeDumplicateValue(myArray)
		$.each(newArray, function(i, data){
			
			

			$cities.append('<option>'+ data +' </option>')
			
	
		})		
	}
})

});
