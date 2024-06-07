import React from 'react';
import './answer4.css';

const Answer4 = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="image-wrapper">
                    <img src="path/to/image" alt="Body shape illustration" className="image"/>
                </div>
                <div className="description">
                    <h1>รูปร่างของคุณคือ</h1>
                    <h2>รูปร่างลูกแพร์</h2>
                    <p>คุณมีเอวที่สมส่วน สะโพกและต้นขาที่อวบอิ่ม ซึ่งทำให้คุณมีหุ่นที่มีส่วนโค้งเว้า
                        ที่น่าดึงดูดใจเคล็ดลับการแต่งตัวของเราจะช่วยทำให้คุณดูมีออร่ามากขึ้น </p>
                </div>
            </div>
            <div className="section">
                <h2>ชุดมินิเดรสทรงเอ</h2>
                <div className="image-row">
                    <img src="path/to/image1" alt="Standard shirt 1" className="image"/>
                    <img src="path/to/image2" alt="Standard shirt 2" className="image"/>
                </div>
                <p>ชุดมินิเดรสทรงเอสามารถสร้างภาพลวงตาของเอวที่เพียวบางและสะโพกที่แคบลง 
                    ในขณะที่ชุดมินิเดรสอยู่ต่ำกว่าเข่า จะทำให้ดูตัวยาวขึ้นได้</p>
            </div>
            <div className="section">
                <h2>กางเกงทรงหลวมเอวสูง</h2>
                <div className="image-row">
                    <img src="path/to/image3" alt="Dress 1" className="image"/>
                    <img src="path/to/image4" alt="Dress 2" className="image"/>
                </div>
                <p>กางเกงเอวสูงสามารถเน้นเอวของคุณได้และกางเกงทรงหลวมจะมีทรงที่ตรงลงมา
                    จากส่วนที่กว้างที่สุดของสะโพกโดยไม่เน้นส่วนล่างของคุณ</p>
            </div>
        </div>
    );
}

export default Answer4;
