import './FooterAr.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Divider } from '@mui/material';
import { motion as Motion } from 'framer-motion'
export default function FooterAr() { 
    const navigateToSocial = (url) => { 
        window.open(url, '_blank');
    }
    return ( 
        <Motion.footer 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className='mt-5 d-flex footer-ar ar-text flex-column align-items-center justify-content-between'> 
            <div className='socials-container d-flex flex-column align-items-center'> 
                <div className='fs-1 fw-bold mb-2'>تابعونا</div>
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
            <div className='ownership w-100 d-flex flex-column align-items-center'> 
                <Divider sx={{borderColor: 'black'}} style={{width: '100%', marginBottom: '1rem'}}/>
                <div className='text-secondary'>صُنع بواسطة ندى ياسر</div>
            </div>
        </Motion.footer>
    )
}