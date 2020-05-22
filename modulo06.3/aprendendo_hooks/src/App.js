import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newtech, setNewTech] = useState('');

  const handleTech = useCallback(() => {
    setTech([...tech, newtech]);
    setNewTech('');
  }, [tech, newtech]);
  useEffect(() => {
    const storageTech = JSON.parse(localStorage.getItem('tech'));
    setTech(storageTech);
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong> <br />
      <input
        type="text"
        value={newtech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleTech}>
        ADD
      </button>
    </>
  );
}

export default App;
