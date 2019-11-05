
class Abstract {
    constructor(model , options = {}){

        if (new.target == Abstract) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        this.model = model;

        console.log(model + '111111111111111111111');
        console.log(this.model + '111111111111111111111');
        // this.model = require ('../models/' + modelName);
        // this.id = options.id ? options.id : false;
        return this;
    }

    async isExisted(req , res){
        const Exist = await this.schema.findById(this.id);
        return Exist ? true :false;

    }

    create(req, res){
        // console.log('-----------------------------------------------------------------');
        // console.log(Abstract.model);
        // console.log('-----------------------------------------------------------------');
        let name = this.model;
        let modelss = require ('../models/' + name);

        try {
            let { data } = req.body;
            const item = new modelss(data);

            item.save(function(err){
                res.json({ message : 'message' , data : item});
            });

        } catch (error) {
            res.status('500').json({message : 'server Error'});
        }
    }

    getAll(req, res){

    }

    getOne(req, res){

    }

    patch(req, res){

    }

    delete(req, res){

    }





}


module.exports = Abstract;
