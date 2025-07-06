import { Divider, Tooltip } from '@mui/material'
import '../Cart/Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../Slices/cartSlice';
import { Button } from 'react-bootstrap';
import { FaRegTrashAlt } from "react-icons/fa";
export default function CartAr() { 
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(cart);
    }, [cart])
    return ( 
        <section className='cart-container cart-container-ar ar-text d-flex flex-column'>
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
                                <div className='text-secondary'>الكمية: {product.quantity}</div>
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
                    <button className='w-100 fs-4 fw-bold'>Checkout</button>
                </div>
            </div>
        </section>
    )
}