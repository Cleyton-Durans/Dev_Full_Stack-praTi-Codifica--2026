/* 2.  Crie  dois  objetos  representando  personagens  de  um  jogo,  cada  um  com  as 
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de 
cada  personagem  lado  a  lado  e  determine  qual  deles  tem  maior  poder  total 
(soma de vida + ataque + defesa). */

let personagem1 = {
    nome: "Personagem 1",
    vida: 100,
    ataque: 20,
    defesa: 10
    }

let personagem2 = {
    nome: "Personagem 2",
    vida: 80,
    ataque: 25,
    defesa: 15
    }

    for (let propriedade in personagem1) {
        console.log(`${propriedade}: ${personagem1[propriedade]}`) 
    }

    for (let propriedade in personagem2) {
        console.log(`${propriedade}: ${personagem2[propriedade]}`) 
    }

let poderTotal1 = personagem1.vida + personagem1.ataque + personagem1.defesa
let poderTotal2 = personagem2.vida + personagem2.ataque + personagem2.defesa    

console.log("_______________________________________")
console.log(`Poder total do personagem 1: ${poderTotal1}`)
console.log(`Poder total do personagem 2: ${poderTotal2}`)

if (poderTotal1 > poderTotal2) {
    console.log(`Personagem 1 tem o maior poder total: ${poderTotal1}`)
} else {
    console.log(`Personagem 2 tem o maior poder total: ${poderTotal2}`)
}