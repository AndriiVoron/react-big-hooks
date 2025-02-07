import React, { useState } from 'react';
import './App.css';

function initialCOunter(){
  console.log('some calculation');
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => initialCOunter());

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  });
  
  const increment = () => {
    // setCounter(counter+1);
    // setCounter(counter+1);
    setCounter(prev => prev+1);
    setCounter(prev => prev+1);
  };
  const decriment = () => setCounter(counter-1);

  const UpdateTitle = () => {
    setState(prev => {
      return {
        ...prev,
        title: 'new name',
      }
    });
  }

  return (
    <div className="App">
      <h1>counterer {counter}</h1>
      <button className="btn btn-success" onClick={increment}>Add</button>
      <button className="btn btn-danger" onClick={decriment}>Dec</button>
      <button className="btn btn-default" onClick={UpdateTitle}>Change name</button>
      
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
