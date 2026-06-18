let alunos = [
    {
    // Primeiro aluno
    nome: "Juliana",    //string
    idade: 25,          //number
    matriculado: true,  //boolean
    "notas dos alunos": [8, 8, 9],   //array
    "endereço":{          //objeto
        cidade: "Porto Alegre",
        estado: "RS"
        }
    },

    // Segundo aluno
    {
    nome: "Fernando",    //string
    idade: 40,          //number
    matriculado: true,  //boolean
    "notas dos alunos": [6, 8, 9],   //array
    "endereço":{          //objeto
        cidade: "Porto Alegre",
        estado: "RS"
        }
    }
]

// Exibindo o nome de cada aluno com um loop for...of
for(let [chave, valor] of Object.entries(alunos)){
    console.log(`${valor.nome}`)
}