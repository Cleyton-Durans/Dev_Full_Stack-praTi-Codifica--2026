/* 21. Suponha que você tem um array de objetos onde cada objeto representa uma venda 
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total 
de vendas por vendedor.*/


const vendas = [
    { vendedor: "Yasmin", valor: 1500 },
    { vendedor: "Carlos", valor: 2000 },
    { vendedor: "Yasmin", valor: 1800 },
    { vendedor: "Maria", valor: 1200 },
    { vendedor: "Carlos", valor: 2500 },
    { vendedor: "Yasmin", valor: 2200 },
    { vendedor: "Maria", valor: 1600 }
]

function sumarizarVendasPorVendedor(vendas) {
    const totalPorVendedor = {}
    
    for (const venda of vendas) {
        if (totalPorVendedor[venda.vendedor]) {
            totalPorVendedor[venda.vendedor] += venda.valor
        } else {
            totalPorVendedor[venda.vendedor] = venda.valor
        }
    }
    
    return totalPorVendedor
}

const resultado = sumarizarVendasPorVendedor(vendas)
console.log(resultado)
