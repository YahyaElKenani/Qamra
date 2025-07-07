import './SpecialOffer.css';
import offerImage from '../../assets/Images/special-img.jpg';
import { motion as Motion } from 'framer-motion';
export default function SpecialOffer() { 
    return ( 
        <Motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className='special-offer-container'>
            <div className='offer-text-conatiner'>
                <div className='fw-bold offer-text'>Coming Soon</div>
                <div className='offer-sub-text ps-md-2'>Stay Tuned</div>
                <div className='text-secondary ps-md-2 offer-sec-sub-text'>Lovely, Modern, and elegant</div>
            </div>
            <img src={offerImage} alt="offer-image" />
        </Motion.div>
    )
}