import './Contact.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Divider, Alert } from '@mui/material'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { motion as Motion } from 'framer-motion'
export default function Contact() { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const formRef = useRef(null);
    const navigateToSocial = (url) => { 
        window.open(url, '_blank');
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name.length > 10) { 
                if(emailRegex.test(email)) { 
                    if(message) { 
                        const messageData = { 
                            name: name,
                            email: email,
                            message: message,
                        }
                        const templateParams = { 
                            name: messageData.name, 
                            email: messageData.email,
                            message: messageData.message
                        }
                        emailjs.send('service_eqvv69e', 'template_5apxxrr', templateParams, 'Y3FUdJxCFB7o3ecmW')
                    } else { 
                        setMessageError(true);
                    }
                } else { 
                    setEmailError(true)
                }
        } else { 
            setNameError(true);
        }
    }
    return ( 
        <Motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className="contact-page-container d-flex flex-column gap-5 align-items-center"> 
            <h1>Send An Email</h1>
            <form className='d-flex flex-column gap-3 w-100 align-items-center' ref={formRef}> 
                <label htmlFor="username">Full Name:</label>
                <Motion.input whileFocus={{scale: 1.1}} className='contact-field' type="text" autoComplete='off' id='username' name='name' onChange={(e) => setName(e.target.value)}/>
                <Alert variant="filled" severity="error" sx={ nameError ? {width: '70%'} : {display: 'none'}}> Full Name Required </Alert>
                <label htmlFor="user-email">Email Address:</label>
                <Motion.input whileFocus={{scale: 1.1}} className='contact-field' type="email" autoComplete='off' name="name" id="user-email" onChange={(e) => setEmail(e.target.value)}/>
                <Alert variant="filled" severity="error" sx={ emailError ? {width: '70%'} : {display: 'none'}}> Full Name Required </Alert>
                <label htmlFor="email-content">How Can I Help You?</label>
                <Motion.textarea whileFocus={{scale: 1.1}} className='contact-field' id='email-content' autoComplete='off' name='message' onChange={(e) => setMessage(e.target.value)}/>
                <Alert variant="filled" severity="error" sx={ messageError ? {width: '70%'} : {display: 'none'}}> Full Name Required </Alert>
                <Motion.button whileHover={{opacity: 0.7}} whileTap={{scale: 0.9}} onClick={(e) => handleSubmit(e)}>Send</Motion.button>
            </form>
            <Divider style={{borderColor: 'black', width: '100%'}}/>
            <div className='d-flex flex-column align-items-center w-100'> 
                <h3>Or Contact Us VIA</h3>
                <div className='socials d-flex gap-3'> 
                    <div className='social'>
                        <FaFacebookF className='icon' style={{fontSize: '2rem'}} onClick={() => navigateToSocial('https://www.facebook.com/share/12Eyb9ToBAw/')}/>
                    </div>
                    <div className='social'>
                        <FaTiktok className='icon' style={{fontSize: '2rem'}} onClick={() => navigateToSocial('https://www.tiktok.com/@nadayassser_qamra?_t=ZS-8xgsZq8ZzYl&_r=1 ')}/>
                    </div>
                    <div className='social'>
                        <FaWhatsapp className='icon' style={{fontSize: '2rem'}} onClick={() => navigateToSocial('https://chat.whatsapp.com/EHcdHI6uT5T5Y5EQnMYmym')}/>
                    </div>
                </div>
            </div>
        </Motion.section>
    )
}