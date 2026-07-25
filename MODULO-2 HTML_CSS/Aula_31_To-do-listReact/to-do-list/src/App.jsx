// Importa o hook useState do React para gerenciar estado em componentes funcionais.
import { useState } from 'react';

// Define o componente principal da aplicação.
function App() {
  // Declara um estado chamado "todos" e uma função "seTodos" para atualizá-lo.
  // O estado inicial é um array de objetos, onde cada objeto representa uma tarefa.
  const [todos, seTodos] = useState([
    {
      id: 1,               // Identificador único da tarefa.
      text: 'Ir para a academia', // Texto da tarefa.
      categoria: 'Pessoal', // Categoria da tarefa (ex: Pessoal, Trabalho).
      feito: true          // Indica se a tarefa foi concluída (true) ou não (false).
    },
    {
      id: 2,
      text: 'Estudar React',
      categoria: 'Trabalho',
      feito: false
    },
    {
      id: 3,
      text: 'Fazer exercícios',
      categoria: 'Pessoal',
      feito: true
    }
  ]);

  /* Função para concluir uma tarefa */
  const concluirtarefa = (id) => {
    seTodos(todos.map(todo => todo.id === id ? { ...todo, feito: !todo.feito } : todo));
  }

  // Retorna a estrutura JSX que será renderizada na tela.
  return (
    // Div principal com estilos inline para padding e alinhamento de texto.
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Lista de Tarefas</h1> {/* Título da aplicação */}

      {/* Div que contém a lista de tarefas */}
      <div className="todo-list">
        {/* Itera sobre o array "todos" e renderiza um div para cada tarefa */}
        {todos.map((todo) => (
          <div className="todo">
            {/* Div que contém o conteúdo da tarefa */}
            <div className="conteudo">
              {/* Exibe o texto, categoria e status (✅ ou ❌) da tarefa e um checkbox para marcar como concluído */}
              <p>{todo.text} | {todo.categoria} | {todo.feito ? '✅' : '❌'} <input type="checkbox" checked={todo.feito} onChange={() => concluirtarefa(todo.id)} /></p>
            </div>
            {/* Botões para excluir e editar a tarefa (ainda não implementados) */}
            <button>Excluir</button>
            <button>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporta o componente App para que ele possa ser usado em outros arquivos.
export default App;