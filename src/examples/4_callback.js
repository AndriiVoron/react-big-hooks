import React, { useState, useCallback } from 'react';
import './App.css';
import ItemsList from './itemsList';

function App() {
  const [colored, setColored] = useState(false);
  const [number, setNumber] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'darkgreen',
  };

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(number).fill('').map((_, i) => `element ${i + indexNumber}`)
  }, [number]);

  return (
    <div className="App">
      <h1 style={styles}>Render amount {number}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>__+__</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Color</button>

      <ItemsList getItems={generateItemsFromAPI}/>
    </div>
  );
}

export default App;
