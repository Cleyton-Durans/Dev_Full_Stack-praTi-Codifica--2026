/*"Listas, filas e pilhas são tipos abstratos de dados. 
A implementação pode variar: com arrays, listas encadeadas, etc. 
O importante é entender as regras (contrato) de cada uma."*/

/*Empilhamento de pratos: O último prato colocado na pilha é o primeiro a ser retirado (LIFO - Last In, First Out).
Fila de atendimento: O primeiro cliente a chegar é o primeiro a ser atendido (FIFO - First In, First Out).*/

class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(item) { 
        this.itens.push(item); // Adiciona um item ao topo da pilha
    }

    desempilhar() {
        if (this.estaVazia()) {
            console.log("A pilha está vazia. Não é possível desempilhar.");
            return null;
        }
        return this.itens.pop(); // Remove e retorna o item do topo da pilha
    }

    estaVazia() {
        return this.itens.length === 0; // Verifica se a pilha está vazia
    }

    tamanho() {
        return this.itens.length; // Retorna o número de itens na pilha

    }

    topo() {
        if (this.estaVazia()) {
            console.log("A pilha está vazia. Não há topo.");
            return null;
        } else {
        return this.itens[this.itens.length - 1]; // Retorna o item do topo da pilha sem removê-lo
        } 
    }  

    imprimir() {
        console.log("Pilha: " + this.itens.join(", ")); // Imprime os itens da pilha
    }
}

// Exemplo de uso da pilha
let pilha = new Pilha(); // Cria uma nova pilha
pilha.empilhar(10); // Empilha o número 10
pilha.empilhar(20); // Empilha o número 20
pilha.empilhar(30); // Empilha o número 30
pilha.imprimir(); // Imprime a pilha atual
console.log("Desempilhando: " + pilha.desempilhar()); // Desempilha o item do topo e imprime
pilha.imprimir(); // Imprime a pilha após o desempilhamento
console.log("Topo da pilha: " + pilha.topo()); // Imprime o item do topo da pilha
