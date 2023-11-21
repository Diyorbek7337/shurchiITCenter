import React, {useState} from 'react';
import './navbar.css';



import Logo from '../../../image/LogoProWhite.svg'
function Navbar() {

  
  const [menu, setMenu] = useState(false)
  return (
    <div className='navbar'>
     <ul className={menu ? 'menuMobile active' : 'menuMobile'}>
                <li><a href='#asosiy' className='menuItem'>Asosiy</a></li>
                <li><a href='#about' className='menuItem'>Biz haqimizda</a></li>
                <li><a href='#course' className='menuItem'>Kurslar</a></li>
                <li><a href='#team' className='menuItem'>Bizning jamoa</a></li>
                <li><a href='#contact' className='menuItem'>Bog'lanish</a></li>
            </ul>
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <ul className='menu'>
                <li><a href='#asosiy' >Asosiy</a></li>
                <li><a href='#about'>Biz haqimizda</a></li>
                <li><a href='#course'>Kurslar</a></li>
                <li><a href='#team'>Bizning jamoa</a></li>
                <li><a href='#contact'>Bog'lanish</a></li>
            </ul>
            <div className='mobileMenu' onClick={() => setMenu(!menu)}>
            <div className="hamburger" onClick={() => setMenu(!menu)}>
                <div className={menu ? 'bar1 change' : 'bar1' }></div>
                <div className={menu ? 'bar2 change' : 'bar2' }></div>
                <div className={menu ? 'bar3 change' : 'bar3' }></div>
            </div>
            </div>
        </div>
        
        
       
    </div>
  )
}

export default Navbar