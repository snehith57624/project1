
import './App.css';
import { React, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(localStorage.getItem('count')||0);
  const increase = () => {
    setCounter(count => parseInt(count) + 1);
    localStorage.setItem('count', parseInt(counter)+1);
  };

  const Reset = () => {
    setCounter(count => 0);
    localStorage.setItem('count', 0);
  };
  // const saveCounter = () => {
  //   localStorage.setItem('count', counter);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={increase}>Increment Counter</button>
          <button className="control__btn" onClick={Reset}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
