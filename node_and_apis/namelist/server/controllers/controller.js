var namelist = [];
var idCnt = 0;

function objConstructor(name,cnt){
	this.id=cnt;
	this.name=name;
}

module.exports = (() => {

    return {
        homepage: (req,res) => {
            res.render('index',{names:namelist});
        },
        add: (req,res) => {
			if(req.body.name){
            	var obj = new objConstructor(req.body.name,idCnt);
            	console.log(obj);
            	idCnt++;
                namelist.push(obj);
            }
            res.json(obj);
        },
        delete: (req,res) => {
        	//already gone from webpage, now delete from array
        	//given it's ID...
        	var idNum=Number(req.body.ID);
        	console.log("ID to Delete: " + req.body.ID);
        	for(var i=0;i<namelist.length;i++){
        		console.log("namelist i="+i +" id is: " + namelist[i].id);
        		//console.log(req.body.ID);
        		if(namelist[i].id===idNum){
        			console.log('I made it in here!');
        			namelist.splice(i,1);
        			break;
        		}
        	}
        	console.log(namelist);
        },
        edit: (req,res) => {
            var idNum=Number(req.body.id);
            console.log("ID to Edit: " + req.body.id);
            console.log("Name to Change To " + req.body.name);
            var obj = new objConstructor(req.body.name,req.body.id);
            for(var i=0;i<namelist.length;i++){
                console.log("namelist i="+i +" id is: " + namelist[i].id);
                //console.log(req.body.ID);
                if(namelist[i].id===idNum){
                    console.log('I made it in here!');
                    //namelist.splice(i,1);
                    namelist[i].name=req.body.name;
                    break;
                }
            }
            console.log(namelist);
            res.json(namelist);
            //res.json(obj);
        }        
    }

})();