import './SpecialOffer.css'
import offerImage from '../../assets/Images/special-img.jpg'
export default function SpecialOffer() { 
    return ( 
        <div className='special-offer-container'>
            <div className='offer-text-conatiner'>
                <div className='fw-bold offer-text'>Coming Soon</div>
                <div className='offer-sub-text ps-md-2'>Stay Tuned</div>
                <div className='text-secondary ps-md-2 offer-sec-sub-text'>Lovely, Modern, and elegant</div>
            </div>
            <img src={offerImage} alt="offer-image" />
        </div>
    )
}