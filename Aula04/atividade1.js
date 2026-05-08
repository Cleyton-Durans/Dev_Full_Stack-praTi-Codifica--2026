/* Nesta atividade, você deverá criar um programa em JavaScript que mostre a tabuada de um número utilizando 
um laço de repetição (for ou while).
O programa deve:
criar uma variável com um número
mostrar a tabuada desse número de 1 até 10
exibir os resultados no console */

console.log("Tabuada de um número utilizando laço de repetição")
console.log("_______________________________________")
let numero = 5 // Você pode alterar o valor da variável "numero" para mostrar a tabuada de outro número
console.log('Tabuada de ' + numero)
for ( i=1; i <= 10; i++) {
    let resultado = numero * i
    console.log(numero + " X " + i + " = " + resultado)
}

console.log("\n") // Adiciona uma linha em branco para separar as duas tabuadas
console.log("Tabuada de um nummero utilizando laço de repetição (While)")
console.log("_______________________________________")
let numero2 = 4 // Você pode alterar o valor da variável "numero2" para mostrar a tabuada de outro número
console.log("Tabuada de " + numero2)
let j = 1
while (j <= 10) {
    let resultado2 = numero2 * j
    console.log(numero2 + " X " + j + " = " + resultado2)
    j++
}