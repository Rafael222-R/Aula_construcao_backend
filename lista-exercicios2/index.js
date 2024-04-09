// configurando projeto
const express = require('express')
const app = express()
const port = 3000
// middlewares
app.use(express.json())


// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = 
// (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
app.post('/exercicio1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2

    const resposta = {
        peca: req.body.peca,
        estoqueMedio: estoqueMedio
    }

    res.json(resposta)
})

/*
2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem 
caso o funcionário não tenha direito ao aumento.
*/

app.post('/exercicio2', (req, res) => {
    const {salario} = req.body
    console.log(salario)

    const salarioFloat = Number(salario);

    if (salarioFloat < 1000) {
        const aumento = salarioFloat * 0.3;
        const salarioReajustado = salarioFloat + aumento;
        return res.json({ salarioReajustado });
    } else {
        return res.json({ message: 'O funcionário não tem direito ao aumento.' });
    }
})
    
/*3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, 
o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. 
Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total. */  

app.post("/exercicio3", (req, res) =>{
    const { nome, salarioFixo, totalVendas, percentualComissao } = req.body;
    console.log([nome, salarioFixo, totalVendas, percentualComissao])

    const salarioTotal = ((totalVendas * percentualComissao) / 100) + salarioFixo ; 

    res.json(`Nome Vendedor : ${nome}, Salario a Receber: $ ${salarioTotal}`)
   
})

/** 4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas).
 *  O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase:
 *  A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h. */

app.post('/exercicio4', (req, res) =>{
    const {nome, distancia, tempo} = req.body;
    console.log(nome, distancia, tempo);

    const velocidadeMedia = distancia/ tempo;

    res.json(`A velocidade média do ${nome} foi de ${velocidadeMedia} km/h`);

})

/*5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30% */

app.post("/exercicio5", (req, res) =>{
    const {nome, salario} = req.body

    if (salario < 2000) {
        const ajuste = salario * 0.5;
        const salarioReajustado = salario + ajuste ;
        return res.json(`O Salario do ${nome} foi Ajustado para: $ ${salarioReajustado}`)
    } else {
        const ajuste = salario * 0.3;
        const  salarioReajustado = salario + ajuste ;
        return res.json(`O Salario do ${nome} foi Ajustado para: $ ${salarioReajustado}`)
    }
})

/*6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7
 */

app.post("/exercicio6", (req, res) => {
    const {sexo , altura } = req.body;
    console.log(altura, sexo)

    if (sexo.toLowerCase() === "masculino" ) {
        const pesoIdeal = (72.7 * altura) - 58 ;
        return res.json("O Peso Ideal do Homem é: " + pesoIdeal.toFixed(2));
    } 
     else (sexo.toLowerCase() === "feminino" ) 
        const pesoIdeal = (62.1 * altura) - 44.7 ;
        return res.json("O Peso Ideal da Mulher é: " + pesoIdeal.toFixed(2));
    
})

/* 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
 */

    app.post('/exercicio7', (req, res) => {
        let listaProdutos = []
    
        req.body.forEach(produto => {
            listaProdutos.push(produto)
        });
    
        let maiorPrecoLido = 0
        listaProdutos.forEach(produto => {
            if (produto.preco > maiorPrecoLido){
                maiorPrecoLido = produto.preco
            }
        })
    
        let soma = 0
        console.log("soma ", soma)
        listaProdutos.forEach(produto => {
            console.log("produto preco ", produto.preco)
            soma = soma + produto.preco
            console.log("soma ", soma)
        })
    
        let media = soma / listaProdutos.length
    
        res.json({
            maiorPrecoLido: maiorPrecoLido,
            media: media.toFixed(2)
        })
    })

/*
8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. 
Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. 
Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, 
o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10% 
*/

app.post("/exercicio8", (req, res) =>{
    const {codigoCargo, salarioAntigo} = req.body;
    console.log(salarioAntigo, codigoCargo)

 let Funcionario ;
    switch(codigoCargo) {
        case 101 :
           Funcionario = 0.05;
           break;
        case 102 :
            Funcionario = 0.75;
            break;
        case 103 :
            Funcionario = 0.1;
            break;
        default:
            Funcionario = 0.15
            break;
        }

const salarioNovo = salarioAntigo * (1 + Funcionario);
const diferencaSalario = salarioNovo - salarioAntigo;

return res.json ({salarioAntigo, salarioNovo, diferencaSalario})


})

/*
Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e 
a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.
     */


app.post ('/exercicio9', (req, res) => {
    const {salarioMinimo, numeroHorasTrabalhadas, numeroDependentes, numeroHorasExtrasTrabalhadas} = req.body;
    console.log (salarioMinimo, numeroHorasTrabalhadas, numeroDependentes, numeroHorasExtrasTrabalhadas)

    var valorHoraTrabalhada = (salarioMinimo / 5) ;
        console.log (valorHoraTrabalhada);
    var salarioMes = numeroHorasTrabalhadas * valorHoraTrabalhada ; 
    console.log (salarioMes);
    var acrescimoPorDependente = numeroDependentes * 32;
    console.log (acrescimoPorDependente);
    var valorHoraExtraTrabalhada = (valorHoraTrabalhada * (1 + 0.5)) * numeroHorasExtrasTrabalhadas;
    console.log (valorHoraExtraTrabalhada);
    var salarioBruto = salarioMes + acrescimoPorDependente + valorHoraExtraTrabalhada; 
    console.log (salarioBruto);

    var IRPF = 0 
    switch (true) {
        case salarioBruto <= 2000:
            IRPF = 0 ; 
            break;
        case salarioBruto <= 5000:
            IRPF = salarioBruto * 0.1;
            break;
        default : 
            IRPF = salarioBruto *  0.2;
            break;

    }

    console.log (IRPF);

    var salarioLiquido = salarioBruto - IRPF;
    var gratificacao = 0 ;
        if (salarioLiquido <= 3500){
            gratificacao = 1000
        } else {
            gratificacao = 500
        }
        
        console.log (gratificacao);
    var salarioReceber = salarioLiquido + gratificacao;

return res.json({salarioReceber})
})
    

// start da aplicacão na porta definida
app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
}) 


