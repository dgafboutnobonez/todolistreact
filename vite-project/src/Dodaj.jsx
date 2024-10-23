import React, { useState } from 'react';

const Dodaj = ({ dodajZad }) => {
  const [nazwaZad, ustawNazweZad] = useState('');
  const [error, ustawError] = useState('');

  const handleSubmit = (e) => { //Walidacja
    e.preventDefault();
    if (nazwaZad.trim() === '') {
      ustawError('Proszę podać nazwę zadania.');
      return;
    }
    dodajZad(nazwaZad.trim());
    ustawNazweZad('');
    ustawError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nazwaZad}
        onChange={(e) => ustawNazweZad(e.target.value)}
        placeholder="Dodaj nowe zadanie"
      />
      <button type="submit">Dodaj</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Dodaj;
