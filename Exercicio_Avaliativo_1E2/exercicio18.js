/* 18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
<<<<<<< HEAD:Exercicio_avaliativo1/exercicio18.js
propriedades que são arrays. */
=======
propriedades que são arrays. */

class Dados {
    constructor() {
        this.nome = "Yasmin"
        this.idade = 25
        this.hobbies = ["programar", "viajar", "cozinhar"]
        this.cursos = ["JavaScript", "Python", "Java"]
        this.profissao = ["Desenvolvedora Full Stack", "Customer Support Analyst", "Analista de Suporte"]
        this.telefone = "123456789", "987654321"
    }
}

function filtroArrays(objeto) {
    const objetoSomenteArrays = {}
    for (const chave in objeto) {
        if (Array.isArray(objeto[chave])) {
            objetoSomenteArrays[chave] = objeto[chave]
        }
    }
    return objetoSomenteArrays
}

const dados = new Dados()
const arraysFiltrados = filtroArrays(dados)

console.log(arraysFiltrados)
>>>>>>> 72eae1170718f86d8eed1879466b0d85bfd1957d:Exercicio_Avaliativo_1E2/exercicio18.js
