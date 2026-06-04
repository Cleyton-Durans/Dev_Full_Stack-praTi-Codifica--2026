/*19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos.  */


class Objeto1 {
    constructor() {
        this.nome = "Yasmin"
        this.idade = 25
    }
}

class Objeto2 {
    constructor() {
        this.idade = 30
        this.profissao = "Desenvolvedora Full Stack"
    }
}

const obj1 = new Objeto1()
const obj2 = new Objeto2()



function combinarObjetos(obj1, obj2) {
    const objetoCombinado = { ...obj1, ...obj2 }
    return objetoCombinado
}

const resultado = combinarObjetos(obj1, obj2)

console.log(`Objeto combinado: ${JSON.stringify(resultado)}`)