import React from 'react';
import Task from './Zadanie';

const ListaZadan = ({ zadania, zakonczZadanie, usunZadanie }) => {
  return (
    <ul className="lista-zadan">
      {zadania.map(task => (
        <Task
          key={task.id}
          task={task}
          zakonczZadanie={zakonczZadanie}
          usunZadanie={usunZadanie}
        />
      ))}
    </ul>
  );
};

export default ListaZadan;
