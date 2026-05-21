/*
2 - Função com parâmetros: Criar uma função que receba dois números como parâmetros
e retorne a soma, subtração, multiplicação e divisão desses números.
Instruções:
● Criar uma função chamada soma que recebe dois parâmetros (a e b);
● A função deve retornar a soma dos dois parâmetros;
● Chamar a função passando dois números como argumentos e exibir o resultado no
console.

*/

function operacoes(a, b){
    let soma = a + b
    let subtracao = a - b
    let multiplicacao = a * b
    let divisao = a / b

    return  {
        soma: soma,
        subtracao: subtracao,
        multiplicacao: multiplicacao,
        divisao: divisao
    }
}

let resultado = operacoes(10, 5)

console.log(`A soma é: ${resultado.soma}`)
console.log(`A subtração é: ${resultado.subtracao}`)
console.log(`A multiplicação é: ${resultado.multiplicacao}`)
console.log(`A divisão é: ${resultado.divisao}`)
