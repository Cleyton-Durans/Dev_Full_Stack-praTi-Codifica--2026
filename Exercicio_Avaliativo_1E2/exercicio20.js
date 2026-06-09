/* 20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
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