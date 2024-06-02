const yup = require('yup')

const schema = yup.object().shape(

    {
        nome: yup
        .string("Campo nome precisa ser um texto")
        .required( "Campo nome é Obrigatorio"),
        descricao: yup
        .string("Campo nome precisa ser um texto"),
        salario: yup
        .number("Campo salario precisa ser numerico")
        .min(1412, "Compo salario precisa ser maior que o salario minimo")
        .required("Campo Salario é Obrigatorio")

    }
)

function validarCargo (req,res, next) {
    schema.validate(req.body, {abortEarly: false} ).then(() => next ()).catch(err => res.status(400).json (
        {
            mensagem: "Erro na validação dos Campos",
            erro: err.errors
        }
    ))
}

module.exports = {
    validarCargo
}
