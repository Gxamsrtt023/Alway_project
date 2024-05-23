import React from 'react';
import './start.css';

const ALWAY_PROJECT = () => {
  return (
    <div className="app" style={{ width: '800px', height: '600px', margin: '0 auto' }}>
      {/* เนื้อหาของแอป */}
    </div>
  );
};

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
      <img src="/startpic1.png" alt="Decorative" className="decorative-image" />
      <div className="image-container">
        <div className="pic2-shadow"></div>
        <img src="/startpic2.png" alt="Decorative" className="pic2-image" />
        <img src="/startpic3.png" alt="Decorative" className="pic3-image" />
        <div className="pic4-shadow"></div>
        <img src="/startpic4.png" alt="Decorative" className="pic4-image" />
      </div>
    </div>
  );
};

export default App;
