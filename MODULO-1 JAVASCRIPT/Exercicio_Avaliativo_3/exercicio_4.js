/* 4.  Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade 
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para 
listar  o  inventário  completo.  Permita  que  o  usuário informe um item para usar: 
reduza a quantidade em 1 ou exiba "item esgotado" se for zero. */

let inventario = {
    espada: 1,
    pocao: 5,
    escudo: 2
}

for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`)
}

prompt = require('prompt-sync')()
let itemUsar = prompt("Qual item deseja usar? ")

if (inventario[itemUsar] > 0) {
    inventario[itemUsar]--
    console.log(`Usando ${itemUsar}`)
} else {
    console.log("Item esgotado")
}