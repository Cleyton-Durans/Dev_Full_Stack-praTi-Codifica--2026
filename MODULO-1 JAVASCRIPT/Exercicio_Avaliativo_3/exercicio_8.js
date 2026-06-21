/* 8.  Crie um array de objetos representando produtos com nome, preço e quantidade. 
Use  forEach  para  calcular  o  valor  total  em  estoque  de  cada  produto  (preço × 
quantidade)  e  exibir  um  relatório.  Ao  final,  exiba  o  valor  total  geral  de  todo  o 
estoque. */

let produtos = [
    { nome: "Mouse", preco: 30, quantidade: 20 },
    { nome: "Teclado", preco: 40, quantidade: 15 },
    { nome: "Monitor", preco: 100, quantidade: 5 },
    { nome: "Cadeira", preco: 200, quantidade: 3 }
]

let valorTotalEstoque = 0;

produtos.forEach(produto => {
    let valorTotal = produto.preco * produto.quantidade;
    console.log(`${produto.nome}: R$ ${valorTotal.toFixed(2)}`);
    valorTotalEstoque += valorTotal;
});

console.log(`\nValor total em estoque: R$ ${valorTotalEstoque.toFixed(2)}`);    