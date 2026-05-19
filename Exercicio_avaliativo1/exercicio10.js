/*10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */

function lerNomes() {
    let prompt = require('prompt-sync')()
    let nomes = []

    for (let i = 0; i < 7; i++) {
        let nome = prompt(`Digite o nome da pessoa ${i + 1}: `)
        nomes.push(nome)
    }
    return nomes
}

let imprima = lerNomes()
console.log("Nomes na ordem inversa:")
for (let i = imprima.length - 1; i >=0; i--){
    console.log(imprima[i])
}