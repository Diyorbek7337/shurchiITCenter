import React, { useState } from 'react'
import './contact.css'
// import ReactInputMask from 'react-input-mask';
import Conta from './cont/Contac'

function Contacts() {

  return (
    <div className='contact' id='contact'>
      <div className='container contact-wrapper'>
        <div className='contactInfo'>
          <h3>Biz bilan bog'lanish</h3>
          <Conta/>
        </div>
      </div>
    </div>
  )
}

export default Contacts