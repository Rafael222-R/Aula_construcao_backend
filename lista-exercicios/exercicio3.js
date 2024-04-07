
/*
3. Escreva um script para ler o salário mensal atual de um 
funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

*/

    const prompt = require('prompt-sync') ();

var salarioAtual = Number(prompt("Digite o salário mensal atual do funcionário: "));
var percentualReajuste = Number(prompt("Digite o percentual de reajuste (%): "));

var novoSalario = salarioAtual + (salarioAtual * (percentualReajuste / 100));

console.log("O novo salário do funcionário é: R$ " + novoSalario);

