import React from "react";
import './Q1.css';

function Q1() {
    return (
        <div className="container2">
            <div className="rectangle1"></div>
            <div className="rectangle2"></div>
            <div className="_1Ask">
                Question 1/1
            </div>
            <div className="_1Asks">
                คุณคิดว่ารูปร่างของคุณจัดอยู่ในกลุ่มลักษณะรูปร่างแบบไหน?? 
            </div>
            <div className="line"></div>
            <div className="Number1">
                1
            </div>
            <div className="Number3">
                3
            </div>
            <div className="Number2">
                2
            </div>
            <div className="Number4">
                4
            </div>
            <button className="Button1_Ans1">
            ไหล่และสะโพกมีขนาดเท่ากันหรือใกล้เคียงกัน 
            เอวแคบและเห็นชัดเจน
            </button>
            <button className="Button1_Ans4">
            สะโพกกว้างช่วงบนของร่างกายเล็กกว่า
            เอวชัดเจนมีช่วงต้นขาและสะโพกที่เด่นชัด
            </button>
            <button className="Button1_Ans2">
            อกกว้างหรือไหล่กว้างกว่าสะโพก และมีเอวแคบกว่า ขามักจะเรียวยาว
            </button>
            <button className="Button1_Ans3">
            อก ไหล่ สะโพก และเอวมีขนาดเท่ากันทุกส่วน เอวไม่ชัดเจนหรือมีเอวตรง
            </button>
            <>
            <img src="/IMG1.png" alt="Decorative" className="i1_mage" />
            </>
            <>
            <img src="/IMG1_3.png" alt="Decorative" className="i1_3mage" />
            </>
        </div>
    );
}

export default Q1;
