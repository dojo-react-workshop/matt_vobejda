module.exports = function(app){
	app.get('/', function(req,res){
		res.render('index');
	})
	
	//const SESSION = {};  //with a real page it would need to be more robust, but works for this (2 users hitting submit at the same time would cause issues)

	app.post('/result', function(req,res){
		//res.send(req.body);
		// console.log(req.body);  //everything that comes in a form will be in req.body...
		//console.log('charge credit card...'); //we don't want to keep charging the credit card...
		// SESSION.surveyInfo = {//req.body;
		// 	your_name: req.body.your_name,
		// 	dojo_loc: req.body.dojo_loc,
		// 	fav_lang: req.body.fav_lang,
		// 	comment: req.body.comment
		// };
		if(req.body.your_name === ""){
			res.status(400); 
			res.json(false);
		}
		console.log(req.body);
		res.json(req.body);
		// 	{
		// 	your_name: req.body.your_name,
		// 	dojo_loc: req.body.dojo_loc,
		// 	fav_lang: req.body.fav_lang,
		// 	comment: req.body.comment
		// });
		//res.redirect('/result');
	})

	// app.get('/result', function(req,res){
	// 	//res.render('result', SESSION.surveyInfo);
	// 	res.json(req.body);
	// 	//res.json(SESSION.surveyInfo);
	// })
}