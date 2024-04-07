
/* 7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 4 e 6.
*/

const prompt = require("prompt-sync")();

var primeiraNota = Number(prompt("Insira a Primeira Nota: "));
var segundaNota = Number(prompt("Insira a Segunda Nota: "));

var Peso1 = 4;
var Peso2 = 6;

var media  = ((primeiraNota * Peso1) + (segundaNota * Peso2)) / (Peso1 + Peso2)

console.log ("Sua Media Final é: " + media);