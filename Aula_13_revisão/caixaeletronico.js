/*Crie um programa de caixa eletrônico simplificado. 
 usuário informa um valor (múltiplo de 10) e o programa calcula a menor quantidade de 
 cédulas (R$ 100, R$ 50, R$ 20, R$ 10) necessárias para o saque.*/

const PROMPT  = require('prompt-sync')();
let valor = Number(PROMPT("Digite o valor a ser sacado (múltiplo de 10): "));

if (valor <= 10 || valor % 10 !== 0 ) {
    console.log("Valor inválido. O valor deve ser um múltiplo de 10 e maior que 10.");
} else {
    let cedulas = [100, 50, 20, 10];
    let quantidadeCedulas = [0, 0, 0, 0]; // Inicializa a quantidade de cada cédula

    for (let i = 0; i < cedulas.length; i++) {
        while (valor >= cedulas[i]) { // Enquanto o valor for maior ou igual à cédula atual
            valor -= cedulas[i]; // Subtrai o valor da cédula do total
            quantidadeCedulas[i]++; // Incrementa a quantidade da cédula correspondente
        }
    }
    console.log("Quantidade de cédulas necessárias:");
    console.log(`R$ 100: ${quantidadeCedulas[0]}`);
    console.log(`R$ 50: ${quantidadeCedulas[1]}`);
    console.log(`R$ 20: ${quantidadeCedulas[2]}`);
    console.log(`R$ 10: ${quantidadeCedulas[3]}`);
}



