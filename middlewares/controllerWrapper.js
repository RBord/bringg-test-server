const controllerWrapper = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

const encodingToEwok = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = {
  controllerWrapper,
  encodingToEwok,
}
