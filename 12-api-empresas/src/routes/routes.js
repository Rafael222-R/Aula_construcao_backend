const express = require('express')
const router = express.Router()
// Controllers
const CargoController = require('../controllers/CargoController')
const departamentoControllers = require('../controllers/departamentosControllers')
const funcionarioController = require('../controllers/FuncionarioController')
//validators
const { validarCargo } = require('../Validators/cargoValidator')
const { validarDepartamento } = require('../Validators/departamentosValidator')
const { validarFuncionario } = require('../Validators/FuncionarioValidator')

// Cargo
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', CargoController.excluir)




// Funcionarios
router.get('/funcionarios', funcionarioController.buscarTodos)
router.get('/funcionarios/:id', funcionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, funcionarioController.criar)
router.put('/funcionarios/:id', validarFuncionario, funcionarioController.atualizar)
router.delete('/funcionarios/:id', funcionarioController.excluir)


// Departamentos

router.get('/departamentos', departamentoControllers.buscarTodos)
router.get('/departamentos/:id', departamentoControllers.buscarPorID)
router.post('/departamentos', validarDepartamento, departamentoControllers.criar)
router.put('/departamentos/:id', validarDepartamento, departamentoControllers.atualizar)
router.delete('/departamentos/:id', departamentoControllers.excluir)







module.exports = router