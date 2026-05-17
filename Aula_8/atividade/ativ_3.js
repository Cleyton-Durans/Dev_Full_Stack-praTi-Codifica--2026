/*
3. Função com parâmetros e retorno: Criar uma função que receba dois números e um
operador e retorne o resultado da operação.
Instruções:
Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
A função deve retornar o resultado da operação;
Chamar a função com diferentes operadores e exibir os resultados no console.
 */

function calculadora(numero1, numero2, operador) {
    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let multiplicacao = numero1 * numero2
    let divisao = numero1 / numero2

    return {
        soma: soma,
        subtracao: subtracao,
        multiplicacao: multiplicacao,
        divisao: divisao
    }
}

let resultado = calculadora(10, 5, '+')

console.log(`A soma é: ${resultado.soma}`)
console.log(`A subtração é: ${resultado.subtracao}`)
console.log(`A multiplicação é: ${resultado.multiplicacao}`)
console.log(`A divisão é: ${resultado.divisao}`)