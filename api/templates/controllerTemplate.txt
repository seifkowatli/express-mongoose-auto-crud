
const Abstract = require('./abstract');
var data = {
    model : 'User',
    modelData : {}
}

const handler  = new Abstract(data)
class Item  {
    constructor(){
    }

    get(req, res) {
        handler.data.id =  req.params.id ? req.params.id   : null;
        handler.get(req, res);
    }

    create(req,res){
        let myData = req.body.modelData;
        handler.data.modelData = {
            name : myData.name,
            email : myData.email,
            isConfirmed : true 
        };

        handler.create(req ,res);
    }

    update(req,res){
        handler.data.id =  req.params.id;
        handler.update(req,res);
    }

    delete(req,res){
        handler.data.id =  req.params.id;
        handler.delete(req,res);
    }
}
    



module.exports =  new Item;