/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/
let prompt = require('prompt-sync')()

let num = parseInt(prompt("Digite um número inteiro:"))

if (num % 2 == 0) {
    console.log(`O numero é par `)
} else {
    console.log(`O número é ímpar`)
}