// Array para armazenar itens do carrinho
let carrinho = [];

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

// Função para limpar o carrinho
function limparCarrinho() {
  carrinho = [];
  atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
  const itensCarrinho = document.getElementById('itensCarrinho');
  itensCarrinho.innerHTML = '';

  if (carrinho.length === 0) {
    itensCarrinho.innerHTML = '<p>O carrinho está vazio.</p>';
    return;
  }

  // Criar lista de itens
  const lista = document.createElement('ul');
  lista.className = 'list-group';

  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      ${item.nome}
      <span class="badge bg-primary rounded-pill">R$ ${item.preco.toFixed(2)}</span>
    `;
    lista.appendChild(li);
  });

  // Adicionar total
  const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
  const liTotal = document.createElement('li');
  liTotal.className = 'list-group-item d-flex justify-content-between align-items-center fw-bold';
  liTotal.innerHTML = `
    Total
    <span class="badge bg-success rounded-pill">R$ ${total.toFixed(2)}</span>
  `;
  lista.appendChild(liTotal);

  itensCarrinho.appendChild(lista);
}