const yup = require('yup')

const schema = yup.object().shape(

    {
        nome: yup
        .string("Campo nome precisa ser um texto")
        .required( "Campo nome é Obrigatorio"),
        descricao: yup
        .string("Campo nome precisa ser um texto"),
        codigo_barras: yup
        .string("Campo nome precisa ser um texto")
        .min(12, "O codigo de Barras deve conter no minimo 12 digitos")
        .required("Campo Codigo de Barras é Obrigatorio")

    }
)

function validarProduto (req,res, next) {
    schema.validate(req.body, {abortEarly: false} ).then(() => next ()).catch(err => res.status(400).json (
        {
            mensagem: "Erro na validação dos Campos",
            erro: err.errors
        }
    ))
}

module.exports = {
    validarProduto
}
