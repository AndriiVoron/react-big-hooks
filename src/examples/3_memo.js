import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [color, setColor] = useState(false);

  const computed = useMemo(() => complexCompute(number), [number]);

  const styles = useMemo(() => ({
    color: color ? 'darkred' : 'darkgreen',
  }), [color]);

  useEffect(() => {
    console.log('styles change');
  }, [styles]);

  return (
    <div className="App">
      <h1 style={styles}>Render amount {computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>__+__</button>
      <button className="btn btn-info" onClick={() => setNumber(prev => prev - 1)}>__-__</button>
      <button className="btn btn-warning" onClick={() => setColor(prev => !prev)}>Color</button>
    </div>
  );
}

export default App;
