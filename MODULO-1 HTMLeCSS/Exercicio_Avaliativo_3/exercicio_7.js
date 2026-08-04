/* 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar 
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado.  Use 
forEach para calcular e exibir separadamente a média dos aprovados e a média 
dos reprovados. */

let alunos = [
    { nome: "Aluno 1", nota: 7 },
    { nome: "Aluno 2", nota: 8 },
    { nome: "Aluno 3", nota: 6 },
    { nome: "Aluno 4", nota: 9 },
    { nome: "Aluno 5", nota: 5 },
    { nome: "Aluno 6", nota: 7 }
];

let aprovados = [];
let reprovados = [];
let mediaAprovados = 0;
let mediaReprovados = 0;

for (let aluno of alunos) {
    if (aluno.nota >= 7) {
        aprovados.push(aluno);
        mediaAprovados += aluno.nota;
    } else {
        reprovados.push(aluno);
        mediaReprovados += aluno.nota;
    }
}

mediaAprovados /= aprovados.length;
mediaReprovados /= reprovados.length;

console.log("Aprovados:", aprovados);
console.log("Reprovados:", reprovados);
console.log("Média dos aprovados:", mediaAprovados);
console.log("Média dos reprovados:", mediaReprovados);