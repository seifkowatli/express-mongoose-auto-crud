
const Abstract = require('./abstract');

class Item  {
    constructor(){
    }

    getData(req, res) {
        
        try {
            let data = {
                model : req.body.model,

            }
            let handler = new Abstract(req ,res , data);
            handler.getData();
            
        } catch (error) {
            res.status('500').json({
                mag : error.message
            });
        }
    }

    postDate(req,res){

        try {
            let data = {
                model : req.body.model,
                modelData : req.body.modelData
            }
            let handler = new Abstract(req ,res , data);
            handler.postData();
            
        } catch (error) {
            res.status('500').json({
                mag : error.message
            });
        }
    }
    }
    



module.exports =  new Item;