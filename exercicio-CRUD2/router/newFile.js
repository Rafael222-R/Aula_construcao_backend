const { router, listaPessoas } = require("./pessoas");

router.get("/pessoas/:id", (req, res) => {
    const id = req.params.id;
    const cadastro = listaPessoas.find(cadastro => cadastro.id == id);

    res.json(cadastro);
});
