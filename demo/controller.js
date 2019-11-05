import AbstractController from '../lib/abstractController'
import Model from './model'

class Ctrl extends AbstractController {
  constructor(model, modelName, options) {
    super(model, modelName, options)
  }
}

module.exports = new Ctrl(Model, 'Item')
