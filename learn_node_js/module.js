var fs = require('fs');
var path = require('path');

module.exports = function myModule(directory_name, filenameExt, callback) {

	fs.readdir(directory_name,(err, list) => {
		if (err){
			return callback(err) // early return
		}

		var fileExt = '.'+filenameExt; //no .!
		var arr = [];
		//console.log(fileExt);
		//console.log(list);

		// list = list.filter(() => {

		// })
		for (var i=0;i<list.length;i++){
			//console.log(fileExt);
			//console.log(path.extname(list[i]));
			if(fileExt === path.extname(list[i])){
				arr.push(list[i]);
				//console.log(list[i]);
			}
			//console.log(path.extname(list[i]));
			//console.log(list[i]);
		}
		callback(null, arr)
	})
	//return arr;
}


// function myModule(directory_name, filename, callback) {
// 	foo(function (err, data) {
// 	 if (err)
// 	   return callback(err) // early return

// 	 // ... no error, continue doing cool things with `data`

// 	 // all went well, call callback with `null` for the error argument

// 	 callback(null, data)
// 	})
// }