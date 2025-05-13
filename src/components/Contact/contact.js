import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import youtubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef;
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_b7kyl7s', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id="contactPage">
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>
                    I have had the opportunity to work with a diverse group of companies...
                </p>
                <div className='clientImgs'>
                    <img src={Walmart} alt='Walmart' className='clientImg' />
                    <img src={Adobe} alt='Adobe' className='clientImg' />
                    <img src={Microsoft} alt='Microsoft' className='clientImg' />
                    <img src={Facebook} alt='Facebook' className='clientImg' />
                </div>
            </div>
            {/* Div reservada para futura seção de contato (opcional) */}
            <div id='contact'>
                <h1 className="contacePageTitle"> Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' />
                    <input type="email" className='email' placeholder='Your Email' />
                    <textarea className="msg" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={FacebookIcon} alt="Facebook" className='link' />
                        <img src={TwitterIcon} alt="Twitter" className='link' />
                        <img src={youtubeIcon} alt="Youtube" className='link' />
                        <img src={InstagramIcon} alt="Instagram" className='link' />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;