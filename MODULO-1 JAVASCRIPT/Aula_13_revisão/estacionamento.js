
const PROMPT = require('prompt-sync')();

let horas = parseFloat(PROMPT("Digite a quantidade de horas do estacionamento: "));
let valor = 0; 
let extra = 0;

if (!horas || horas < 1) {
    console.log("A quantidade de horas é inválida.");
} else {
    valor = 0;
    extra = 0;

    switch (true) {
        case horas <= 2:
            valor = 5
            break;
        case horas <= 4:
            valor = 10
            break;
        case horas <= 6:
            valor = 15
            break;
        default:
            valor = 15
            extra = (horas - 6) * 2
            break;
    }
}

console.log(`Valor a ser pago: R$ ${valor + extra}`);

