/* 9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

*/

const prompt = require("prompt-sync")();

var primeiro = Number(prompt("Informe o 1° Numero: "));
var segundo = Number(prompt("Informe o 2° Numero: "));

var soma = primeiro + segundo;
var resultado = soma * primeiro;

console.log(`O Resultado é: ${resultado}`);

