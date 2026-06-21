/* 11.  Implemente  uma  fila  usando  um  array  para  simular  o  atendimento  de  uma 
clínica.  Crie  as  funções  chegarPaciente(nome)  (enqueue),  chamarProximo() 
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3, 
exibindo o estado da fila a cada operação. */

class FilaClinica {
  constructor() {
    this.fila = [];
  }

  chegarPaciente(nome) {
    this.fila.push(nome);
    console.log(`Paciente ${nome} chegou.`);
    this.exibirFila();
  }

  chamarProximo() {
    if (this.fila.length > 0) {
      const proximoPaciente = this.fila.shift();
      console.log(`Atendendo: ${proximoPaciente}`);
      this.exibirFila();
    } else {
      console.log("Não há pacientes na fila.");
    }
  }

  exibirFila() {
    const estadoFila = this.fila.length > 0 ? this.fila.join(", ") : "Fila vazia.";
    console.log(`Fila atual: ${estadoFila}`);
  }
}

const clinica = new FilaClinica();

clinica.chegarPaciente("João");
clinica.chegarPaciente("Maria");
clinica.chegarPaciente("Carlos");
clinica.chegarPaciente("Ana");
clinica.chegarPaciente("Pedro");

clinica.chamarProximo();
clinica.chamarProximo();
clinica.chamarProximo();