/*
8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while.
*/

let prompt = require('prompt-sync')()
let numero = parseFloat(prompt("Digite um número para calcular um fatorial: "))

let fatorial = 1

// Calcula o fatorial
for (let i = 1; i <= numero; i++) {
    fatorial *= i
}

console.log(`O fatorial de ${numero} é: ${fatorial}`)