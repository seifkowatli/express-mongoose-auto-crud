import response from './response/responses'

class Abstract {
  constructor(model, modelName, options = {}) {
    // if(new.target == Abstract) {
    //   throw new TypeError('Cannot construct Abstract instances directly')
    // }

    this.model = model
    this.modelName = modelName
    // if(options.id) this.id = options.id
    // return this
  }

  // async isExisted(req , res){
  //   const Exist = await this.schema.findById(this.id)
  //   return Exist ? true :false
  // }

  create(req, res) {
    let Model = this.model

    try {
      let { data } = req.body
      let AnotherItem = new Model(data)

      AnotherItem.save(function(err) {
        if(err)
          res.send(new response.BadRequest())
        else
          res.status(response.defaults.Created.status).send(new response.Created(AnotherItem))
      })
    } catch (error) {
      res.send(new response.InternalServerError())
    }
  }

  // getAll(req, res) {}
  // getOne(req, res) {}
  // patch(req, res) {}
  // delete(req, res) {}
}

export default Abstract
