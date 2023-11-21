import React from 'react'
import './changing.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip,Pagination, Autoplay } from "swiper";
import Change2 from '../../image/change2.jpg'
import Change3 from '../../image/change3.jpg'
import Change4 from '../../image/change4.jpg'

function changing() {
  return (
    <div className='changing'>
        <div className='container changing-wrapper'>
            <div className='changeInfo'>
                <h2>Ta'lim orqali hayotingizni o'zgartiring!</h2>
                <p>Biz bilan birgalikda barchasiga erishing! Zamonaviy dunyoni kelajak kasblari bilan ishg'ol qiling!</p>
                <a href='#contact' className='btn'>
                  <span className='btn-text-one'>Boshlang!</span>
                  <span className='btn-text-two'>Rahmat!</span>
                </a>
            </div>
            <div className='changeVideo'>
            <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[EffectFlip,Autoplay, Pagination]} 
                    className="mySwiper"
                    pagination={{
                         dynamicBullets: true,
                     }}
                >
                  <SwiperSlide>
                      <img src={Change2} alt='change'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={Change3} alt='change'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={Change4} alt='change'/>
                  </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default changing