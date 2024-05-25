import React from "react";
import './Q1.css';

function Q1() {
    return (
        <div className="container">
            <div className="rectangle1"></div>
            <div className="rectangle2"></div>
            <div className="_1Ask">
                Question 1/7
            </div>
            <div className="_1Asks">
                เสื้อผ้าในตู้ของคุณมักจะมีขนาดที่เล็กกว่ากางเกง (ตัวอย่างเช่น S และ M) ใช่หรือไม่
            </div>
            <div className="line"></div>
            <div className="Number1">
                1
            </div>
            <div className="Number2">
                2
            </div>
            <button className="Button1_Ans1">
                ฉันคิดว่าเป็นเช่นนั้น
            </button>
            <button className="Button1_Ans2">
                ไม่ถึงขนาดนั้น
            </button>
        </div>
    );
}

export default Q1;
