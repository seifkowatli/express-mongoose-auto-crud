import AbstractController from '../lib/abstractController'

class Ctrl extends AbstractController {
  constructor(model, options) {
    super(model, options)
  }
}

module.exports = new Ctrl('Item')
