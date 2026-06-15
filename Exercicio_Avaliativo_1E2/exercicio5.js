/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
 */

let prompt = require('prompt-sync')()

let peso = parseFloat(prompt("Digite seu peso em kg:"))
let altura = parseFloat(prompt("Digite sua altura em metros:"))

function calcularIMC(pessoa, altura) {
    let imc = peso / (altura * altura)
    return imc
}

let imc = calcularIMC (peso, altura)
console.log(`O seu IMC é: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log("Categoria: Baixo peso")
} else if (imc >=18.5 && imc < 24.9) {
    console.log("Categoria: Peso normal")
} else if (imc >= 25 && imc < 29.9) {
    console.log("Categoria: Sobrepeso")
} else {
    console.log("Categoria: Obesidade")
}
