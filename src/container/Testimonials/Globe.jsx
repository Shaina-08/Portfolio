// ContactInfo.js
import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      {/* <h2>Contact Information</h2> */}
      <div>
        <AiOutlinePhone />
        <span>+91 78767-26829</span>
      </div>
      <div>
        <AiOutlineMail />
        <span>shainabhard12@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
