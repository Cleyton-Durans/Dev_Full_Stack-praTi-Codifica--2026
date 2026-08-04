/* 12.  Implemente  uma  lista  ligada  simples  usando  nós  ({  valor,  proximo  }).  Crie  as 
funções  adicionar(tarefa),  remover(tarefa)  e  exibir() que percorre todos os nós. 
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e 
exiba a lista antes e depois. */

class ListaLigada {
  constructor() {
    this.cabeca = null;
  }

  adicionar(tarefa) {
    const novoNo = { valor: tarefa, proximo: null };

    if (!this.cabeca) {
      this.cabeca = novoNo;
    } else {
      let atual = this.cabeca;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novoNo;
    }
  }

  remover(tarefa) {
    if (!this.cabeca) return;

    if (this.cabeca.valor === tarefa) {
      this.cabeca = this.cabeca.proximo;
      return;
    }

    let atual = this.cabeca;
    while (atual.proximo) {
      if (atual.proximo.valor === tarefa) {
        atual.proximo = atual.proximo.proximo;
        return;
      }
      atual = atual.proximo;
    }
  }

  // Exibe todas as tarefas da lista
  exibir() {
    const tarefas = [];
    let atual = this.cabeca;
    while (atual) {
      tarefas.push(atual.valor);
      atual = atual.proximo;
    }
    console.log(`Tarefas: ${tarefas.join(" -> ")}`);
  }
}

// Simulando um gerenciador de tarefas
const gerenciador = new ListaLigada();

console.log("Adicionando 4 tarefas...");
gerenciador.adicionar("Estudar");
gerenciador.adicionar("Trabalhar");
gerenciador.adicionar("Comprar");
gerenciador.adicionar("Dormir");

console.log("\nLista antes da remoção:");
gerenciador.exibir();

console.log("\nRemovendo a tarefa 'Trabalhar'...");
gerenciador.remover("Trabalhar");

console.log("\nLista depois da remoção:");
gerenciador.exibir();