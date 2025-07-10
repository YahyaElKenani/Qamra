import '../Contact/Contact.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Divider, Alert } from '@mui/material'
import { useState } from 'react';
import { motion as Motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
export default function ContactAr() { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const navigateToSocial = (url) => { 
        window.open(url, '_blank');
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name.length > 10) {
            setNameError(false); 
                if(emailRegex.test(email)) { 
                    setEmailError(false);
                    if(message) { 
                        setMessageError(false)
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
                    setEmailError(true);
                }
        } else { 
            setNameError(true)
        }
    }
    return ( 
        <Motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className="contact-page-container contact-page-container-ar ar-text d-flex flex-column gap-5 align-items-center"> 
            <h1>ارسل ايميل</h1>
            <form className='d-flex flex-column gap-3 w-100 align-items-center'> 
                <label htmlFor="username">الاسم :</label>
                <Motion.input whileFocus={{scale: 1.1}} className='contact-field' type="text" id='username' onChange={(e) => setName(e.target.value)}/>
                <Alert className="ar-text" variant="filled" severity="error" sx={ nameError ? {width: '70%'} : {display: 'none'}}> الاسم كامل مطلوب </Alert>
                <label htmlFor="user-email">الايميل :</label>
                <Motion.input whileFocus={{scale: 1.1}} className='contact-field' type="email" name="" id="user-email"  onChange={(e) => setEmail(e.target.value)}/>
                <Alert className="ar-text" variant="filled" severity="error" sx={ emailError ? {width: '70%'} : {display: 'none'}}> البريد الالكتروني مطلوب</Alert>
                <label htmlFor="email-content" className='text-nowrap'>كيف يمكنني مساعدتك ؟</label>
                <Motion.textarea whileFocus={{scale: 1.1}} className='contact-field' id='email-content' onChange={(e) => setMessage(e.target.value)}/>
                <Alert className="ar-text" variant="filled" severity="error" sx={ messageError ? {width: '70%'} : {display: 'none'}}>الرسالة فارغة</Alert>
                <Motion.button whileHover={{opacity: 0.8}} whileTap={{scale: 0.9}} onClick={(e) => handleSubmit(e)}>ارسل</Motion.button>
            </form>
            <Divider style={{borderColor: 'black', width: '100%'}}/>
            <div className='d-flex flex-column align-items-center w-100'> 
                <h3 className='text-nowrap'>أو تواصل معنا عبر الروابط</h3>
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