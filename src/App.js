import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Adicione uma tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleComplete(task.id)}>
              {task.text}
            </span>
            <div>
              <button
                style={{ marginRight: '5px' }}
                onClick={() => handleToggleComplete(task.id)}
              >
                {task.completed ? 'Desfazer' : 'Concluir'}
              </button>
              <button onClick={() => handleDelete(task.id)}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
