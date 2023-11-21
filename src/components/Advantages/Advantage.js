import React from 'react'
import './advantage.css'
import Komp from '../../image/pc1.e972278e.svg'
import Master from '../../image/icon-master-star.03e5bec5.svg'
import Target from '../../image/icon-target.7a203beb.svg'
import Meet from '../../image/meeting.7a70fb0c.svg'
import Nazariya from '../../image/practise.6bc9ecf9.svg'
import Record from '../../image/recording.svg'
import Sertificate from '../../image/sertificate.03e1fce1.svg'

function Advantage() {
  return (
    <div className='advantage' id='about'>
        <div className='container advantage-wrapper'>
            <h2 className='advantageTitle title'>Bizning afzalliklarimiz</h2>
            <div className='advantageLists'>
                <div className='advantageItems'>
                    <div className='advantageImg'>
                        <img src={Komp} alt='desktop'/>
                    </div>
                    <div className='advantageItemTitle'>
                        <h3>Shunchaki kurs emas</h3>
                        <p>Har bir o‘quv kursi shunday ishlab chiqilganki, ularni muvaffaqiyatli yakunlab, siz zamonaviy kasb egasiga aylanishingiz va shu sohada o‘z faoliyatingizni boshlashingiz mumkin. Hammasi o‘z qo‘lingizda.</p>
                    </div>
                </div>
                <div className='advantageItems'>
                    <div className='advantageImg'>
                        <img src={Master} alt='desktop'/>
                    </div>
                    <div className='advantageItemTitle'>
                        <h3>O‘z ishining ustalari</h3>
                        <p>Darslar katta tajribaga ega malakali mutaxassislar tomonidan tayyorlangan. O‘z ishining ustalaridan yanada ishonchli bilim va tajribaga ega bo’lasiz.</p>
                    </div>
                </div>
            </div>
            <div className='advantageLists'>
                <div className='advantageItems'>
                    <div className='advantageImg'>
                        <img src={Target} alt='desktop'/>
                    </div>
                    <div className='advantageItemTitle'>
                        <h3>Interaktiv darslar</h3>
                        <p>Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilishingiz, o’zingizni qiziqtirgan savollarizga javob olishingiz va tavsiyalar olishingiz mumkin.</p>
                    </div>
                </div>
                <div className='advantageItems'>
                    <div className='advantageImg'>
                        <img src={Meet} alt='desktop'/>
                    </div>
                    <div className='advantageItemTitle'>
                        <h3>Mentor kerakmi?</h3>
                        <p>Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilsangiz, ular sizni qiynayotgan masalalar bo‘yicha yechim topishga yo‘l ko‘rsatadilar.</p>
                    </div>
                </div>
            </div>
            <div className='advantageLists'>
                <div className='advantageItems'>
                    <div className='advantageImg'>
                        <img src={Nazariya} alt='desktop'/>
                    </div>
                    <div className='advantageItemTitle'>
                        <h3>Nazariya va amaliyot</h3>
                        <p>Siz har bir kursda berilgan topshiriqlarni amalga oshirish orqali bilimlaringizni yanada mustahkamlab borasiz.</p>
                    </div>
                </div>
                <div className='advantageItems'>
                    <div className='advantageImg'>
                        <img src={Record} alt='desktop'/>
                    </div>
                    <div className='advantageItemTitle'>
                        <h3>Hammamiz insonmiz</h3>
                        <p>O‘qish jarayonida avvalgi o‘tilgan mavzular yoddan ko‘tarilishi, ba’zi mavzularni mustahkamlashga ehtiyoj tug‘ilishi mumkin. Shu bois sizda avvalgi darslarni takroran ko‘rish imkoniyati bor.</p>
                    </div>
                </div>
            </div>
            <div className='advantageLists'>
                <div className='advantageItems'>
                    <div className='advantageImg'>
                        <img src={Sertificate} alt='desktop'/>
                    </div>
                    <div className='advantageItemTitle'>
                        <h3>Sertifikat</h3>
                        <p>Kursni muvaffaqiyatli yakunlaganingizdan so‘ng sizga elektron sertifikat taqdim etiladi. Sertifikat sizni bilimingizni oson ko’rsatib beruvchi isbot. Siz bu sertifikat bilan noutbuk olish uchun foizsiz kreditdan foydalana olasiz.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantage