import React from 'react';
import './answer3.css';

const Answer3 = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="image-wrapper">
                    <img src="path/to/image" alt="Body shape illustration" className="image"/>
                </div>
                <div className="description">
                    <h1>รูปร่างของคุณคือ</h1>
                    <h2>รูปร่างสี่เหลี่ยมผืนผ้า</h2>
                    <p>คุณมีรูปร่างคล้ายหุ่นนางแบบ ไหล่ หน้าอก และเอวที่มีความกว้างใกล้เคียงกัน 
                        ทำให้มีรูปร่างที่สมส่วนเคล็ดลับการแต่งตัวของเราจะช่วยสร้างลุคซุปเปอร์โมเดลได้ด้วยตัวเอง</p>
                </div>
            </div>
            <div className="section">
                <h2>ชุดเดรสแขนตุ๊กตา</h2>
                <div className="image-row">
                    <img src="path/to/image1" alt="Standard shirt 1" className="image"/>
                    <img src="path/to/image2" alt="Standard shirt 2" className="image"/>
                </div>
                <p>ชุดเดรสแขนตุ๊กตาให้ความสนใจกับไหล่ของคุณในขณะที่เดรสช่วยเพิ่มมิติให้กับเอวและเพิ่ม
                    ขนาดให้กับสะโพกของคุณช่วยสร้างภาพลวงตาของรูปทรงนาฬิกา</p>
            </div>
            <div className="section">
                <h2>กางเกงยีนส์ขาม้า</h2>
                <div className="image-row">
                    <img src="path/to/image3" alt="Dress 1" className="image"/>
                    <img src="path/to/image4" alt="Dress 2" className="image"/>
                </div>
                <p>กางเกงยีนส์ขาม้าเหมาะกับรูปร่างของคุณที่สุดเนื่องจากกางเกงยีนส์ขาม้าที่บานเล็กน้อยบริเวณด้านล่าง
                    สามารถสร้างขนาดและเพิ่มเส้นโค้งให้กับรูปร่างสี่หลี่ยมจัตุรัสของคุณ</p>
            </div>
        </div>
    );
}

export default Answer3;
