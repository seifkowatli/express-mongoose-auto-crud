const mongoose = require('mongoose');

class Abstract {
    constructor(req, res, data = {}){
        this.data = data.modelData;
        this.model = data.model;
        this.req = req;
        this.res = res;
    }

    async getData() {
        
        let item = mongoose.modelNames();
        console.log(item);

        // let item = require('../models/user');

        // let myitem = new item ({
        //     name :'sdfsdfsadfds' ,
        //     email : 'asdff@dssdflkfsdfasdjsd.com'
        // })

        // await myitem.save();

        // console.log(this.name);
        this.res.json({msg : 'succfull' , data :{} });
    }
}


module.exports =  Abstract;