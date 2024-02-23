import React from 'react';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

function Contact() {
  return (
    <div className="pb-16" id="contact">
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default Contact;
