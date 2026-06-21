/* 9.  Crie  um  array  de  objetos onde cada objeto representa um contato com nome, 
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita 
buscar  um  contato  pelo nome usando for...of e exiba os dados encontrados ou 
uma mensagem de "não encontrado". */

let contratos = [
    {
        nome: "Joaquim",
        telefone: "1234-5678",
        email: "j0dIa@example.com"
    },
    {
        nome: "Maria",
        telefone: "9876-5432",
        email: "WVt3v@example.com"
    },
    {
        nome: "Pedro",
        telefone: "5555-5555",
        email: "8VHw5@example.com"
    }
]

contratos.forEach(contato => {
    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`)
})

let nomeBusca = "Maria";
let contatoEncontrado = false;

for (let contato of contratos) {
    if (contato.nome === nomeBusca) {
        console.log(`\n=== Contato Encontrado ===`);
        console.log(`Nome: ${contato.nome}`);
        console.log(`Telefone: ${contato.telefone}`);
        console.log(`Email: ${contato.email}`);

        contatoEncontrado = true;
        break;
    }
}

if (!contatoEncontrado) {
    console.log("\n=== Contato Não Encontrado ===");
}