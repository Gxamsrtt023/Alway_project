import React from "react";
import './Q7.css';
import { FaFemale, FaMale } from 'react-icons/fa';

function Q7() {
    return (
    
        <div className="_7container">
            <div className="_7rectangle1"></div>
            <div className="_7rectangle2"></div>
            <div className="_7Ask">
                Question 7/7
            </div>
            <div className="_7Asks">
            เลือกสไตล์ที่คุณชื่นชอบเพื่อรับเคล็ดลับในการแต่งตัวในแบบที่คุณต้องการ
            </div>
            <div className="_7line"></div>
            <div className="_7Number1">
                1
            </div>
            <div className="_7Number2">
                2
            </div>
            <button className="Button7_Ans1">
                เสื้อผ้าสตรี
            <div className="iconfemale"><FaFemale /> </div>
            </button>
            <button className="Button7_Ans2">
                เสื้อผ้าบุรุษ
            <div className="iconmale"><FaMale /></div>
            </button>
            <>
            <img src="/IMG.png" alt="Decorative" className="i_mage" />
            </>
            <>
            <img src="/IMG_2.png" alt="Decorative" className="i_2mage" />
            </>
        </div>
    );
}

export default Q7;
