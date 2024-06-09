import React from 'react';
import './answer4.css';
import { useNavigate } from 'react-router-dom';

const Answer4 = () => {
    const navigate = useNavigate()
    return (
        <div className="contain-ans4">
             <img src="/บ้านans4.png" alt="Body shape illustration" onClick={()=>navigate("/")} className="hmans4"/>
            <div className="contain44-ans4">
            <div className="rectang-ans14"></div>
            <div className="rectang-ans24"></div>
            <div className="head-erans">
                <div className="wrap-ans4">
                    <img src="/ลูกแพร์.png" alt="Body shape illustration" className="Icn4"/>
                </div>
                <div className="descrip-answer4">
                    <h1>รูปร่างของคุณคือ</h1>
                    <h2>รูปร่างลูกแพร์</h2>
                    <img src="/รูปร่างลูกแพร์.png" alt="Standard shirt 1" className="IM44"/>
                    <div class="lin-4"></div>
                    <p>คุณมีเอวที่สมส่วน สะโพกและต้นขาที่อวบอิ่ม ซึ่งทำให้คุณมีหุ่นที่มีส่วนโค้งเว้าที่น่าดึงดูดใจ
                        เคล็ดลับการแต่งตัวของเราจะช่วยทำให้คุณดูมีออร่ามากขึ้น </p>
                </div>
            </div>
            </div>
            <div class="lin-4_4"></div>
            <div className="contain4-ans4">
            <div className="sect-ans4">
                <h2>ชุดมินิเดรสทรงเอ</h2>
                <div className="img-answer4rw">
                    <img src="/ชุดมินิเดรสทรงเอ.jpg" alt="Standard shirt 1" className="ig-ans"/>
                    <img src="/ชุดมินิเดรสทรงเอ2.jpg" alt="Standard shirt 2" className="ig-ans"/>
                </div>
                <p>ชุดมินิเดรสทรงเอสามารถสร้างภาพลวงตาของเอวที่เพียวบางและสะโพกที่แคบลง 
                    ในขณะที่ชุดมินิเดรสอยู่ต่ำกว่าเข่า จะทำให้ดูตัวยาวขึ้นได้</p>
            </div>
            <div className="sect-ans4">
                <h2>กางเกงทรงหลวมเอวสูง</h2>
                <div className="img-answer4rw">
                    <img src="/กางเกงทรงหลวมเอวสูง1.jpg" alt="Dress 1" className="ig-ans"/>
                    <img src="/กางเกงทรงหลวมเอวสูง2.jpg" alt="Dress 2" className="ig-ans"/>
                </div>
                <p>กางเกงเอวสูงสามารถเน้นเอวของคุณได้และกางเกงทรงหลวมจะมีทรงที่ตรงลงมา
                    จากส่วนที่กว้างที่สุดของสะโพกโดยไม่เน้นส่วนล่างของคุณ</p>
            </div>
            </div>
        </div>
    );
}

export default Answer4;
