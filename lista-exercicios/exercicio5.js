/*
5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor 
e o imposto, e calcular e escrever o custo final ao consumidor.

*/


    const prompt = require("prompt-sync")();
  
var custoFabrica = Number(prompt("Digite o custo de fábrica do carro: "));
var percentualDistribuidor = Number(prompt("Digite a porcentagem do distribuidor (%): "));
var percentualImpostos = Number(prompt("Digite a porcentagem de impostos (%): "));

var custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
var custoImpostos = custoFabrica * (percentualImpostos / 100);

var custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;


console.log("O custo final do carro ao consumidor é: R$ " + custoConsumidor.toFixed(2));

