
/*
2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos,
 nulos e válidos.
 Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

*/


    const prompt = require('prompt-sync')();

var Eleitores = Number(prompt("Digite o número total de eleitores: "));
var Brancos = Number(prompt("Digite o número de votos em branco: "));
var Nulos = Number(prompt("Digite o número de votos nulos: "));
var Validos = Number(prompt("Digite o número de votos válidos: "));


var percentualBrancos = (Brancos / Eleitores) * 100;
var percentualNulos = (Nulos / Eleitores) * 100;
var percentualValidos = (Validos / Eleitores) * 100;


console.log("Resultados:");
console.log("Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
