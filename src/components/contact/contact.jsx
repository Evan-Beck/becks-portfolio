// css import. 
import './contact.css';

// hooks from react for email icon from react-icons.
import React, { useRef, useState } from 'react';

// Import for emailjs to send emails directly from web browser. 
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [message, setMessage] = useState(false);
    //useref to reference the form DOM element for email submission. 
    const formRef = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
      emailjs
        .sendForm(
          'service_k2qawqh', //EmailJS service ID.
          'template_c6rkpn6', // EmailJS template ID.
          formRef.current, // Form element. 
          'X7K7ebhIeOy3YwHki' // EmailJS user ID. 
        )
        .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

          e.target.reset();
  };

  //JSX for rendering contact selection on page. 
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        This does receive messages. I will respond ASAP within 48 hours!
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
        
            <MdOutlineEmail className="contact__option-icon" /> 
            <h4>Email</h4>
            <h5>ebeck703@gmail.com</h5>
            <a href="ebeck703@gmail.com">Send a message</a>
          </article>
        </div>
      
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
