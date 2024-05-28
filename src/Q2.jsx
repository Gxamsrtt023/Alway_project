import React from "react";
import './Q2.css';

function Q2() {
    return (
        <div className="_2container">
            <div className="_2rectangle1"></div>
            <div className="_2rectangle2"></div>
            <div className="_2Ask">
                Question 2/7
            </div>
            <div className="_2Asks">
            คุณคิดว่าเอวของคุณมีขนาดเล็กกว่าสะโพกหรือไม่?
            </div>
            <div className="_2line"></div>
            <div className="_2Number1">
                1
            </div>
            <div className="_2Number2">
                2
            </div>
            <button className="Button2_Ans1">
                ฉันคิดว่าเป็นเช่นนั้น
            </button>
            <button className="Button2_Ans2">
                ไม่ถึงขนาดนั้น
            </button>
            <>
            <img src="/IMG2.png" alt="Decorative" className="i2_mage" />
            </>
            <>
            <img src="/IMG2_2.png" alt="Decorative" className="i2_2mage" />
            </>
        </div>
    );
}

export default Q2;
