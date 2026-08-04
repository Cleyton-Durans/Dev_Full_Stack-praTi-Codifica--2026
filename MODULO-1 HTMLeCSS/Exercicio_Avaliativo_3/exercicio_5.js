/* 5.  Crie  um  objeto  representando  o  orçamento  mensal  de  uma  pessoa,  com 
categorias  como  alimentação,  transporte,  lazer  e  saúde,  cada  uma  com  valor 
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada 
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês. */

let orcamento = {
    alimentacao: { planejado: 100, gasto: 50 },
    transporte: { planejado: 50, gasto: 30 },
    lazer: { planejado: 340, gasto: 200 },
    saude: { planejado: 200, gasto: 150 }
};

let saldoTotal = 0;

for (let categoria in orcamento) {
    let planejado = orcamento[categoria].planejado;
    let gasto = orcamento[categoria].gasto;

    let saldo = planejado - gasto;
    saldoTotal += saldo;

    console.log("__________________________");
    console.log(`Categoria: ${categoria}`);
    console.log(`Planejado: R$ ${planejado}`);
    console.log(`Gasto: R$ ${gasto}`);
    console.log(`Saldo: R$ ${saldo}`);

    if (gasto <= planejado) {
        console.log("Status: Dentro do orçamento");
    } else {
        console.log("Status: Acima do orçamento");
    }

}