import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>รูปทรงของคุณคือ</h1>
        <div className="body-shape">
          <img src="path/to/image.png" alt="Body Shape" className="body-image" />
          <h2>รูปร่างนาฬิกาทราย</h2>
          <p>
            คุณมีเอวคอดชัดเจน มีส่วนเว้าส่วนโค้งที่สวยงาม รูปร่างของคุณมีความสมดุลรับกันดี
            เคล็ดลับการแต่งตัวของเราจะช่วยให้คุณเน้นจุดสวยและปกปิด
          </p>
        </div>
      </div>

      <section className="clothing-section">
        <h2>เสื้อเชิ้ตทรงมาตรฐาน</h2>
        <div className="clothing-item">
          <img src="path/to/image1.png" alt="Clothing 1" />
          <p>
            หนึ่งในเครื่องแต่งกายที่ดีที่สุดสำหรับหนูหุ่นนาฬิกาทรายคือเสื้อเชิ้ตพอดีตัวแบบเรียบๆไม่
            เพียงความน่าจะทำให้สัดส่วนเด่นของร่างกายคุณเด่นขึ้น
            ยังสามารถรักษาสมดุลตามธรรมชาติได้
          </p>
        </div>
        <div className="clothing-item">
          <img src="path/to/image2.png" alt="Clothing 2" />
          <p>
            หนึ่งในเครื่องแต่งกายที่ดีที่สุดสำหรับหนูหุ่นนาฬิกาทรายคือเสื้อเชิ้ตพอดีตัวแบบเรียบๆไม่
            เพียงความน่าจะทำให้สัดส่วนเด่นของร่างกายคุณเด่นขึ้น
            ยังสามารถรักษาสมดุลตามธรรมชาติได้
          </p>
        </div>
      </section>

      <section className="dress-section">
        <h2>เดรสสัดรูป</h2>
        <div className="dress-item">
          <img src="path/to/dress1.png" alt="Dress 1" />
          <p>
            เดรสสัดรูปที่เน้นรูปร่างตามธรรมชาติของคุณมันช่วยเสริมส่วนโค้งส่วนเว้าของคุณ
            และทำให้รูปร่างของคุณดูเยาว์วัย โดยเน้นรูปร่างนาฬิกาทรายของคุณ
          </p>
        </div>
        <div className="dress-item">
          <img src="path/to/dress2.png" alt="Dress 2" />
          <p>
            เดรสสัดรูปที่เน้นรูปร่างตามธรรมชาติของคุณมันช่วยเสริมส่วนโค้งส่วนเว้าของคุณ
            และทำให้รูปร่างของคุณดูเยาว์วัย โดยเน้นรูปร่างนาฬิกาทรายของคุณ
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
