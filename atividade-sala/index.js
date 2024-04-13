const express = require("express");
const app = express();

app.use(express.json());

const carrosRouter = require("./router/carros")
app.use(carrosRouter)


app.get("/carros", (req, res) => {
    res.json("ok")
})






app.listen(3000, () => {
    console.log("API Rodando em http://localhost:3000")
})