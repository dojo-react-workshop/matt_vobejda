'use strict'

$(document).ready( function() {
	$('.form1').on('submit', function(event) {
		event.preventDefault();  //blocks the form from being sent to the server...
		//console.log('we blocked the form...')
		const dataForServer = $(this).serialize(); //data for server - capture the values that were sent from the form
		//use ajax to send data to the server (ajax requst) - comparable to $.get (used that with Ray, Charlie doesn't use it)
		console.log("Add dataForServer b4 AJAX call: " + dataForServer);
		$.ajax({
            url: '/add', //"your url with method that accpects the data",
            method: "POST",
            data: dataForServer,
            success: function (responseFromServer) {
            	console.log(responseFromServer);
            	const htmlTags = `
					<div dname="${responseFromServer.name}" id="${responseFromServer.id}" class="nameid${responseFromServer.id}"><p>${responseFromServer.name} <img name="${responseFromServer.id}" src="./../images/delete.png" alt="delete icon"></p></div>
					`;
				//console.log(htmlTags);
            	$('.namelist').append(htmlTags);
            }
        });
        $("input[type=text], textarea").val(""); //clears the input field on submit
	})

	$('.namelist').on('click', 'img', function(event) {
		var obj = {ID: $(this).attr('name')};
		console.log("Delete dataForServer(obj) b4 AJAX call: " + obj);
		$.ajax({
            url: '/delete', //"your url with method that accpects the data",
            method: "POST",
            data: obj,
            success: function (responseFromServer) {
            	console.log('I made it here!');
            	console.log(responseFromServer);
            }
        });
        $(this).parent().remove();
	})
    //click on, click off, make sure can't edit all the lines after you click on one...
    $('.namelist').on('click', 'p', function(event) {

        var name = $(this).parent().attr('dname');
        var id = $(this).parent().attr('id');

        console.log("Edit 1 name: " + name);
        console.log("Edit 1 id: " + id);
 
        console.log("Edit 1st Jquery Block - I made it!");
        $(this).parent().html(
            `<form class="form2">
                <input type="text" name="name" placeholder="${name}">
                <input type="hidden" name="id" value="${id}">
                <input type="image" id="${id}" name="submit" value="Add Name" src="./../images/plus.jpg" alt="plus icon" class="submit_img">
            </form>`);
        $('.namelist').off('click', 'p');

    })
    $('.namelist').on('submit','.form2', function(event) {
        //$('.namelist').on('click');
        event.preventDefault();  //blocks the form from being sent to the server...
        //console.log('we blocked the form...')
        console.log("Start of 2nd Edit JQuery Block");
        console.log($(this));
        const dataForServer = $(this).serialize(); //data for server - capture the values that were sent from the form
        //use ajax to send data to the server (ajax requst) - comparable to $.get (used that with Ray, Charlie doesn't use it)
        
        console.log("Edit dataForServer b4 AJAX call: " + dataForServer);
        $.ajax({
            url: '/edit', //"your url with method that accpects the data",
            method: "POST",
            data: dataForServer,
            success: function (responseFromServer) {
                console.log('ajax Success: I made it here!');
                console.log('ajax responseFromServer: ' + responseFromServer);
                let htmlTags ='';
                for(var i=0;i<responseFromServer.length;i++){
                    htmlTags += `
                        <div dname="${responseFromServer[i].name}" id="${responseFromServer[i].id}" class="nameid${responseFromServer[i].id}"><p>${responseFromServer[i].name} <img name="${responseFromServer[i].id}" src="./../images/delete.png" alt="delete icon"></p></div>
                        `;                    
                }

                console.log(htmlTags);
                $('.namelist').html(htmlTags);
            }
        });
        $('.namelist').on('click', 'p');
        // $('.namelist').on('click', 'img', function(event) {
        //     var obj = {ID: $(this).attr('name')};
        //     console.log("Delete dataForServer(obj) b4 AJAX call: " + obj);
        //     $.ajax({
        //         url: '/delete', //"your url with method that accpects the data",
        //         method: "POST",
        //         data: obj,
        //         success: function (responseFromServer) {
        //             console.log('I made it here!');
        //             console.log(responseFromServer);
        //         }
        //     });
        //     $(this).parent().remove();
        // })
        //$('.namelist').on('click');
        //Kind of works, adding this subblock above fixed some issues, but now the
        //edit doesn't work anymore, so find a better way to do this...        
    })
})


