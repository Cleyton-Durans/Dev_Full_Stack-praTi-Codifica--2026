/*1. Desenhando um sistema de impressão (Fila de Impressão)
Instruções:
● Criar uma fila que simula o processo de uma fila de impressão;
● Adicionar tarefas de impressão (como "Imprimir Documento 1", "Imprimir Documento 2", etc.) na fila e, em seguida, desenfileirar as tarefas uma a uma, simulando a impressão;
● Imprimir no console o nome do documento sendo impresso a cada vez que uma tarefa for desenfileirar;
● Ao final, se a fila estiver vazia, imprimir uma mensagem indicando que não há mais tarefas na fila. */

class FilaDeImpressao {
    constructor() {
        this.fila = [];
    }

    adicionarTarefa(tarefa, prioridade = false) {
        if (prioridade) {
            this.fila.unshift(tarefa); // Adicionar tarefa com prioridade no início da fila
        }
        else {
            this.fila.push(tarefa); // Adicionar tarefa no final da fila
        }
    }

    imprimirTarefa() {
        if (this.fila.length == 0){
            console.log("Não há tarefa na fila");
            return;
        }
        const tarefa = this.fila.shift(); // Remover a primeira tarefa da fila
        console.log(`Imprimindo: ${tarefa}`);
    }
}

// Criar uma fila de impressão e adicionar tarefas
const filaDeImpressao = new FilaDeImpressao();
filaDeImpressao.adicionarTarefa("Imprimir Documento 1");
filaDeImpressao.adicionarTarefa("Imprimir Documento 2");
filaDeImpressao.adicionarTarefa("Imprimir Documento 3", true); // Adicionar com prioridade
filaDeImpressao.adicionarTarefa("Imprimir Documento 4");

// Simular a impressão das tarefas  

filaDeImpressao.imprimirTarefa(); // Imprime "Imprimir Documento 3" (prioridade)
filaDeImpressao.imprimirTarefa(); // Imprime "Imprimir Documento 1"
filaDeImpressao.imprimirTarefa(); // Imprime "Imprimir Documento 2"
filaDeImpressao.imprimirTarefa(); // Imprime "Imprimir Documento 4"
filaDeImpressao.imprimirTarefa(); // Imprime "Não há tarefa na fila"
