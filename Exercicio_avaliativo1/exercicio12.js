/*12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

function calcularPeso(altura, sexo) {
    if (sexo === 'masculino') {
        return 72.7 * altura - 58
    } else {
        return 62.1 * altura - 44.7
    }
}

prompt = require('prompt-sync')()

let altura = parseFloat(prompt('Digite a altura: '))
let sexo = prompt('Digite o sexo (masculino/feminino): ')

let pesoIdeal = calcularPeso(altura, sexo)
console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)}`)