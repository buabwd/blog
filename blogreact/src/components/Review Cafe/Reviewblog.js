import React from 'react'
import image1 from "../../image/cafe1.jpeg"
import image2 from "../../image/cafe2.jpeg"
import image3 from "../../image/cafe3.jpeg"
import image4 from "../../image/cafe4.jpeg"

const Review = () => {
    return (
        <div>
            
            <div class="blog-item">
                    <div class="blog-img">
                        <img src={image1} alt=" "/>

                        <span><i class="far fa-heart"></i></span>
                    </div>
                    <div class="blog-text">
                        <span>20 March , 2021</span>
                        <h2>Chuanpisamai cafe X Hamlet</h2>
                        <p>การปรับเปลี่ยนไปจากเดิมของ Chuanpisamai cafe X Hamlet บอกเลยว่าที่ใหม่ดูอบอุ่นขึ้น
                            เข้ามาได้ฟิลความโรแมนติก สไตล์ของชวนพิศมัย มีธรรมชาติ และสวนสวยๆ ไว้คอยต้อนรับลูกค้า
                            ที่นี่จะมีโซนเรือนกระจก ที่ตกแต่งด้วยพร๊อพแบบคุมธีมได้สวยมาก
                            ด้านนอกจะเป็นส่วนของอุโมงค์ต้นไผ่ สวนเล็กๆ ห้ามพลาดเด็ดขาด
                            ที่นี่มีเมนูเครื่องดื่มที่หลากหลาย แต่ละเมนูที่ตกแต่งมาอย่างสวยงาม เบเกอรี่อร่อย หอมๆ
                            อบจากเตาใหม่ๆ</p>

                        <p>#พิกัด อารีย์ซอย 3
                            เปิด เวลา 9.30-19.00น . หยุดวันจันทร์</p>

                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-img">
                        <img src={image2} alt=" "/>

                        <span><i class="far fa-heart"></i></span>
                    </div>
                    <div class="blog-text">
                        <span>20 March , 2021</span>
                        <h2>Bar Storia del Caffe</h2>
                        <p>ที่นี่ให้ความรู้สึกเหมือนอยู่ยุโรป เพราะสไตล์การตกแต่งที่ใช้ของเก่า
                            และสไตล์ของเฟอร์นิเจอร์ในร้าน
                            แถมด้วยความคลาสสิคของเมนูอาหารที่อยู่บนโต๊ะนั้นถูกออกแบบเป็นเหมือนหนังสือพิมพ์แทบลอยด์
                            ที่นี่มีทั้งชา กาแฟ ของหวาน และอาหาร เหมาะกับการนั่งชิลล์ จิบกาแฟ </p>

                        <p>#พิกัด ซอยอารีย์ 4 (ฝั่งเหนือ)</p>

                    </div>
                </div>
                
                <div class="blog-item">
                    <div class="blog-img">
                        <img src={image3} alt=" "/>

                        <span><i class="far fa-heart"></i></span>
                    </div>
                    <div class="blog-text">
                        <span>20 March , 2021</span>
                        <h2>Hookrajong café</h2>
                        <p>คาเฟ่สีขาวในเรือนกระจกใสล้อมรอบด้วยสวนเขียว
                            ให้ความรู้สึกโปร่งสบายตา แต่ไม่ร้อนเพราะรายล้อมด้วยสวนสีเขียว
                            นั่งได้ทั้งด้านในคาเฟ่และด้านนอก
                            ถ่ายรูปเล่นได้เพลินๆ
                            เครื่องดื่มขนมเป็นแบบโฮมเมด
                            ใครชอบฟีลกระจกใสในสวนเขียวต้องที่นี่เลย</p>
                        <p>#พิกัด 20 22 พระราม 3 ซอย 57 แขวง ช่องนนทรี เขต ยานนาวา กทม.</p>

                    </div>
                </div>
                
                <div class="blog-item">
                    <div class="blog-img">
                        <img src={image4} alt=" "/>

                        <span><i class="far fa-heart"></i></span>
                    </div>
                    <div class="blog-text">
                        <span>20 March , 2021</span>
                        <h2>Emmies Cafe</h2>
                        <p>คาเฟ่เรือนกระจกสีขาวที่มากับความโล่ง โปร่ง สบาย
                            ตัดกับความเขียวของต้นไม้ที่รายล้อมอยู่ทั่วร้าน
                            ที่นี่มีหลายฟังก์ชั่น จะมานั่งชิลล์ๆ ทานข้าว จิบกาแฟ หรือนั่งทำงานก็ได้
                            พื้นที่มลายโซน ทั้งindoor outdoor แยกไว้หลายส่วน มีชั้น 2
                            อาหารก็จะมีทั้งของคาวของหวานให้เลือกเยอะ
                            เดินถ่ายรูปชิลล์ๆก็ได้จะมู้ดโทนแบบคิวท์ๆ คลีนๆ</p>
                        <p>#พิกัด ถนน พระราม 9 ตัดใหม่ สวนหลวง กทม.</p>

                    </div>
                </div>
        </div>
        
    )
}

export default Review
