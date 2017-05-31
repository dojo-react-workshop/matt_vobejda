var namelist = [];

module.exports = (() => {

    return {
        homepage: (req,res) => {
            res.render('index');
            // if(req.body.name){
            //     namelist.push(req.body.name);
            // }
            // res.render('index',{names:namelist});
        },
        add: (req,res) => {
            if(req.body.name){
                namelist.push(req.body.name);
            }
            //res.send({names:namelist});
            res.json(req.body);
        }
    }

})();