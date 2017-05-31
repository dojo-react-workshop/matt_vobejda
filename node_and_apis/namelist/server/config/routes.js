var controller = require('./../controllers/controller.js');

module.exports = (app) => {
    app.get('/', function(req,res){
    	controller.homepage(req,res);
    });
    app.post('/add', function(req,res){
    	controller.add(req,res);
    });
    app.post('/delete', function(req,res){
    	controller.delete(req,res);
    });
    app.post('/edit', function(req,res){
    	controller.edit(req,res);
    });
}