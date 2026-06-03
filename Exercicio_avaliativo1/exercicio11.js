/* 11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */
const prompt = require('prompt-sync')();

function lerDados() {
   
    let nomes = [];
    let idades = [];
    let menorDeIdade = []

    for (let i = 0; i < 2; i++) {
        let nomePessoa = prompt(`Digite o nome da pessoa ${i + 1}: `)
        let idadePessoa = parseInt(prompt(`Digite a idade da pessoa ${i + 1}: `))

        nomes.push(nomePessoa)
        idades.push(idadePessoa)

        if (idades < 18 ) {
            menosDeIdade.push(nomePessoa)
            menosDeIdade.push(idadePessoa)
        }
    }

    return {
        nomes: nomes,
        idades: idades,
        maiorDeIdade: maiorDeIdade
    }
}

let resultado = lerDados();
console.log("\n -- Apresenta Resultado -- ")
console.log(`Nomes: ${resultado.nomes}`)
console.log(`Idades: ${resultado.idades}`)
console.log(`Maiores de idades: ${resultado.maiorDeIdade}`)