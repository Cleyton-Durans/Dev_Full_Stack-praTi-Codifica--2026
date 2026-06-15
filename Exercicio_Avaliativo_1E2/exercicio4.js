/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. 
*/

let = prompt = require(prompt-sync)()

console.log("Menu Interativo:")
console.log("1. opção 1")
console.log("2. opção 2")
console.log("3. opção 3")
let escolha = prompt("Escolha uma opção (1, 2 ou 3): ")

switch (escolha) {
    case "1":
        console.log("Você escolheu a opção 1.")
        break
    case "2":
        console.log("Você escolheu a opção 2.")
        break
    case "3":
        console.log("Você escolheu a opção 3.")
        break
    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.")
}