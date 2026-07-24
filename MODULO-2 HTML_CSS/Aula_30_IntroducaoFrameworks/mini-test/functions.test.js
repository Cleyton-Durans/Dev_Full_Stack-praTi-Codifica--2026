const { sum, ehPar } = require('./functions');

// Teste para verificar se um número é par
test ('Verificar se 4 é par', () => {
    expect(ehPar(4)).toBe(true);
});

// Teste para verificar se um número é ímpar
test ('Verificar se 5 é par', () => {
    expect(ehPar(5)).toBe(false);
});

// Teste para somar dois números
test ('Soma de 2 + 2', () => {
    expect(sum(2, 2)).toBe(4);
});