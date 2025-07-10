import { Divider, Tooltip } from '@mui/material'
import '../Cart/Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../Slices/cartSlice';
import { Button, Spinner } from 'react-bootstrap';
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion'
export default function CartAr() { 
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    return ( 
        <Motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className='cart-container cart-container-ar ar-text d-flex flex-column'>
            { 
            cart.length !== 0 && 
            <> 
                <div className='cart-heading'> 
                    <h1 className='mb-4'>السلة</h1>
                    <Divider style={{borderColor: 'black'}} />
                </div>
                <div className='cart-content-container mt-3 d-flex'> 
                    <div className='cart-products d-flex flex-column gap-3'>
                        { 
                            cart.map((product, index) => <div key={index} className='cart-item d-flex gap-4 align-items-center'>
                                <img src={product.images[0]} alt='product-thumbnail' className='cart-product-thumbnail'/>
                                <div className='cart-product-data d-flex flex-column'> 
                                    <div className='cart-product-head fw-bold w-100 d-flex justify-content-between align-items-center'> 
                                        <div>{product.name}</div>
                                        <div>{product.price} جنيه </div>
                                    </div>
                                    <div className='order-quantity-color d-flex flex-column gap-3 gap-md-0'>
                                        <div className='text-secondary'>الكمية: {product.quantity}</div>
                                        <div className='text-secondary'>اللون: {product.color}</div>
                                    </div>
                                    <div className='cart-btns d-flex gap-2 mt-3'> 
                                            <Tooltip title='انقاص الكمية'> 
                                        <button className='cart-btn' onClick={() => dispatch(decreaseQuantity(product.id))}>
                                                <FaMinus color="white"/>
                                        </button>
                                            </Tooltip>
                                            <Tooltip title='زيادة الكمية'> 
                                        <button className='cart-btn' onClick={() => dispatch(increaseQuantity(product.id))}>
                                                <FaPlus color="white"/>
                                        </button>
                                            </Tooltip>
                                            <Tooltip title='مسح المنتج'>
                                                <Button variant='danger' className='cart-btn' size='lg' onClick={() => dispatch(removeFromCart(product.id))}><FaRegTrashAlt color='white' /></Button>
                                            </Tooltip>
                                    </div>
                                </div>
                            </div>)
                        }
                        <button className='w-100 fs-4 fw-bold' onClick={() => navigate('/checkout')}>اكمال الطلب</button>
                    </div>
                </div>
            </>
            }
        </Motion.section>
    )
}