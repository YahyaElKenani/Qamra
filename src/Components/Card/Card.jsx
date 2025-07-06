import './Card.css'
import { useDispatch, useSelector } from 'react-redux'
import { motion as Motion } from 'framer-motion'
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Slices/cartSlice';
import { useEffect } from 'react';
export default function Card({product, showCartButton}) {
    const language = useSelector((state) => state.language.language);
    const cart = useSelector((state) => state.cart.cart)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(cart);
    }, [cart])
    const routeToProductDetails = () => { 
        navigate(`/product/${product.id}`)
    }
    return ( 
        <Motion.div
        whileHover={{y: -10}}
        className='card d-flex flex-column'>
            <img src={product.images[0]} alt="product-image" onClick={() => routeToProductDetails()} />
            <div className={`card-texts ${language === 'ar' ? 'ar-text' : ''}`}> 
                <p className='fs-4'>{product.name}</p>
                <p className='fs-3 fw-bold'>{product.price} {language === 'en' ? 'EGP' : 'جنيه'}</p>
                <div className='w-100 d-flex justify-content-between align-items-center'> 
                    <button className='mb-2 card-btn' onClick={() => routeToProductDetails()}>{language === 'en' ? 'View Product' : 'اعرض المنتج'}</button>
                    {
                        showCartButton &&
                        <button onClick={() => dispatch(addToCart(product))} style={{width: 'fit-content'}}><MdAddShoppingCart size={30}/></button>
                    }
                </div>
            </div>
        </Motion.div>
    )
}