// App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="icon"></div>
      </header>
      <section className="body-shape">
        <div className="title">
          รูปร่างของคุณคือ รูปร่างนาฬิกาทราย
        </div>
        <div className="description">
          <p>
            คุณมีเอวคอดชัดเจน มีส่วนเว้าส่วนโค้งที่สวยงาม
            รูปร่างของคุณมีความสมดุลรับกันดี
            เคล็ดลับการแต่งตัวของเราจะช่วยให้คุณเน้นสวยละมุนขึ้น
          </p>
          <div className="image-container">
            <img src="path_to_your_image.png" alt="Body Shape Illustration" />
          </div>
        </div>
      </section>
      <section className="standard-tops">
        <h2>เสื้อเชิ้ตทรงมาตรฐาน</h2>
        <div className="images">
          <img src="path_to_image1.jpg" alt="Standard Top 1" />
          <img src="path_to_image2.jpg" alt="Standard Top 2" />
        </div>
        <p>
          หนึ่งในเครื่องแต่งกายที่ดีที่สุดสำหรับหุ่นนาฬิกาทรายคือเสื้อเชิ้ตพอดีตัวแบบเรียบๆไม่เพียง
          ความคมจะทำให้ส่วนเว้าของร่างกายคุณดียิ่งขึ้น
          มันยังสามารถรักษาสมดุลตามธรรมชาติได้
        </p>
      </section>
      <section className="dresses">
        <h2>เดรสสัดรูป</h2>
        <div className="images">
          <img src="path_to_image3.jpg" alt="Dress 1" />
          <img src="path_to_image4.jpg" alt="Dress 2" />
        </div>
        <p>
          เดรสสัดรูปเน้นรูปทรงร่างกายธรรมชาติของคุณมันช่วยเสริมส่วนโค้งส่วนเว้าของคุณ
          และทำให้รูปร่างของคุณสวยอ่อนวัย โดยเน้นรูปทรงนาฬิกาทรายของคุณ
        </p>
      </section>
    </div>
  );
}

export default App;
