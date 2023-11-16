import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      if (!isNaN(key) || key === '/' || key === '*' || key === '-' || key === '+' || key === '.' || key === '=') {
        handleClick(key);
      } else if (key === 'Enter') {
        handleClick('=');
      } else if (key === 'Backspace') {
        setInput(input.slice(0, -1));
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="container p-4 border bg-secondary text-center rounded" style={{ maxWidth: '400px' }}>
        <h3 className='text-light mb-4'>Calculator</h3>
        <div className="calculator">
          <div className="row mb-2">
            <input
              className="form-control bg-dark text-light w-100 border mb-2"
              type="text"
              value={input}
              readOnly
              style={{ fontSize: '30px', height: '50px' }}
            />
          </div>
          <div className="row">
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('7')}>7</button>
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('8')}>8</button>
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('9')}>9</button>
            <button className="btn btn-warning col m-1" onClick={() => handleClick('/')}>/</button>
          </div>
          <div className="row">
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('4')}>4</button>
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('5')}>5</button>
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('6')}>6</button>
            <button className="btn btn-warning col m-1" onClick={() => handleClick('*')}>*</button>
          </div>
          <div className="row">
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('1')}>1</button>
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('2')}>2</button>
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('3')}>3</button>
            <button className="btn btn-warning col m-1" onClick={() => handleClick('-')}>-</button>
          </div>
          <div className="row">
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('0')}>0</button>
            <button className="btn btn-primary col-3 m-1" onClick={() => handleClick('.')}>.</button>
            <button className="btn btn-warning col-3 m-1" onClick={() => handleClick('+')}>+</button>
            <button className="btn btn-danger col m-1" onClick={() => handleClick('C')}>C</button>
          </div>
          <div className="row">
            <button className="btn btn-danger col m-1" onClick={() => setInput(input.slice(0, -1))}>Clear</button>
            <button className="btn btn-warning col m-1" onClick={() => handleClick('=', 'enter')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
