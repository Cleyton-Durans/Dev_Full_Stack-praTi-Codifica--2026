let numeros = [1, 2, 3, 4 , 5]
console.log(numeros[0]) // Acessando o primeiro elemento do vetor

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

// Adicionando um elemento ao final do vetor
numeros.push(6)
console.log(numeros)

// Removendo o ultimo elemento do vetor
numeros.pop()
console.log(numeros)

// Removendo o primeiro elemento do vetor
numeros.shift()
console.log(numeros)

// Adicionando um elemento ao inicio do vetor
numeros.unshift(0)
console.log(numeros)

// Removendo um elemento do vetor
delete numeros[1]
console.log(numeros)    

// Removendo um elemento do vetor
numeros.splice(1, 1)
console.log(numeros)    

let frutos = ['maçã', 'banana', 'laranja']
console.log(frutos)

// Concatenando dois vetores
let alimentos = numeros.concat(frutos)
console.log(alimentos)  

let marca = ['Nike', 'Adidas', 'Puma']

// Juntando os elementos do vetor em uma string
let marcaString = marca.join(', ')
console.log(marcaString)

// Adicionando uma nova marca ao vetor
marca.push('Rebook')
console.log(marca)

// Mostrando apenas um indice do vetor
console.log(marca[0]) // Mostra o primeiro elemento do vetor
console.log(marca[2]) // Mostra o terceiro elemento do vetor