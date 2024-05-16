const express = require('express')
const router = express.Router()
// Controllers
const CargoController = require('../controllers/CargoController')

//validators
const { validarCargo } = require('../Validators/cargoValidator')

// Cargo
router.post('/cargos', validarCargo, CargoController.criar)




// Funcionarios



// Departamentos







module.exports = router