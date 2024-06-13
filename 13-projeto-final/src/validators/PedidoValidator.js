const yup = require('yup')

const schema = yup.object().shape(

    {
        funcionario: yup
            .string("Campo nome precisa ser um texto")
            .required("Funcionario obrigatorio"),
        cliente: yup
            .string("Campo nome precisa ser um texto")
            .required("cliente obrigatorio"),
            
    }
)

function validarPedido(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {

            const erros = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })

            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros
                }
            )

        })
}

module.exports = {
    validarPedido
}