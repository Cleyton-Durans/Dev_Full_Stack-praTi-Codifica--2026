import { useState } from 'react';

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React', concluida: false },
    { id: 2, texto: 'Estudar JavaScript', concluida: true },
    { id: 3, texto: 'Estudar HTML', concluida: false },
  ]);

  const [novaTarefa, setNovaTarefa] = useState('');

  // Função para adicionar uma nova tarefa
  const handleAddTarefa = () => {
    if (novaTarefa.trim() === '') return;
    const nova = {
      id: tarefas.length + 1,
      texto: novaTarefa,
      concluida: false,
    };
    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
  };

  // Função para remover uma tarefa
  const handleRemoveTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      {/* Input para adicionar nova tarefa */}
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTarefa}>Adicionar</button>

      {/* Lista de tarefas */}
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            {tarefa.texto}
            <button onClick={() => handleRemoveTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}