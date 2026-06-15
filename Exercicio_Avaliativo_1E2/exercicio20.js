/* 20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
<<<<<<< HEAD:Exercicio_avaliativo1/exercicio20.js
número de vezes que a string aparece no array. */
=======
número de vezes que a string aparece no array. */

function contarOcorrencias(array) {
    const contagem = {}

    for (const item of array) {
        if (contagem[item]) { // Se a chave já existe, incrementa o valor
            contagem[item]++
        } else {
            contagem[item] = 1 // Se a chave não existe, inicializa com 1
        }
    }
    return contagem
}

const arrayDeStrings = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]
const resultado = contarOcorrencias(arrayDeStrings)

console.log(resultado)
>>>>>>> 72eae1170718f86d8eed1879466b0d85bfd1957d:Exercicio_Avaliativo_1E2/exercicio20.js
