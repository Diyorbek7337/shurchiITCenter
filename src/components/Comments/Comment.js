import React from 'react'
import './comment.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Pupil from '../../image/pupil.png'
import Mirjalol from '../../image/mirjalol.jpg'
import Akbar from '../../image/akbar.jpg'
import Abdimurod from '../../image/abdimurod.jpg'
import Mirzohid from '../../image/mirzohid.jpg'
import Mavlon from '../../image/mavlon.jpg'

function Comment() {
  return (
    <div className='comments'>
        <div className='container comments-wrapper'>
        <h2 className='commentTitle title'>O'quvchilarimizdan izohlar</h2>
        <div className='commentLists'>
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
                    <div className="commentItem">
                    <div className='commentHeader'>
                        <div className="commentImg">
                            <img src={Akbar} alt="Menejer" />
                        </div>
                        <div className="commentBody">
                            <h3>Sobirov AkbarAli</h3>
                            <p>Kollej talabasi</p>
                        </div>
                    </div>
                        <div className='commentContent'>
                            <p>Men uchun IT-Centerning asosiy afzalliklari — yosh va mehnatsevar jamoa boʻlib, bu yerda toʻliq demokratiya hukmronlik qiladi va miqyosi va ahamiyatiga ega boʻlgan ulkan loyihalar bor. Shuningdek, qulay va zamonaviy ofisda har bir IT ga qiziquvchi uchun zarur sharoit yaratilgan.</p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="commentItem">
                    <div className='commentHeader'>
                        <div className="commentImg">
                            <img src={Mirjalol} alt="Menejer" />
                        </div>
                        <div className="commentBody">
                            <h3>Qosimov Mirjalol</h3>
                            <p>O'quvchi</p>
                        </div>
                    </div>
                        <div className='commentContent'>
                            <p>IT (Ayti) Center texnologiya ishqibozlari uchun ajoyib imkoniyatlar va resurslarni taklif etadi. Xodimlar bilimli va har doim yordam berishga tayyor.</p>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="commentItem">
                    <div className='commentHeader'>
                        <div className="commentImg">
                            <img src={Abdimurod} alt="Menejer" />
                        </div>
                        <div className="commentBody">
                            <h3>Odinayev Abdimurod</h3>
                            <p>Kollej talabasi</p>
                        </div>
                    </div>
                        <div className='commentContent'>
                            <p>IT(Ayti) Centerida katta tajribaga ega bo'ldim. Ular menga texnik ko'nikmalarimni oshirishga yordam beradigan keng qamrovli o'quv dasturlarini taqdim etdilar.</p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="commentItem">
                    <div className='commentHeader'>
                        <div className="commentImg">
                            <img src={Mirzohid} alt="Menejer" />
                        </div>
                        <div className="commentBody">
                            <h3>Abdiqayumov Mirzohid</h3>
                            <p>O'quvchi</p>
                        </div>
                    </div>
                        <div className='commentContent'>
                            <p>"IT Center innovatsiyalar va hamkorlik markazidir. Bu hamfikr mutaxassislar bilan aloqa o'rnatish va sanoatning so'nggi tendentsiyalaridan xabardor bo'lish uchun ajoyib joy".</p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="commentItem">
                    <div className='commentHeader'>
                        <div className="commentImg">
                            <img src={Mavlon} alt="Menejer" />
                        </div>
                        <div className="commentBody">
                            <h3>Po'latov Mavlon</h3>
                            <p>O'quvchi</p>
                        </div>
                    </div>
                        <div className='commentContent'>
                            <p>"IT Center eng so'nggi jihozlar va yaxshi jihozlangan laboratoriya mavjud. Bu amaliy o'rganish va yangi texnologiyalar bilan tajriba o'tkazish uchun ajoyib muhit".</p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                    <div className="commentItem">
                    <div className='commentHeader'>
                        <div className="commentImg">
                            <img src={Pupil} alt="Menejer" />
                        </div>
                        <div className="commentBody">
                            <h3>Xolto'rayev Diyorbek</h3>
                            <p>O'quvchi</p>
                        </div>
                    </div>
                        <div className='commentContent'>
                            <p>"Men IT Centerning xilma-xillik va inklyuzivlikka sodiqligini qadrlayman. Ular har bir inson o'zini qadrli va hurmatli his qiladigan mehmondo'st muhit yaratadi".</p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="commentItem">
                    <div className='commentHeader'>
                        <div className="commentImg">
                            <img src={Pupil} alt="Menejer" />
                        </div>
                        <div className="commentBody">
                            <h3>Mo'minov Baxtiyor</h3>
                            <p>O'quvchi</p>
                        </div>
                    </div>
                        <div className='commentContent'>
                            <p>"IT Centerning amaliy mashg'ulotlari va seminarlari menga juda foydali bo'ldi. Ular keng mavzularni qamrab oldi va o'z ishimda qo'llashim mumkin bo'lgan amaliy tushunchalarni berdi".</p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="commentItem">
                    <div className='commentHeader'>
                        <div className="commentImg">
                            <img src={Pupil} alt="Menejer" />
                        </div>
                        <div className="commentBody">
                            <h3>Baxodirov Elyor</h3>
                            <p>O'quvchi</p>
                        </div>
                    </div>
                        <div className='commentContent'>
                            <p>"IT Centerning mijozlarga xizmat ko'rsatish darajasi yuqori. Ular sezgir, do'stona va har qanday muammo yoki tashvishlarni hal qilish uchun har doim qo'shimcha masofani bosib o'tishga tayyor."</p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="commentItem">
                    <div className='commentHeader'>
                        <div className="commentImg">
                            <img src={Pupil} alt="Menejer" />
                        </div>
                        <div className="commentBody">
                            <h3>Ergashov Ozodbek</h3>
                            <p>O'quvchi</p>
                        </div>
                    </div>
                        <div className='commentContent'>
                            <p>"IT Centerning hamkorlikdagi ish maydoni innovatsiyalar uchun boshpanadir. Ochiq joylashuv, qulay oʻrindiqlar va ilgʻor texnologiyalardan foydalanish imkoniyatlari gʻoyalar gullab-yashnashi mumkin boʻlgan ijodiy muhitni taʼminlaydi".</p>
                        </div>
                    </div>
                    </SwiperSlide> */}
                </Swiper>
        </div>
        </div>
    </div>
  )
}

export default Comment