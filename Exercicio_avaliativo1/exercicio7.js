/*
7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
média aritmética desses números.
 */

let prompt = require('prompt-sync')()
let soma = 0
let contador = 0

while (true) {
    let numero = parseFloat(prompt("Digite um numero decimal ( ou digite 0 para finalizar): "))

    if (numero === 0) {
        break
    }
    soma += numero
    contador++
}

let media = soma / contador

if (contador > 0 ) {
console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`)
} else {
    console.log("Nenhum número foi digitado.")
}