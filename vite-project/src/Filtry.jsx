import React from 'react';

const Filtry = ({ ustawFiltr, ustawionyFiltr }) => {
  return (//filtrowanie zadan w zależności od wybranego przycisku
    <div className="filtroguziki"> 
      <button onClick={() => ustawFiltr('wszystkie')} className={ustawionyFiltr === 'wszystkie' ? 'active' : ''}>Wszystkie</button>
      <button onClick={() => ustawFiltr('zakonczone')} className={ustawionyFiltr === 'zakonczone' ? 'active' : ''}>Zakończone</button>
      <button onClick={() => ustawFiltr('nzakonczone')} className={ustawionyFiltr === 'nzakonczone' ? 'active' : ''}>Niezakończone</button>
    </div>
  );
};

export default Filtry;
