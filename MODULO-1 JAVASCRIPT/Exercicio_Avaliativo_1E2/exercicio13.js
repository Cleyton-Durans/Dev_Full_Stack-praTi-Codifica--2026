/*13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
<<<<<<< HEAD:Exercicio_avaliativo1/exercicio13.js
redução do INSS).*/
=======
redução do INSS).*/

function lerTabelaFuncionarios() {
    const funcionarios = [
        { matricula: '001', nome: 'João Silva', salarioBruto: 3000 },
        { matricula: '002', nome: 'Maria Santos', salarioBruto: 3500 },
        { matricula: '003', nome: 'Carlos Oliveira', salarioBruto: 2800 },
        { matricula: '004', nome: 'Ana Costa', salarioBruto: 3200 },
        { matricula: '005', nome: 'Pedro Almeida', salarioBruto: 4000}
    ]
    return funcionarios
}

function calcularContracheque(matricula, nome, salarioBruto) {
    const reducaoINSS = salarioBruto * 0.12
    const salarioLiquido = salarioBruto - reducaoINSS
    return {
        matricula: matricula,
        nome: nome,
        salarioBruto: salarioBruto,
        reducaoINSS: reducaoINSS,
        salarioLiquido: salarioLiquido
    }
}

const funcionarios = lerTabelaFuncionarios()

for (const funcionario of funcionarios) {
    const contrachequue = calcularContracheque(
        funcionario.matricula,
        funcionario.nome,
        funcionario.salarioBruto
    )
    console.log(
        `Matrícula: ${contrachequue.matricula}
        Nome: ${contrachequue.nome}
        Salário Bruto: R$ ${contrachequue.salarioBruto.toFixed(2)}
        Desconto INSS (12%): R$ ${contrachequue.reducaoINSS.toFixed(2)}
        Salário Líquido: R$ ${contrachequue.salarioLiquido.toFixed(2)}`

    )
    console.log('-----------------------------')
}
>>>>>>> 72eae1170718f86d8eed1879466b0d85bfd1957d:Exercicio_Avaliativo_1E2/exercicio13.js
