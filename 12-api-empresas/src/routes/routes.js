const express = require ("express")
const router = express.Router()

const CargoController = require("../controllers/CargoController.js")
const DepartamentoController = require("../controllers/DepartamentoController.js")
const FuncionarioController = require("../controllers/FuncionarioController.js")
const TarefaController = require("../controllers/TarefasController.js")
const ProjetoController = require("../controllers/ProjetoController.js")

const { validarID } = require('../Validators/IdValidator.js')
const { validarCargo } = require('../Validators/CargoValidator.js')
const { validarDepartamento } = require("../Validators/DepartamentoValidator.js")
const { validarFuncionario } = require("../Validators/FuncionarioValidator.js")
const { ValidadorTarefa }  = require("../Validators/TarefaValidator.js")
const {ValidadorProjeto} = require("../Validators/ProjetoValidator")

router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id',validarID, CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id',validarID,validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', CargoController.excluir)


router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', validarID, DepartamentoController.buscarPorID)
router.post('/departamentos', validarDepartamento, DepartamentoController.criar)
router.put('/departamentos/:id', validarID, validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamentos/:id', validarID, DepartamentoController.excluir)


router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', validarID, FuncionarioController.excluir)


router.get('/projetos', ProjetoController.buscarTodos)
router.get('/projetos/:id', validarID, ProjetoController.buscarPorID)
router.post('/projetos', ValidadorProjeto, ProjetoController.criar)
router.put('/projetos/:id', validarID, ValidadorProjeto, ProjetoController.atualizar)
router.delete('/projetos/:id', validarID, ProjetoController.excluir)


router.get('/tarefas', TarefaController.buscarTodos)
router.get('/tarefas/:id', validarID, TarefaController.buscarPorID)
router.post('/tarefas', ValidadorTarefa, TarefaController.criar)
router.put('/tarefas/:id', validarID, ValidadorTarefa, TarefaController.atualizar)
router.delete('/tarefas/:id', validarID, TarefaController.excluir)









module.exports = router