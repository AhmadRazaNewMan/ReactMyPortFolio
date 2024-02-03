import React from "react";
import "./ContactMe.css";
import ContactCardInfo from "./ContactCardInfo/ContactCardInfo";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-me">
      <h5>Contact Me </h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
        <ContactCardInfo
            iconUrl={
                <lord-icon
                src="https://cdn.lordicon.com/ukwexxlc.json"
                trigger="loop"
                delay="2000"
                style={{width:"100px",height:"100px"}}>
            </lord-icon>
            }
            text="ahmadraza41@icloud.com"
          />
          <ContactCardInfo
            iconUrl={
              <lord-icon
                src="https://cdn.lordicon.com/rokunbup.json"
                trigger="loop"
                delay="2000"
                style={{width:"100px",height:"100px"}}
              ></lord-icon>
            }
            text="https://github.com/AhmadRazaNewMan/ReactMyPortFolio"
          />

        </div>
        <div style={{ flex: 1 }}>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
