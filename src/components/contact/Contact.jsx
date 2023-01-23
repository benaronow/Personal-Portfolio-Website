import React, {useRef} from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io5'
import {FaFacebookMessenger} from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xnmz8g9', 'template_ls7n2nf', form.current, 'UR9wsq5-SiGSYikT1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <div className='section__title'>
        <h2>Contact Me</h2>
      </div>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__icon' />
            <h4>Email</h4>
            <h5>benaronow227@gmail.com</h5>
            <a href="mailto:benaronow227@gmail.com" target='_blank' rel='noreferrer'>Email Me</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__icon' />
            <h4>Messenger</h4>
            <h5>benaronow227</h5>
            <a href="https://m.me/benaronow227" target='_blank' rel='noreferrer'>Message Me</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__icon' />
            <h4>WhatsApp</h4>
            <h5>+1 (763) 607-6204</h5>
            <a href="https://wa.me/+17636076204" target='_blank' rel='noreferrer'>WhatsApp Me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name' required />
          <input type="text" name="email" placeholder='Email' required />
          <input type="text" name="subject" placeholder='Subject' required />
          <textarea name="message" rows="7" placeholder='Write your message here' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact