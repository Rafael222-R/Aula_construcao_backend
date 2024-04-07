
/*
4 - custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos 
(aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, 
escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

*/

    const prompt = require('prompt-sync')();

var custoFabrica = Number(prompt("Digite o custo de fábrica do carro: "));


var percentualDistribuidor = 0.28;
var percentualImpostos = 0.45;


var custoDistribuidor = custoFabrica * percentualDistribuidor;
var custoImpostos = custoFabrica * percentualImpostos;
var custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;

console.log("O custo final do carro ao consumidor é: R$ " + custoConsumidor.toFixed(2));


