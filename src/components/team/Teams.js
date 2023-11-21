import React from 'react'
import './team.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import User from '../../image/user.jpg'
import User1 from '../../image/photo_2023-05-24_15-42-46.JPG'
import User2 from '../../image/azizbbek.jpg'
import User3 from '../../image/muslimbek.jpg'
import Women from '../../image/women.jpg'

function Teams() {
  return (
    <div className='teams' id='team'>
        <div className='container teams-wrapper'>
            <h2 className='teamTitle title'>Bizning Jamoa</h2>
            <div className='teamMemberLists'>
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
                    <div className="teamItem">
                        <div className="teamImg">
                            <img src={User2} alt="Menejer" />
                        </div>
                        <div className="teamBody">
                            <h3>Jo'rayev Azizbek</h3>
                            <p>Menejer</p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="teamItem">
                        <div className="teamImg">
                            <img src={User1} alt="Menejer" />
                        </div>
                        <div className="teamBody">
                            <h3>Botirov Fahriddin</h3>
                            <p>Kompyuter savodxonligi</p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="teamItem">
                        <div className="teamImg">
                            <img src={User3} alt="Menejer" />
                        </div>
                        <div className="teamBody">
                            <h3>Muslimbek</h3>
                            <p>Kompyuter savodxonligi</p>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="teamItem">
                        <div className="teamImg">
                            <img src={User} alt="Menejer" />
                        </div>
                        <div className="teamBody">
                            <h3>Abdiqayumov Diyorbek</h3>
                            <p>FrontEnd (Ayti) Mentor</p>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="teamItem">
                        <div className="teamImg">
                            <img src={Women} alt="Menejer" />
                        </div>
                        <div className="teamBody">
                            <h3>Tursunova Nilufar</h3>
                            <p>IT English & English for Kids</p>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Teams