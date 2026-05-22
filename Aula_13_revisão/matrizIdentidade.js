/*Crie um programa que gere uma matriz identidade 7x7 (1 na diagonal principal, 0 nos demais).*/

let matrizIdentidade = [];
let n = 7;

for (let i = 0; i < n; i++) {
    matrizIdentidade[i] = []; //cria uma nova linha para a matriz
    for (let j = 0; j < n; j++) {
        if (i === j) {
            matrizIdentidade[i][j] = 1; //atribui 1 na diagonal principal
        } else {
            matrizIdentidade[i][j] = 0; //atribui 0 nos demais elementos
        }
    }
}

console.log("Matriz Identidade 7x7:"); 
for (let i = 0; i < n; i++) { 
    console.log(matrizIdentidade[i].join(" ")); //imprime cada linha da matriz
}
