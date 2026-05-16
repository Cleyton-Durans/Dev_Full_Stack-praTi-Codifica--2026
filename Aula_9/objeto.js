
let aluno = {
    nome: "Juliana",    //string
    idade: 25,          //number
    matriculado: true,  //boolean
    "notas dos alunos": [8, 8, 9],   //array
    "endereço":{          //objeto
        cidade: "Porto Alegre",
        estado: "RS"
    }
}

console.log(aluno["idade"])
aluno["idade"] = 28
console.log(aluno["idade"])
let propriedade = "nome"
console.log(aluno[propriedade])


