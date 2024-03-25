
/*
3. Escreva um script para ler o salário mensal atual de um 
funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.
*/

    const prompt = require('prompt-sync') ();

// Função para calcular o novo salário com base no salário atual e no percentual de reajuste
function calcularNovoSalario(salarioAtual, percentualReajuste) {
    // Convertendo o percentual de reajuste para um fator multiplicativo (por exemplo, 10% se torna 0.10)
    let fatorReajuste = percentualReajuste / 100;

    // Calculando o valor do aumento
    let aumento = salarioAtual * fatorReajuste;

    // Calculando o novo salário
    let novoSalario = salarioAtual + aumento;

    return novoSalario;
}

// Função principal
function main() {
    // Entrada de dados
    let salarioAtual = parseFloat(prompt("Informe o salário mensal atual do funcionário: "));
    let percentualReajuste = parseFloat(prompt("Informe o percentual de reajuste (em %): "));

    // Calculando o novo salário
    let novoSalario = calcularNovoSalario(salarioAtual, percentualReajuste);

    // Saída de dados
    console.log("O novo salário do funcionário é: R$ " + novoSalario.toFixed(2));
}

// Chamada da função principal
main();
