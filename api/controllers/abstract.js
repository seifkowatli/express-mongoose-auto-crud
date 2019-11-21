const mongoose = require('mongoose');
//const item = require("../models/user")

class Abstract {
    constructor(req, res, data = {}){
        this.data = data.modelData;
        this.model = data.model;
        this.req = req;
        this.res = res;
    }

    async getData() {


        let users = await mongoose.model(this.model).find({});
        
        this.res.json({
            msg: 'successfully',
            data: users
        });
    }
     async postData(){

        let newItem = new   mongoose.model(this.model)(this.data);
        await newItem.save();

        this.res.json({
            msg: 'successfully',
            data: newItem
        });
    }
}


module.exports =  Abstract;