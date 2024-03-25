
/*
2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos.
 Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

*/


    const prompt = require('prompt-sync')();

// Função para calcular percentual
function calcularPercentual(valor, total) {
    return (valor / total) * 100;
}

// Função principal
function calcularPercentuais() {
    // Entrada de dados
    let totalEleitores = parseInt(prompt("Informe o número total de eleitores: "));
    let votosBrancos = parseInt(prompt("Informe o número de votos em branco: "));
    let votosNulos = parseInt(prompt("Informe o número de votos nulos: "));
    let votosValidos = parseInt(prompt("Informe o número de votos válidos: "));

    // Cálculo dos percentuais
    let percentualBrancos = calcularPercentual(votosBrancos, totalEleitores);
    let percentualNulos = calcularPercentual(votosNulos, totalEleitores);
    let percentualValidos = calcularPercentual(votosValidos, totalEleitores);

    // Saída de dados
    console.log("\nResultados:");
    console.log("Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
    console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
}

// Chamada da função principal
calcularPercentuais();
