
const Abstract = require('./abstract');

class Item  {
    constructor(){
    }

    getData(req, res) {
        
        try {
            let data = {
                model : 'item',
                modelData :{
                    name : 'Seif',
                    email : 'something@someone.com'
                }
            }
            let handler = new Abstract(req ,res , data);
            handler.getData();
            
        } catch (error) {
            res.status('500').json({
                mag : error.message
            });
        }
    }
}


module.exports =  new Item;