$(document).ready(() => {
	$('#submit').click(() => {
		var url = $(location).attr('href');
		console.log(url);
		console.log($('input[name="name"]').val());

		$.get(url+'?name='+$('input[name="name"]').val(), function(res){
		    //$('#output').html(""); //reset div content for new GOT House

		    // for(var i=0;i<res[0].titles.length;i++){

		   	// }
		   	
		   	//$('#output').append(code);
		}, "json");
	})
})