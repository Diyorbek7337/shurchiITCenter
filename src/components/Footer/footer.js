import React from 'react'
import './footer.css'
import Logo from '../../image/IT_Center66666666666-removebg-preview.png'
import {FaAngleRight, FaInstagram, FaTelegramPlane, FaFacebook} from 'react-icons/fa'

function footer() {
  return (
    <div className='footer'>
        <div className='container footer-wrapper'>
            <div className='footerItem'>
                <div className='footerLogo'>
                    <img src={Logo} alt='logo'/>
                </div>
                <div className='footerInfo'>
                    <p>Markazimiz - Oʻzbekiston yoshlarini birgalikda oʻqitish va IT sohasi mutaxassislarining malakasini oshirishga moʻljallangan ochiq maydon.</p>
                </div>
            </div>
            <div className='footerItem'>
            <ul className='menu'>
                <li><FaAngleRight className='footerRight'/> <a href='#asosiy'>Asosiy</a></li>
                <li><FaAngleRight className='footerRight'/> <a href='#about'>Biz haqimizda</a></li>
                <li><FaAngleRight className='footerRight'/> <a href='#course'>Kurslar</a></li>
                <li><FaAngleRight className='footerRight'/> <a href='#team'>Bizning jamoa</a></li>
                <li><FaAngleRight className='footerRight'/> <a href='#contact'>Bog'lanish</a></li>
            </ul>
            </div>
            <div className='footerItem'>
                <div className='location'>
                    <a href='https://goo.gl/maps/bjugTvphyacHvW497' className='mail'><span>Manzil:</span> Surxondaryo vil, Sho’rchi tumani, Mustaqillik ko’chasi, 54-uy</a>
                    <a href='https://goo.gl/maps/A8P1JpHs1JnKFmBF6' className='mail'><span>Manzil:</span> Surxondaryo vil, Sho’rchi tumani, Amir Temur ko’chasi, Alfragandus binosi 3-qavat</a>
                    <a href='mailto:ShurchiITCenter@gmail.com' className='mail'>ShurchiITCenter@gmail.com</a>
                    <a href='tel:+998903777337' className='tel'>+99890-377-73-37</a>
                    <div className='icons'>
                        <a href='https://www.instagram.com/it_center_shurchi/' className='instagram icon'><FaInstagram/></a>
                        <a href='https://t.me/ShurchiITCenter' className='telegram icon'><FaTelegramPlane/></a>
                        <a href='#' className='facebook icon'><FaFacebook/></a>
                    </div>
                </div>
            </div>
            <div className='footerItem'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d928.0420673781613!2d67.78795526807994!3d37.9965244257693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5692e9238e09b%3A0xf42f4fdc0a8287b0!2sAxborot%20texnologiya%20(IT)%20o&#39;quv%20markazi!5e0!3m2!1sru!2s!4v1684866652325!5m2!1sru!2s" width="100%" height="250px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default footer