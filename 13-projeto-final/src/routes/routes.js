const express = require ("express")
const router = express.Router()

const CargoController = require ("../controllers/CargoController")
const FuncionarioController = require('../controllers/FuncionarioController.js')
const ClienteController = require("../controllers/ClienteController.js")
const ProdutoController = require('../controllers/ProdutoController.js')
const PedidoController = require('../controllers/PedidoController.js')


const {validarID} = require('../validators/IdValidator')
const { validarCargo } = require("../validators/CargoValidator")
const { validarFuncionario } = require('../validators/FuncionarioValidator')
const { validarCliente } = require("../validators/ClienteValidator.js")
const { validarProduto } = require('../validators/ProdutoValidator.js')
const { validarPedido } = require("../validators/PedidoValidator")


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

router.get('/produtos', ProdutoController.buscarTodos)
router.get('/produtos/:id', validarID, ProdutoController.buscarPorID)
router.post('/produtos', validarProduto, ProdutoController.criar)
router.put('/produtos/:id', validarID, validarProduto, ProdutoController.atualizar)
router.delete('/produtos/:id', validarID, ProdutoController.excluir)

router.get('/pedido', PedidoController.buscarTodos)
router.get('/pedido/:id', validarID, PedidoController.buscarPorID)
router.post('/pedido', validarPedido, PedidoController.criar)
router.put('/pedido/:id', validarID, validarPedido, PedidoController.atualizar)
router.delete('/pedido/:id', validarID, PedidoController.excluir)




module.exports = router