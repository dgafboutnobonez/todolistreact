import React from 'react';
//Wyświetlanie pojedynczego zadania
const Task = ({ task, zakonczZadanie, usunZadanie }) => {
  return (
    <li className={`task-item ${task.zakonczone ? 'zakonczone' : ''}`}> 
      <span onClick={() => zakonczZadanie(task.id)}>
        {task.name}
      </span>
      <button onClick={() => usunZadanie(task.id)}>Usuń</button>
    </li>
  );
};

export default Task;
