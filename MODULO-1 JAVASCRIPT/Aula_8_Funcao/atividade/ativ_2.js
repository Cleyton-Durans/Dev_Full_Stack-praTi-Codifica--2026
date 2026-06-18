/*
2. Função com parâmetros: Criar uma função que verifique se uma pessoa é maior de
idade ou menor de idade.
Instruções:
 Criar uma função chamada que receba um parâmetro (idade);
Se a idade for 18 ou mais, a função deve retornar a mensagem "Você é maior de idade";
Se a idade for menor que 18, a função deve retornar a mensagem "Você é menor de idade";
Chamar a função passando uma idade e exibir o resultado no console.
*/

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Você é maior de idade")
    } else {
        console.log("Você é menor de idade")
    }
}

let idadePessoa = 20
verificarIdade(idadePessoa) 