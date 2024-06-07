import React from 'react';
import './answer2.css';

const answer2 = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="image-wrapper">
                    <img src="path/to/image" alt="Body shape illustration" className="image"/>
                </div>
                <div className="description">
                    <h1>รูปร่างของคุณคือ</h1>
                    <h2>รูปร่างสามเหลี่ยมคว่ำ</h2>
                    <p>คุณมีเอวคอดชัดเจน มีส่วนเว้าส่วนโค้งที่สวยงาม รูปร่างของคุณมีความสมดุลรับกันดี
                        เคล็ดลับการแต่งตัวของเราจะช่วยให้คุณเน้นจุดสวยละมุนไป</p>
                </div>
            </div>
            <div className="section">
                <h2>เสื้อปาดไหล่</h2>
                <div className="image-row">
                    <img src="path/to/image1" alt="Standard shirt 1" className="image"/>
                    <img src="path/to/image2" alt="Standard shirt 2" className="image"/>
                </div>
                <p>เสื้อปาดไหล่จะโชว์ไหล่ของคุณและดึงดูดความสนใจไปที่ใบหน้าที่สวยงามของคุณ 
                    นอกจากนี้ยังช่วยยืดลำตัวของคุณให้ยาวขึ้น ทำให้เกิดรูปทรงที่สง่างาม</p>
            </div>
            <div className="section">
                <h2>เดรสเกาะอก</h2>
                <div className="image-row">
                    <img src="path/to/image3" alt="Dress 1" className="image"/>
                    <img src="path/to/image4" alt="Dress 2" className="image"/>
                </div>
                <p>เดรสเกาะอกสามารถอกโชว์ไหล่สวยได้ในขณะที่เดรสแบบมีปีกจะช่วยเพิ่ม
                    ความคมชัดให้กับช่วงเอว และเพิ่มขนาดให้กับสะโพกของคุณ</p>
            </div>
        </div>
    );
}

export default Answer2;
