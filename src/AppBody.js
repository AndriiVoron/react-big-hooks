import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/main';
import Alert from './components/alert';
import {AlertProvider} from './components/alertContext';

function App() {
  const [counter, setCounter] = useState(0);
  console.log('render 0') 

  const handleClick = () => {
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }
  console.log(counter);

  useEffect(() => {
    console.log('render 1') 
  })
  useEffect(() => {
    console.log('render 2') 
  }, [])
  useEffect(() => {
    console.log('render 3') 
  }, [counter])
  return (
    <AlertProvider>
      <div className="App container">
        <button onClick={handleClick}>Click</button>
        <h4>{counter}</h4>
        <Alert />
        <Main/>
      </div>
    </AlertProvider>
  );
}

export default App;
