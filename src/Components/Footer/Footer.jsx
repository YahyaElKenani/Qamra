import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Divider } from '@mui/material';
export default function Footer() {  
    const navigateToSocial = (url) => { 
        window.open(url, '_blank');
    }
    return ( 
        <footer className='mt-5 d-flex flex-column align-items-center justify-content-between'> 
            <div className='socials-container d-flex flex-column align-items-center'> 
                <div className='fs-1 fw-bold'>Follow Us</div>
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
                <div className='text-secondary'>Owned By Nada Yasser</div>
            </div>
        </footer>
    )
}