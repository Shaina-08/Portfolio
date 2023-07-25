// ContactPage.js
import React, { useState } from 'react';
import ContactForm from './Contact';
import ContactInfo from './Globe';
import KeepInTouch from './KeepInTouch';
import Location from './Location';
import ThankYouMessage from './ThankYouMessage';
import './Testimonials.scss';
import { AppWrap } from '../../wrapper';

const Testimonials = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    // Handle the form submission (e.g., send data to the server) here.
    // For demonstration purposes, we will just set the 'submitted' state to true.
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page" id='contact'>
      <h1>Contact Us</h1>
      <div className="contact-container">
        <ContactForm onSubmit={handleFormSubmit} />
        <div className="contact-info-container">
          <ContactInfo />
          <KeepInTouch />
        </div>
        {/* <div className="location">
          <Location/>
        </div> */}
      </div>
      {submitted ? <ThankYouMessage /> : null}
      
    </div>
  );
};

export default AppWrap(Testimonials, 'contact');
