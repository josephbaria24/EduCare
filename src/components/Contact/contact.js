import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2bvuzze', 'template_1q5i81g', form.current, 'EBo2q0hDIqXi5YkSu')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Us</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' />
                <input type='email' className='email' placeholder='Your Email' name='from_name'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact;