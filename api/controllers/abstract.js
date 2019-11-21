const mongoose = require('mongoose');
//const item = require("../models/user")

class Abstract {
    constructor(data = {}){
        this.data = data.modelData;
        this.model = data.model;
    }

    async get(req, res) {
        try {
            const myModel = mongoose.model(this.model);
            
            let users = this.data.id 
                ? await mongoose.model(this.model).findById(this.data.id) 
                : await mongoose.model(this.model).find({});

            if (users){
                res.json({
                    msg: 'successfully',
                    data: users
                });

            }else{
                res.status(404).json({
                    msg: 'Not found',
                });
            }
            
        } catch (error) {
            res.status(500).json({
                msg : error.message
            });
        }
    }

    async create(req ,res){
        try {
            console.log(this.data.modelData);
            let newItem = new  mongoose.model(this.model)(this.data.modelData);
            await newItem.save();
    
            res.json({
                msg: 'successfully',
                data: newItem
            });
        } catch (error) {
            res.status(500).json({
                msg  : error.message
            });
        }
    }

    async update(req,res){
        try {
            let newData = req.body.props;
            let newProps = {};
            for ( let porp of newData){
                newProps[porp.key] = porp.value; 
            }

            const updatedObject = await  mongoose.model(this.model).findOneAndUpdate({
                    '_id' : this.data.id
                } ,{
                    $set : newProps
                },{
                    new : true
            });

            
            if (updatedObject){
                res.json({
                    msg: 'successfully',
                    data: updatedObject
                });

            }else{
                res.status(404).json({
                    msg: 'The referenced object is Not found',
                });
            }
            
                
        } catch (error) {
            res.status(500).json({
                msg : error.message
            });
        }
    }

    async delete(req,res){
        try {
            
            let deletedObj =  await mongoose.model(this.model).findByIdAndDelete(this.data.id);

            if(deletedObj){
                res.json({
                    msg: 'Object deleted successfuly',
                    data: deletedObj
                });

            }else{
                res.status(404).json({
                    msg : "Object not found"
                });
            }

        } catch (error) {
            res.status(500).json({
                msg  : error.message
            });
        }
    }
}


module.exports =  Abstract;