/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
"Recuperação", ou "Reprovado" utilizando if-else if.
*/

let prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Digite um númeor de  á 0 a 10:"))
if (nota >= 7 && nota <= 10){
    console.log("Aprovado")
} 
else if (nota >= 5 && nota < 7) {
    console.log("Recuperação")
}
else {
    console.log("Reprovado")
}