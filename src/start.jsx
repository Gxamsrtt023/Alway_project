import React from 'react';
import './start.css';

const Square = ({ color }) => {
  return (
    <div className={`square ${color}`}>
      <span></span>
    </div>
  );
};

const StartButton = () => {
  return (
    <>
      <button className="start-button-shadow"></button>
      <button className="start-button">
        START
      </button>
    </>
  );
};

const App = () => {
  return (
    <div className="app">
      <div className="pink"></div>
      <Square color="green" />
      <StartButton />
    </div>
  );
};

export default App;
