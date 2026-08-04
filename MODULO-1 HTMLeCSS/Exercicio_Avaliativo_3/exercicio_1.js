/* .  Crie  um  objeto  representando  um  produto  com  as  propriedades:  nome, preço, 
categoria  e quantidade em estoque. Use for...in para percorrer e exibir todas as 
propriedades  e  seus  valores.  Em  seguida,  adicione  uma  nova  propriedade 
desconto ao objeto e exiba o preço final calculado. */

let produto = {
    nome: "Teclado",
    preco: 50,
    categoria: "Eletronico",
    quantidade: 10
    }

    for (let propriedade in produto) {
        console.log(`${propriedade}: ${produto[propriedade]}`) 
    }

    produto.desconto = 0.15
    console.log(produto)


let precoFinal = produto.preco * (1 - produto.desconto);
console.log(`\nPreço original: ${produto.preco}`);
console.log(`Desconto: ${produto.desconto * 100}%`);
console.log(`Preço final: ${precoFinal}`);