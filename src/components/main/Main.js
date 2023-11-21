import React from 'react'
import './main.css'
import Navbar from './nav/Navbar'
import MainImg from '../../image/main.png'

function Main() {
  return (
    <div className='main' id='asosiy'>
        <Navbar/>
        <div className='container main-wrapper'>
            <div className='main-info'>
                <h2>Kelajagingizni<br></br> Biz bilan<br></br> O’zgartiring!</h2>
            </div>
            <div className='main-img'>
                <img src={MainImg} alt='main'/>
            </div>
        </div>
    </div>
  )
}

export default Main