/* 16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
<<<<<<< HEAD:Exercicio_avaliativo1/exercicio16.js
quantidade de elementos negativos da linha correspondente de M. */
=======
quantidade de elementos negativos da linha correspondente de M. */

class Matriz {
    constructor(dados) { // dados é uma matriz bidimensional (array de arrays)
        this.dados = dados
    }
    
    contarNegativosPorLinha() {
        const vetorC = []
        
        for (let i = 0; i < this.dados.length; i++) {
            let quantidade = 0
            for (let j = 0; j < this.dados[i].length; j++) {
                if (this.dados[i][j] < 0) {
                    quantidade++
                }
            }
            vetorC[i] = quantidade
        }
        
        return vetorC
    }
    
    imprimir() {
        console.log("Matriz:")
        this.dados.forEach(linha => console.log(linha))
    }
}

class Vetor {
    constructor(dados) {
        this.dados = dados
    }
    
    imprimir(nome) {
        console.log(`Vetor ${nome}:`, this.dados)
    }
}

// Programa principal
const M = new Matriz([
    [10, -5, 20, -3, 15, -8, 12, 7],
    [-2, 18, 25, 30, -1, 40, 45, 50],
    [5, 10, 15, 20, 25, 30, 35, 40],
    [-10, -20, -30, 5, 10, -40, 15, 20],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, -5, -6, -7, -8]
])

M.imprimir()
const C = new Vetor(M.contarNegativosPorLinha())
C.imprimir('C')
>>>>>>> 72eae1170718f86d8eed1879466b0d85bfd1957d:Exercicio_Avaliativo_1E2/exercicio16.js
