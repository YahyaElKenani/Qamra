import { useDispatch, useSelector } from 'react-redux'
import '../OrderSummary/OrderSummary.css'
import { Divider, Tooltip } from '@mui/material'
import { useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../Slices/cartSlice';
import { Button } from 'react-bootstrap';
import { motion as Motion } from 'framer-motion'
export default function OrderSummaryAr({DeliveryAmount = 0}) {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(cart);
    }, [cart])
    return ( 
        <Motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className='order-summary order-summary-ar ar-text'>
            <div className='order-summary-heading d-flex flex-column mb-3'>
                <h2 className='mb-3'>ملخص الطلب</h2>
                <Divider style={{borderColor: 'black', width: '100%'}} />
            </div>
            <div className='order-summary-items'>
                { 
                    cart.map((product) => 
                        <div className='mb-3'> 
                            <div key={product.id} className='d-flex fs-4 fw-bold w-100 justify-content-between mb-2'>
                                <div>{product.name}</div>
                                <div>{product.price} جنيه</div>
                            </div> 
                            <div className='d-flex w-100 justify-content-between'>
                                <div className='d-flex flex-column'>
                                    <div className='text-secondary'>الكمية: {product.quantity}</div>  
                                    <div className='text-secondary'>اللون: {product.color}</div>  
                                </div>  
                                <div className='order-summary-btns d-flex gap-2'> 
                                    <Tooltip title='Decrease Quantity'> 
                                        <button className='order-summary-btn' onClick={() => dispatch(decreaseQuantity(product.id))}>
                                            <FaMinus color="white"/>
                                        </button>
                                    </Tooltip>
                                    <Tooltip title='Increase Quantity'> 
                                        <button className='order-summary-btn' onClick={() => dispatch(increaseQuantity(product.id))}>
                                                <FaPlus color="white"/>
                                        </button>
                                    </Tooltip>
                                    <Tooltip title='Delete'>
                                        <Button variant='danger' className='order-summary-btn' size='lg' onClick={() => dispatch(removeFromCart(product.id))}><FaRegTrashAlt color='white' /></Button>
                                    </Tooltip> 
                                </div>
                            </div> 
                        </div>
                    )
                }
            </div>
            <Divider style={{borderColor: 'black', width: '100%'}}/>
            <div className='delivery-amount w-100 d-flex justify-content-between align-items-center mt-3'> 
                <div>التوصيل</div>
                <div>{DeliveryAmount} جنيه</div>
            </div>
            <div className='total-summary d-flex w-100 justify-content-between align-items-center fs-3 mt-1 fw-bold'>
                <div>الاجمالي</div>
                <div>{cart.reduce((acc, value) => acc + value.quantity * value.price, 0) + +DeliveryAmount} جنيه</div>
            </div>
        </Motion.div>
    )
}