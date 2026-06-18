/*> *Uma indústria tem 80 funcionários. Escreva um programa que leia 
**matrícula, nome e salário bruto** de cada um e emita um contracheque com:*

> - *Matrícula*
> - *Nome*
> - *Salário bruto*
> - *Desconto INSS (12%)*
> - *Salário líquido (bruto - INSS)* */

const PROMPT = require('prompt-sync')();
let funcionarios = [];

for (let i = 0; i < 2; i++) {
    let matricula = PROMPT(`Digite a matrícula do funcionário ${i + 1}: `);
    let nome = PROMPT(`Digite o nome do funcionário ${i + 1}: `);
    let salarioBruto = parseFloat(PROMPT(`Digite o salário bruto do funcionário ${i + 1}: `));

    let descontoINSS = salarioBruto * 0.12; // Calcula o desconto do INSS (12%)
    let salarioLiquido = salarioBruto - descontoINSS; // Calcula o salário líquido

    funcionarios.push({
        matricula: matricula,
        nome: nome,
        salarioBruto: salarioBruto,
        descontoINSS: descontoINSS,
        salarioLiquido: salarioLiquido
    });
}

// Emite o contracheque para cada funcionário
funcionarios.forEach(funcionario => {
    console.log("\n--- Contracheque ---");
    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário Bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Desconto INSS (12%): R$ ${funcionario.descontoINSS.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
});