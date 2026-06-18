/*14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
<<<<<<< HEAD:Exercicio_avaliativo1/exercicio14.js
R$350,00.*/
=======
R$350,00.*/

function lerDadosHabitantes() {
    const habitante = [
        { salarios: 2500, filhos: 2 },
        { salarios: 1800, filhos: 3 },
        { salarios: 3200, filhos: 1 },
        { salarios: 1500, filhos: 4 },
        { salarios: 4000, filhos: 0 }
    ]
    return habitante
}
function calcularSalarios(habitantes) {
    let somaSalarios = 0
    let somaFilhos = 0
    let maiorSalario = 0
    let contadorSalariosAte350 = 0

    for (const habitante of habitantes) {
        somaSalarios += habitante.salarios
        somaFilhos += habitante.filhos

        if (habitante.salarios > maiorSalario) {
            maiorSalario = habitante.salarios
        }
        if (habitante.salarios <= 350) {
            contadorSalariosAte350++
        }
    }

    const mediaSalarios = somaSalarios / habitantes.length
    const mediaFilhos = somaFilhos / habitantes.length
    const percentualSalariosAte350 = (contadorSalariosAte350 / habitantes.length) * 100

    return {
        mediaSalario: mediaSalarios,
        mediaFilhos: mediaFilhos,
        percentualSalariosAte350: percentualSalariosAte350,
        maiorSalario: maiorSalario

    }
}

const habitantes = lerDadosHabitantes()
const resultados = calcularSalarios(habitantes)

console.log(`A média do salário da população é: R$ ${resultados.mediaSalario.toFixed(2)}`)
console.log(`A média do número de filhos é: ${resultados.mediaFilhos.toFixed(2)}`)
console.log(`O maior salário é: R$ ${resultados.maiorSalario.toFixed(2)}`)
console.log(`O percentual de pessoas com salário até R$ 350,00 é: ${resultados.percentualSalariosAte350.toFixed(2)}%`)
>>>>>>> 72eae1170718f86d8eed1879466b0d85bfd1957d:Exercicio_Avaliativo_1E2/exercicio14.js
