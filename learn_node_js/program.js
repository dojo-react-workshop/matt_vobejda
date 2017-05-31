//problem 1
//console.log("HELLO WORLD");

//problem 2
// var sum = 0;
// for(var i=2;i<process.argv.length;i++){
// 	//console.log(process.argv[i]);
// 	sum+=Number(process.argv[i]);
// }
// console.log(sum)

//problem 3
// var fs = require('fs');

// var buf = fs.readFileSync(process.argv[2]) //returns a buffer object
// //console.log(process.argv[2]);
// var str = buf.toString();

// var arr = str.split('\n');
// var cnt = 0;
// for (var i=0;i<arr.length;i++){
// 	cnt++;
// }
// console.log(cnt-1);

//problem 4

// var fs = require('fs');

// fs.readFile(process.argv[2],'utf8',(err, data) => {
// 	//response.write(data);
// 	//console.log(data)
// 	var arr = data.split('\n');
// 	var cnt = 0;
// 	for (var i=0;i<arr.length;i++){
// 		cnt++;
// 	}
// 	console.log(cnt-1);
// })

//problem 5

// var fs = require('fs');
// var path = require('path');

// fs.readdir(process.argv[2],(err, list) => {

// 	var fileExt = '.'+process.argv[3]; //no .!
// 	//console.log(fileExt);
// 	//console.log(list);

// 	for (var i=0;i<list.length;i++){
// 		//console.log(fileExt);
// 		//console.log(path.extname(list[i]));
// 		if(fileExt === path.extname(list[i])){
// 			console.log(list[i]);
// 		}
// 		//console.log(path.extname(list[i]));
// 		//console.log(list[i]);
// 	}
// 	//console.log(cnt-1);
// })

//problem 6

// var filterDir = require('./module');

// filterDir(process.argv[2], process.argv[3], function(err,arr){
// 	if(err){
// 		console.log('There was an error...');
// 	}
// 	for(var i=0;i<arr.length;i++){
// 		console.log(arr[i]);
// 	}
// });

//problem 7

// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// http.get(process.argv[2],(response) => {
// 	response.setEncoding('utf8');
// 	response.on("data", function(data){
// 		console.log(data);
// 		// for(var i=0;i<data.length;i++){
// 		// 	console.log(data[i]);
// 		// }
// 	})
// })

//problem 8 - skip this one if it's challenging (deal w/ streams or pipe stuff, can skip this...)
//make sure get the last one done in this, he wants (problem 12)

// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// http.get(process.argv[2],(response) => {
// 	var str="";

// 	response.setEncoding('utf8');
// 	response.on("data", function(data){
// 		str=str+data;
// 		//console.log(data);
// 		//console.log(data);
// 		// for(var i=0;i<data.length;i++){
// 		// 	console.log(data[i]);
// 		// }
// 	})
// 	response.on("end", function(data){
		
// 		console.log(str.length);
// 		console.log(str);
// 	});
// 	//console.log(str);
// })

//problem 9

// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// http.get(process.argv[2],(response) => {
// 	var str1="";
// 	response.setEncoding('utf8');
// 	response.on("data", function(data1){
// 		str1=str1+data1;
// 	})
// 	response.on("end", function(data){
// 		console.log(str1);
// 	});
// 	http.get(process.argv[3],(response) => {
// 		var str2="";
// 		response.setEncoding('utf8');
// 		response.on("data", function(data2){
// 			str2=str2+data2;
// 		})
// 		response.on("end", function(data){
// 			console.log(str2);
// 		});
// 		http.get(process.argv[4],(response) => {
// 			var str3="";
// 			response.setEncoding('utf8');
// 			response.on("data", function(data3){
// 				str3=str3+data3;
// 			})
// 			response.on("end", function(data){
// 				console.log(str3);
// 			});
// 		})
// 	})
// })

//problem 10

// var net = require('net');
// var date = new Date();
// var month = date.getMonth()+1;
// if(month<10){
// 	month = '0'+month;
// }

// var server = net.createServer(function (socket){
// 	//socket handling logic...
// 	socket.end(date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n');
// })

// server.listen(process.argv[2]);

//problem 11

var http = require('http');
var fs = require('fs');
var path = require('path');
var fs = require('fs');

http.get(process.argv[2],(response) => {
	var str1="";
	response.setEncoding('utf8');
	response.on("data", function(data1){
		str1=str1+data1;
	})
	response.on("end", function(data){
		console.log(str1);
	});
})

var date = new Date();
var month = date.getMonth()+1;
if(month<10){
	month = '0'+month;
}

var server = http.createServer(function (socket){

	fs.createReadStream(process.argv[3])
	//socket handling logic...
	socket.end(date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n');
})

server.listen(process.argv[2]);


