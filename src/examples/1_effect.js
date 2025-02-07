import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });

  console.log('Console render...');

  useEffect(() => {
    console.log('render...');
  });
  useEffect(() => {
    console.log('set type...');
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
    return () => {
      console.log('clear type');
    }
  }, [type]);

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  }

  useEffect(() => {
    console.log('Component did maunt');

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, []);

  return (
    <div className="App">
      <h1>Resues {type}</h1>
      <button className="btn btn-success" onClick={() => setType('users')}>Users</button>
      <button className="btn btn-danger" onClick={() => setType('todos')}>Todo</button>
      <button className="btn btn-primary" onClick={() => setType('posts')}>Posts</button>

      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
