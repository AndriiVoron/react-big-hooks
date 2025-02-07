import React, { useState } from 'react';
import './App.css';
import Main from './components/main';
import Alert from './components/alert';
import {AlertProvider} from './components/alertContext';

function App() {

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }

  console.log(counter);

  return (
    <AlertProvider>
      <div className="App container">
        <button onClick={handleClick}>Click</button>
        <Alert />
        <Main/>
      </div>
    </AlertProvider>
  );
}

export default App;
