const express = require ("express")
const router = express.Router()

const CargoController = require ("../controllers/CargoController")
const FuncionarioController = require('../controllers/FuncionarioController.js')
const ClienteController = require("../controllers/ClienteController.js")


const {validarID} = require('../validators/IdValidator')
const { validarCargo } = require("../validators/CargoValidator")
const { validarFuncionario } = require('../validators/FuncionarioValidator')
const { validarCliente } = require("../validators/ClienteValidator.js")


router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id',validarID, CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id',validarID,validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', CargoController.excluir)

router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', validarID, FuncionarioController.excluir)

router.get('/clientes', ClienteController.buscarTodos)
router.get('/clientes/:id', validarID, ClienteController.buscarPorID)
router.post('/clientes', validarCliente, ClienteController.criar)
router.put('/clientes/:id', validarID, validarCliente, ClienteController.atualizar)
router.delete('/clientes/:id', validarID, ClienteController.excluir)



module.exports = router