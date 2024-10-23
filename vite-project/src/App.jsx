import React, { useState, useEffect } from 'react';
import ListaZadan from './ListaZadan';
import Dodaj from './Dodaj';
import Filtroguziory from './Filtry';

const App = () => {
  const [zadania, ustawZad] = useState([]);
  const [filter, ustawFiltr] = useState('wszystkie');

  useEffect(() => { //Załadowanie zadań 
    const zadaniaLoad = JSON.parse(localStorage.getItem('zadania'));
    if (zadaniaLoad) {
      ustawZad(zadaniaLoad);
    }
  }, []);

  useEffect(() => { //Zapisanie zadań w localstorage
    localStorage.setItem('zadania', JSON.stringify(zadania));
  }, [zadania]);

  const dodajZad = (nazwaZad) => { //Dodawanie zadan
    const noweZad = {
      id: Date.now(),
      name: nazwaZad,
      zakonczone: false
    };
    ustawZad([...zadania, noweZad]);
  };

  const zakonczZadanie = (id) => { //Oznaczanie zadań jako ukończone
    ustawZad(zadania.map(task =>
      task.id === id ? { ...task, zakonczone: !task.zakonczone } : task
    ));
  };

  const usunZadanie = (id) => { //Usuwanie zadań
    ustawZad(zadania.filter(task => task.id !== id));
  };

  const filtrowaneZadania = zadania.filter(task => { //Filtry
    if (filter === 'zakonczone') return task.zakonczone;
    if (filter === 'nzakonczone') return !task.zakonczone;
    return true;
  });

  return ( //Wyswietlenie 
    <div className="app-container">
      <h1>To-Do App</h1>
      <Dodaj dodajZad={dodajZad} />
      <Filtroguziory ustawFiltr={ustawFiltr} ustawionyFiltr={filter} />
      <ListaZadan zadania={filtrowaneZadania} zakonczZadanie={zakonczZadanie} usunZadanie={usunZadanie} />
    </div>
  );
};

export default App;
