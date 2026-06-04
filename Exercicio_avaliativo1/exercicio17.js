/* 17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade

    }
}

const pessoa = new Pessoa("Yasmin", 25)
pessoa.email = "yasmin@gmail"

console.log(`______________________________
    Os novos dados da pessoa são: 
    Nome: ${pessoa.nome},
    Idade: ${pessoa.idade}, 
    Email: ${pessoa.email}`)