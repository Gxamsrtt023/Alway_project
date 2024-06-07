import React from 'react';
import './answer1.css';

const Answer1 = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="image-wrapper">
                    <img src="path/to/image" alt="Body shape illustration" className="image"/>
                </div>
                <div className="description">
                    <h1>รูปร่างของคุณคือ</h1>
                    <h2>รูปร่างนาฬิกาทราย</h2>
                    <p>คุณมีเอวคอดชัดเจน มีส่วนเว้าส่วนโค้งที่สวยงาม รูปร่างของคุณมีความสมดุลรับกันดี
                        เคล็ดลับการแต่งตัวของเราจะช่วยให้คุณเน้นจุดสวยละมุนไป</p>
                </div>
            </div>
            <div className="section">
                <h2>เสื้อเชิ้ตทรงมาตรฐาน</h2>
                <div className="image-row">
                    <img src="path/to/image1" alt="Standard shirt 1" className="image"/>
                    <img src="path/to/image2" alt="Standard shirt 2" className="image"/>
                </div>
                <p>หนึ่งในเครื่องแต่งกายที่ดีที่สุดสำหรับหุ่นนาฬิกาทรายคือเสื้อเชิ้ตพอดีตัวแบบเรียบๆ
                    ไม่เพียงความสบายจะทำให้มั่นใจน้อยของร่างกายคุณคับขันจึงสามารถรักษาลุคตามธรรมชาติได้</p>
            </div>
            <div className="section">
                <h2>เดรสสัดรูป</h2>
                <div className="image-row">
                    <img src="path/to/image3" alt="Dress 1" className="image"/>
                    <img src="path/to/image4" alt="Dress 2" className="image"/>
                </div>
                <p>เดรสสัดรปที่เน้นรูปร่างตามธรรมชาติของคุณนั้นช่วยเสริมส่วนโค้งส่วนเว้าของคุณ
                    และทำให้รูปร่างของคุณสวยยาวขึ้น โดยเน้นรูปร่างนาฬิกาทรายของคุณ</p>
            </div>
        </div>
    );
}

export default Answer1;
