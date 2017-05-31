'use strict'

const http = axios; //if you want to change the name to make it more dscriptive...

$(document).ready( function() {
	$('form').on('submit', function(event) {
		event.preventDefault();  //blocks the form from being sent to the server...
		//console.log('we blocked the form...')
		//console.log($(this).serialize()); //data for server - capture the values that were sent from the form
		const dataForServer = $(this).serialize();
		console.log(dataForServer);
		//use ajax to send data to the server (ajax requst) - comparable to $.get (used that with Ray, Charlie doesn't use it)
		
		//benefit of using a promise allows us to capture control back
		//go get a service to help us with this... (axios library, used at NM in pockets now - grabbed from GitHub...)
		//we just added a CDN line to the index.ejs, could install it for node...
		
		// hhtp()	//structure of what we are doing...
		// 	.then(function(){

		// 	})
		// 	.catch(function(){

		// 	})

		http({  //fetch could be used here, but is new and has limited browser support now (no IE support)
            url: '/result', //"your url with method that accpects the data",
            method: 'post',
            data: dataForServer
		})
		.then(function(responseFromServer){
			console.log(responseFromServer.data);
			const data = responseFromServer.data; //object descrcurturing ES6 feature
        	const htmlTags = `
 				<p><h3>Name: </h3><h4>${data.your_name}</h4></p>
 				<h3>Dojo Location: ${data.dojo_loc}</h3>
 				<h3>Favorite Language: ${data.fav_lang}</h3>
 				<h3>Comment: ${data.comment}</h3>
 				`;
        	$('.name_content').html(htmlTags);			
		})
		.catch(function(err){
			$('.name_content').prepend("<p class='error'>There was a problem</p>");
		})

	// 	$.ajax({
 //            url: '/result', //"your url with method that accpects the data",
 //            method: 'post',
 //            data: dataForServer,
 //            success: function (responseFromServer) {
 //            	//console.log(responseFromServer);
 //            	const htmlTags = `
	// 				<p><h3>Name: </h3><h4>${responseFromServer.your_name}</h4></p>
	// 				<h3>Dojo Location: ${responseFromServer.dojo_loc}</h3>
	// 				<h3>Favorite Language: ${responseFromServer.fav_lang}</h3>
	// 				<h3>Comment: ${responseFromServer.comment}</h3>
	// 				`;
	// 			//console.log(htmlTags);
 //            	$('.name_content').html(htmlTags);
 //            }
 //        });
	 })
})