import React, { useState} from 'react';
import './App.css';

 
function App () {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React', concluida: false },
    { id: 2, texto: 'Fazer excercios', concluida: false },
    { id: 3, texto: 'Praticar atividades', concluida: false}
  ]) ;
    const toggleConcluida = (id) => {setTarefas (tarefas.map((tarefa) => tarefa.id === id ?
      {...tarefa, concluida: ! tarefa.concluida } : tarefa )
      );
    };

    return (
      <div className='App' >
       <h1> Lista de Tarefas </h1>
       <ul>
        {tarefas.map((tarefa) => (
        <li 
        key={tarefa.id}
    className={tarefa.concluida ? 'concluida' : ''}
         onClick={() => toggleConcluida(tarefa.id)}
         >
          {tarefa.texto}
          </li>
          ))}
       </ul>
    </div>
  ) ;
}

export default App ;