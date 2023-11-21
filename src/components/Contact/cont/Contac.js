import React, { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import axios from 'axios';
const MyForm = () => {
    
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setFormData({
        name: '',
        phoneNumber: ''
    })
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission
      sendToTelegramBot();
    }
    return false
  };
  const sendToTelegramBot = () => {
    const message = `Ismi: ${formData.name}\nTelefon raqami: ${formData.phoneNumber}`;
    axios
      .post('https://api.telegram.org/bot6286102524:AAEpSmmQjfGP2jSIFglyoOYsiFCyg9IDKnI/sendMessage', {
        chat_id: '-928671481',
        text: message,
      })
      .then((response) => {
        // Handle success response
        console.log('Message sent to Telegram bot:', response.data);
        setMessageSent(true)
        setTimeout(() => {
            setMessageSent(false)
        }, 5000)
      })
      .catch((error) => {
        // Handle error
        console.error('Error sending message to Telegram bot:', error);
      });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Ismingizni kiritmadingiz!';
    } 
    else if (!isValidName(formData.name)) {
      newErrors.name = "Ismingizni to'g'ri kiritmadingiz!";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Telefon raqamingizni kiritmadingiz!';
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Telefonizni to'g'ri formatda kiriting iltimos!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidName = (name) => {
    // Basic name format validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Basic phone number format validation
    const phoneNumberRegex =/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
    return phoneNumberRegex.test(phoneNumber);
}

    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className='input' placeholder='Ismingizni kiriting'/>
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <ReactInputMask type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className='input' placeholder='+998-__-___-__-__' mask="+\9\9\8 (99) 999-99-99"/>
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>
      <button type="submit" className='button'>Jo'natish</button>
      {messageSent && <p className='successMessage'>Habaringiz yuborildi! Siz bilan tez orada bog'lanamiz!</p>}
    </form>
  );
};

export default MyForm;
