<<<<<<< HEAD
const app = express()
const PORT = 3000
=======
>>>>>>> 7dbc500f3c27e195132b8508c7295759a5ac1b82

// Middlewares
app.use(express.json())

// Conexão com o MongoDB
<<<<<<< HEAD
mongoose.connect(`mongodb+srv://username:<password>@cluster0.g6opllz.mongodb.net/?retryWrites=true&w=majority` )
// eu não conseguir colocar meu mongodb, não conseguir localizar meu link 
=======
mongoose.connect(`mongodb+srv://username:<password>@cluster0.g6opllz.mongodb.net/?retryWrites=true&w=majority`)
>>>>>>> 7dbc500f3c27e195132b8508c7295759a5ac1b82
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar no MongoDB: ", err))


// Schemas
const Tarefa = mongoose.model('tarefa', { nome: String })

// Rotas
app.post('/tarefas', async (req, res) => {
    const tarefa = new Tarefa({ nome: req.body.nome })
    const tarefaCriada = await tarefa.save()
    res.json(tarefaCriada)
})


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})