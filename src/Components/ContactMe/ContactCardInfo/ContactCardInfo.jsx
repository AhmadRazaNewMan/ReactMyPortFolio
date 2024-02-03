import React from 'react'
import './ContactCardInfo.css'

const ContactCardInfo = ({iconUrl,text}) => {

  return (
    <div className="contact-details-card">
        <div className="icon">
            <span>{iconUrl}</span>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactCardInfo
