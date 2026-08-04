/*12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */
<<<<<<< HEAD:Exercicio_avaliativo1/exercicio12.js
prompt = require('prompt-sync')();
function calcularPesoIdeal(altura, sexo) {
    if (sexo === "masculino") {
        return 72.7 * altura -58
    }
    else if (sexo === "feminino") {
=======

function calcularPeso(altura, sexo) {
    if (sexo === 'masculino') {
        return 72.7 * altura - 58
    } else {
>>>>>>> 72eae1170718f86d8eed1879466b0d85bfd1957d:Exercicio_Avaliativo_1E2/exercicio12.js
        return 62.1 * altura - 44.7
    }
}

<<<<<<< HEAD:Exercicio_avaliativo1/exercicio12.js
let altura = parseFloat(prompt("Digite sua Altura:"))
let sexo = prompt("Digite seu sexo (masculino/feminino):")

let pesoIdeal = calcularPesoIdeal(altura, sexo)
console.log(`O peso ideal para uma pessoa do sexo ${sexo} com altura de ${altura} é: ${pesoIdeal.toFixed(2)}`)
=======
prompt = require('prompt-sync')()

let altura = parseFloat(prompt('Digite a altura: '))
let sexo = prompt('Digite o sexo (masculino/feminino): ')

let pesoIdeal = calcularPeso(altura, sexo)
console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)}`)
>>>>>>> 72eae1170718f86d8eed1879466b0d85bfd1957d:Exercicio_Avaliativo_1E2/exercicio12.js
