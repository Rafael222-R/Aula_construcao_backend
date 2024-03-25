
/*
4 - custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos 
(aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, 
escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
*/

    const prompt = require('prompt-sync')();

// Função para calcular o custo final ao consumidor
function calcularCustoFinal(custoFabrica) {
    // Definindo os percentuais do distribuidor e dos impostos
    const percentualDistribuidor = 28;
    const percentualImpostos = 45;

    // Calculando o valor do distribuidor
    const valorDistribuidor = custoFabrica * (percentualDistribuidor / 100);

    // Calculando o valor dos impostos
    const valorImpostos = custoFabrica * (percentualImpostos / 100);

    // Calculando o custo final ao consumidor
    const custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

    return custoFinal;
}

// Função principal
function main() {
    // Entrada de dados
    const custoFabrica = parseFloat(prompt("Informe o custo de fábrica do carro: "));

    // Calculando o custo final ao consumidor
    const custoFinal = calcularCustoFinal(custoFabrica);

    // Saída de dados
    console.log("O custo final ao consumidor é: R$ " + custoFinal.toFixed(2));
}

// Chamada da função principal
main();
