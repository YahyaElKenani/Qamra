import './Card.css'
import { useSelector } from 'react-redux'
import { motion as Motion } from 'framer-motion'
export default function Card({productName, productPrice, productImage}) {
    const language = useSelector((state) => state.language.language);
    return ( 
        <Motion.div
        whileHover={{y: -10}}
        className='card d-flex flex-column'>
            <img src={productImage} alt="product-image" />
            <div className='card-texts'> 
                <p className='fs-4'>{productName}</p>
                <p className='fs-3 fw-bold'>{productPrice} {language === 'en' ? 'EGP' : 'جنيه'}</p>
                <button className='mb-2 card-btn'>{language === 'en' ? 'Shop Now' : 'تسوق الآن'}</button>
            </div>
        </Motion.div>
    )
}