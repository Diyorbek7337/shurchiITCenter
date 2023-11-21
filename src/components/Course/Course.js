import React, {useState} from "react";
import "./course.css";
import Komp from "../../image/Rectangle 10-1.png";
import english from "../../image/Rectangle 10.png";
import IT from "../../image/Rectangle 10-2.png";
import kids from '../../image/Rectangle 9.png'
import { FaStar, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Modal from "./modal/modal";
import Modal1 from './modal/modal1'
import Modal2 from './modal/modal2'
import Modal3 from './modal/modal3'

function Course() {
   
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    return (
        <div className="course" id="course">
            <div className="container course-wrapper">
                <h2 className="advantageTitle title courseTitle">
                    Bizning kurslarimiz
                </h2>
                <Modal show={show1} onClose={() => setShow1(false)} cours={1}>
                    <div className="modalText">
                        IT (Ayti) kurslarimizdan maqsad nima? 
                        Biz bu kursimiz bilan tumanimiz yoshlarini zamonaviy kasblar bilan tanishtirib shu soha bo'yicha o'z faoliyatlarini yo'lga qo'yishda yordam bermoqchimiz. Hozirgi paytga kelib deyarli barcha yangi yaratilayotgan texnologiyalardan foydalanishadi. Ammo ularning qanday ishlashini tushunishmaydi. Bu esa zamon bilan hamnafas bo'lishimizda bizni ortda qoldiradi. Farzandlariz shunchaki  behuda telefon va kompyuter kovlab vaqtini ketkazmasin. Ularni birgalikda foydali yo'nalishga yo'naltiraylik. Befarq bo'lmang!!
                    </div>
                </Modal>
                <Modal1 show={show2} onClose={() => setShow2(false)}>
                    
                    <div className="modalText">
                    Kompyuter savodxonligi - Bizning bu kursimizdan maqsad nima?
                    Bu kursimizda biz Komyuterni bilmaganlarga, undan qanday foydalanishni o'rgatish, internetdan foydalanish, Word, Excel, Power Point, Google sheets, fayllarni bir papkadan boshqasiga o'tkazish, kompyuterdan boshqa bir qurilmaga o'tkazish yoki aksincha. Bu kursimiz kompyuterni ishlatishni oz-moz bilgan. Lekin Word, Excel, Power-point dasturlarini bilmaydigan va shu sababli davlat idoralariga ishga kiraolmayotganlar yoki ishi davomida manashu dasturlar bilan ko'p muammoga uchraydiganlar uchunham mos keladi.
                    </div>
                </Modal1>
                <Modal2 show={show3} onClose={() => setShow3(false)}>
                    
                    <div className="modalText">
                    Hozirgi yoshlar uchun Ingliz tilini bilishi juda ahamiyatli bo'lib qoldi. Biz shuning uchun IT English kursimizni tashkil qildik. 
Bu kursimiz bilan biz bolalarni universitetga tayyorlamaymiz.  Ularga til o'rganishda ko'proq erkinlik beramiz. Bu kursimizda bolalarga ko'proq reading, writing, speaking va listening qismlariga urg'u berilib darslar tashkillashtiriladi.
                    </div>
                </Modal2>
                <Modal3 show={show4} onClose={() => setShow4(false)}>
                    
                    <div className="modalText">
                    Ko'p o'quv markazlar Ingliz tilini ko'proq Oliy ta'lim dargohlarining kirish imtihonlari uchun tashkillashtirgan. Bu esa bolalarga ko'proq grammatika, yangi so'zlar, testlar va essaylar bilan ishlash kerak degani. Bular albatta katta bosim yuzaga keltiradi. Kichkintoy bolalar esa bu bosimga bardosh berishi qiyin boladi va ko'p hollarda Ingliz tilini o'rganishdan bezib qolishadi. Shuning uchun bizning o'quv markaz jajji farzandlarizni ham o'ylagan holda English for Kids kursini ham ochishga qaror qildi. Bu kursimizda bolalarga turli hil qiziqarli o'yinlar bilan tilga qiziqtirib o'rgatishga harakat qilamiz.
                    </div>
                </Modal3>
                <div className="courseBox">
                <Swiper 
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true} 
                    modules={[Navigation, Pagination]} 
                    className="mySwiper"
                    breakpoints={{
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
        }}
                    pagination={{
                         dynamicBullets: true,
                     }}
                >
                    <SwiperSlide>
                    <div className="courseItem" onClick={() => setShow1(true)}>
                        <div className="courseImg">
                            <img src={IT} alt="IT kurslari" />
                        </div>
                        <div className="courseBody">
                            <h3>IT (Ayti) kurslari</h3>
                            <div className="rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span className="count">(28)</span>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courseFooter">
                            <p>300.000</p>
                            <div className="vector">
                                <FaArrowRight className="vectorItem" />
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="courseItem" onClick={() => setShow2(true)}>
                        <div className="courseImg">
                            <img src={Komp} alt="komp kurslari" />
                        </div>
                        <div className="courseBody">
                            <h3>Kompyuter savodxonligi</h3>
                            <div className="rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span className="count">(15)</span>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courseFooter">
                            <p>200.000</p>
                            <div className="vector">
                                <FaArrowRight className="vectorItem" />
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="courseItem" onClick={() => setShow3(true)}>
                        <div className="courseImg">
                            <img src={english} alt="English kurslari" />
                        </div>
                        <div className="courseBody">
                            <h3>IT (Ayti) English kurslari</h3>
                            <div className="rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span className="count">(18)</span>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courseFooter">
                            <p>160.000</p>
                            <div className="vector">
                                <FaArrowRight className="vectorItem" />
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="courseItem" onClick={() => setShow4(true)}>
                        <div className="courseImg">
                            <img src={kids} alt="English kids kurslari" />
                        </div>
                        <div className="courseBody">
                            <h3>English for Kids kurslari</h3>
                            <div className="rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span className="count">(24)</span>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courseFooter">
                            <p>160.000</p>
                            <div className="vector">
                                <FaArrowRight className="vectorItem" />
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Course;
