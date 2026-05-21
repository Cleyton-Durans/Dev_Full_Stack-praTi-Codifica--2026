let numeros = [4, 2, 8, 4, 5, 3, 10, 9]
let quantidadePares = 0

for (let pos = 0; pos < numeros.length; pos++){
    if (numeros[pos] % 2 == 0 ){
         quantidadePares = quantidadePares + 1
        // quantidadePares++
    }
}
console.log(`Quantidade de números pares: ${quantidadePares}`)
console.log(`Quantidade de números: ${numeros.length}`)