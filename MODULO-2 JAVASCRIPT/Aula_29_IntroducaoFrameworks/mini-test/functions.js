// Função para somar dois números
function sum(a, b) {
    return a + b;
}
// Função para verificar se um número é par
 function ehPar(numero) {
    return numero % 2 === 0;
 }
 
// Exportar as funções para que possam ser importadas
module.exports = { sum, ehPar };