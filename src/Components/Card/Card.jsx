import './Card.css'
import { useSelector } from 'react-redux'
import { motion as Motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
export default function Card({product}) {
    const language = useSelector((state) => state.language.language);
    const navigate = useNavigate();
    const routeToProductDetails = () => { 
        navigate(`/product/${product.id}`)
    }
    return ( 
        <Motion.div
        whileHover={{y: -10}}
        className='card d-flex flex-column'
        onClick={() => routeToProductDetails()}>
            <img src={product.images[0]} alt="product-image"  />
            <div className={`card-texts ${language === 'ar' ? 'ar-text' : ''}`}> 
                <p className='fs-4'>{product.name}</p>
                <p className='fs-3 fw-bold'>{product.price} {language === 'en' ? 'EGP' : 'جنيه'}</p>
                <div className='w-100 d-flex justify-content-between align-items-center'> 
                    <button className='mb-2 card-btn' onClick={() => routeToProductDetails()}>{language === 'en' ? 'View Product' : 'اعرض المنتج'}</button>
                </div>
            </div>
        </Motion.div>
    )
}