/*12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */
prompt = require('prompt-sync')();
function calcularPesoIdeal(altura, sexo) {
    if (sexo === "masculino") {
        return 72.7 * altura -58
    }
    else if (sexo === "feminino") {
        return 62.1 * altura - 44.7
    }
}

let altura = parseFloat(prompt("Digite sua Altura:"))
let sexo = prompt("Digite seu sexo (masculino/feminino):")

let pesoIdeal = calcularPesoIdeal(altura, sexo)
console.log(`O peso ideal para uma pessoa do sexo ${sexo} com altura de ${altura} é: ${pesoIdeal.toFixed(2)}`)
