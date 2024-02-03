import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className='name-form-content'> 
    <form action="">
        <div className="name-container">
            <input type="text" placeholder='First Name' name='firstName' />
            <input type="text" placeholder='Last Name' name='lastName' />
        </div>
        <input type="text" name='email' placeholder='Email' />
        <textarea type="text" name="message" rows={3} id=""placeholder='Message'/>
        <button>SEND</button>
    </form>

       

      
    </div>
  )
}

export default ContactForm
