/*
- **Exercícios para praticar**:
    - Criar uma função que **calcule a média de notas** (com parâmetros e retorno).
    - Criar uma função que **verifique se uma pessoa é maior de idade** (com parâmetro `idade` e retorno booleano).
    - Criar uma **calculadora** que receba dois números e um operador (`+`, , , `/`) e retorne o resultado.
*/

// Criar uma função que **calcule a média de notas** (com parâmetros e retorno).
console.log("Exercicio 1: Calcular a média de notas")
function calcularMedia(nota1 , nota2, nota3, nota4){
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    return media
}
let media = calcularMedia(8, 7, 9, 6)
console.log(`Sua média é ${media}`)
console.log('------------------------------')

// Criar uma função que **verifique se uma pessoa é maior de idade** (com parâmetro `idade` e retorno booleano).
console
function verificarMaiorIdade(idade){
    if (idade >= 18) {
            return true  
    } else {
            return false    
    }
}

let idade = 20;
console.log(`A pessoa é maior de idade? ${verificarMaiorIdade(idade)}`)
console.log("------------------------------")

// - Criar uma **calculadora** que receba dois números e um operador (`+`, , , `/`) e retorne o resultado.
function calculadora(num1, num2, operador){
    switch (operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*': 
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Operador inválido'
    }
}
let resultado = calculadora(5, 3, '*');
console.log(`O resultado da operação é: ${resultado}`)