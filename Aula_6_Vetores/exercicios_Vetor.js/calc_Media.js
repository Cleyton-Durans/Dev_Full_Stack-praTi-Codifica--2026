/*
2. Calculando a média de notas: Usar um laço for para calcular a média das notas de
um/a estudante.
Instruções:
● Criar um array com as notas de um/a estudante(por exemplo: [8, 7, 9, 10, 6]);
● Utilizar o laço for para somar as notas;
● Calcular a média das notas e exibir o resultado no console.
*/

let media = 0
let estudante = [8, 7, 9, 10, 6]

for (let i = 0; i < estudante.length; i++){
    media += estudante[i]
}
console.log(`Soma das notas: ${media}`)
console.log(`Média das notas: ${media / estudante.length}`)
