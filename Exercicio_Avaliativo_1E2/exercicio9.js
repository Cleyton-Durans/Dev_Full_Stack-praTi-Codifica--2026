/*
9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
 */

let primeiro = 0
let segundo = 1

console.log("Sequência de Fibonacci:")
for (let i = 1; i <= 10; i++) {
    console.log(primeiro)

    let proximo = primeiro + segundo
    primeiro = segundo
    segundo = proximo
}
