/* 10.  Implemente  uma  pilha  usando  um  array  para  simular  o  histórico  de  um 
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual() 
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a 
cada operação. */

let historico = [];

function visitar(pagina) {
  historico.push(pagina);
  console.log(`Visitou: ${pagina}`);
  console.log(`Página atual: ${paginaAtual()}`);
}

function voltar() {
  if (historico.length > 0) {
    const paginaRemovida = historico.pop();
    console.log(`Voltou de: ${paginaRemovida}`);
    console.log(`Página atual: ${paginaAtual()}`);
  } else {
    console.log("Não há páginas para voltar.");
  }
}

function paginaAtual() {
  if (historico.length > 0) {
    return historico[historico.length - 1];
  } else {
    return "Nenhuma página aberta.";
  }
}


visitar("google.com");
visitar("youtube.com");
visitar("github.com");
visitar("stackoverflow.com");

voltar();
voltar();

