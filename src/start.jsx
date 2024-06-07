import React from 'react';
import './start.css';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate()
  return (
    <>
      <button className="start-button-shadow"></button>
      <button onClick={()=>navigate("/Q1")} className="start-button">
        START
      </button>
    </>
  );
};

const handleImageClick = () => {
  // ตัวอย่างการแสดงข้อความเมื่อคลิกที่รูป
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
        <img src="/startpic5.png" alt="Decorative" className="pic5-image" onClick={handleImageClick} />
      </div>
    </div>
  );
};

export default App;
