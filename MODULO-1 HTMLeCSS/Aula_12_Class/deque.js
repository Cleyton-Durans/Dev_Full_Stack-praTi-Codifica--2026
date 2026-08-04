/*2. Implementação de deque
Instruções:
● Implementar uma classe Deque que permita adicionar e remover elementos tanto na frente quanto no final da estrutura;
● A classe deve ter os métodos: addFront(element), addBack(element), removeFront(), removeBack(), peekFront(), peekBack(), isEmpty() e size();
● Criar um objeto da classe Deque e adicionar elementos em ambas as extremidades. */

class Deque {
    constructor() {
        this.itens = [];
    }

    addFront(element) {
        this.itens.unshift(element); // Adicionar um elemento no início do deque
    }

    addBack(element) {
        this.itens.push(element); // Adicionar um elemento no final do deque
    }

    removeFront() {
        if (this.isEmpty()) {
            return "Deque está vazia";;
        }
        return this.itens.shift(); // Remover o primeiro elemento
    }

    removeBack() {
        if (this.isEmpty() ) {
            return "Deque está vazia";
        }
        return this.itens.pop(); // Remover o último elemento
    }

    peekFront() {
        if (this.isEmpty() ) {
            return "Deque está vazia";
        }
        return this.itens[0]; // Retornar o primeiro elemento
    }

    peekBack() {
        if (this.isEmpty() ) {
            return "Deque está vazia";
        }
        return this.itens[this.itens.length - 1]; // Retornar o último elemento
    }

    isEmpty() {
        return this.itens.length === 0; // Verificar se o deque está vazio
    }

    size() {
        return this.itens.length; // Retornar o número de elementos no deque
    }
}

// Criar um objeto da classe Deque e adicionar elementos em ambas as extremidades.
const deque = new Deque(); // Criar um objeto da classe Deque
deque.addBack("Elemento 1"); // Adicionar um elemento no final do deque
deque.addFront("Elemento 2"); // Adicionar um elemento no início do deque
deque.addBack("Elemento 3"); // Adicionar um elemento no final do deque
deque.addFront("Elemento 4"); // Adicionar um elemento no início do deque
console.log(deque.itens); // Imprimir os elementos do deque
console.log(`Primeiro elemento: ${deque.peekFront()}`); // Imprimir o primeiro elemento do deque
console.log(`Último elemento: ${deque.peekBack()}`); // Imprimir o último elemento do deque
console.log(`Tamanho do deque: ${deque.size()}`); // Imprimir o tamanho do deque
console.log(`Removendo o primeiro elemento: ${deque.removeFront()}`); // Remover o primeiro elemento do deque
console.log(`Removendo o último elemento: ${deque.removeBack()}`);  // Remover o último elemento do deque
console.log(deque.itens); // Imprimir os elementos restantes do deque   