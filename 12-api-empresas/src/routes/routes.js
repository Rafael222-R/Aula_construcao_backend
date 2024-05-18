const express = require('express')
const router = express.Router()
// Controllers
const CargoController = require('../controllers/CargoController')
const departamentoControllers = require('../controllers/departamentosControllers')
//validators
const { validarCargo } = require('../Validators/cargoValidator')
const { validarDepartamento } = require('../Validators/departamentosValidator')


// Cargo
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', CargoController.excluir)




// Funcionarios



// Departamentos

router.get('/departamentos', departamentoControllers.buscarTodos)
router.get('/departamentos/:id', departamentoControllers.buscarPorID)
router.post('/departamentos', validarDepartamento, departamentoControllers.criar)
router.put('/departamentos/:id', validarDepartamento, departamentoControllers.atualizar)
router.delete('/departamentos/:id', departamentoControllers.excluir)







module.exports = router