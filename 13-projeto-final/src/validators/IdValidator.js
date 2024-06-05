const mongoose = require('mangoose')
function validarID(req, res, next) {
    const isValid = mongoose.Types.ObjectID.isValid(req.params.id)
    if (isValid) {
    next()
    } else {
    return res.status(400).json({mensagem:  "ID inválido"})
    }
}

module.exports = {
    validarID
}