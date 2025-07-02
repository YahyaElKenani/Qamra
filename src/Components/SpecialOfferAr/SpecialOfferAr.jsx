import './SpecialOfferAr.css'
import offerImage from '../../assets/Images/special-img.jpg'
export default function SpecialOfferAr() { 
    return ( 
        <div className='special-offer-container special-offerAr-container d-flex justify-content-between align-items-center'>
                    <div className='offer-text-conatiner ar-text'>
                        <div className='display-1 fw-bold offer-text'>قريباً</div>
                        <div className='display-5 ps-2 mb-3'>كوني مستعدة</div>
                        <div className='fs-6 text-secondary ps-2'>انيق, جميل, وجذّاب</div>
                    </div>
                    <img src={offerImage} alt="offer-image" />
                </div>
    )
} 