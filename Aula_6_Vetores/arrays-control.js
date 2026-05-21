/* 
    Resumo
for
Controle total do loop.

forEach
Percorre arrays de forma simples.

for...in
Percorre propriedades de objetos.

for...of
Percorre valores de arrays/listas.  */

// O for...in é usado para percorrer propriedades de objetos.
console.log("Usando for...in para percorrer as propriedades de um objeto:")
let pessoa= {
    nome: "Cleyton",
    idade: 26,
    cidade: "Rio de Janeiro"
}
for (let chave in pessoa){
    console.log(` ${chave}: ${pessoa[chave]}`)
    
}
console.log("____________________")

// Somar os preços usando .length para controlar o loop.
console.log("Somar os preços usando .length para controlar o loop:")
let precos = [10, 20, 30]
let total = 0

for(let i = 0; i < precos.length; i++){
    total += precos[i]
}
console.log(`Total: ${total}`)
console.log("____________________")

// Usando for...of para percorrer os valores do array.
console.log("Usando for...of para percorrer os valores do array:")
frutas = ["maçã", "banana", "goiaba"]
for (let fruta of frutas){
    console.log(fruta)
}
console.log("____________________")

// Usando forEach para percorrer o array.
console.log("Usando forEach para percorrer o array:")
let computadores = ["Dell" , "HP", "Lenovo"]
computadores.forEach(function(computador){
    console.log(computador)
})
console.log("____________________")
