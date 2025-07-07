import { Divider, Tooltip } from '@mui/material'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from 'react';
import { addToCart } from '../../Slices/cartSlice';
import { motion as Motion } from 'framer-motion';
export default function Product({id}) { 
    const product = useSelector((state) => state.products.products).find((item) => item.id === +id);
    const [activeitem, setActiveItem] = useState(0);
    const dispatch = useDispatch();
    const [bagColor, setBagColor] = useState('');
    const addToOrderList = () => { 
        if (bagColor) { 
            dispatch(addToCart({...product, quantity: product.quantity + 1 || 1, color: bagColor}));
        } else { 
            console.log(`bag color is missing`);
        }
    }
    return ( 
        <Motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className="product-container"> 
            <div className='section-header'>
                <h1>Product Details</h1>
                <Divider style={{borderColor: 'black'}}/>
            </div>
            <div className='product d-flex'> 
                <div className='product-images d-flex gap-3'>
                    <div className='carousel-images d-flex gap-2'> 
                        { 
                            product.images.slice(0,3).map((image, index) => <div key={index}
                            onClick={() => setActiveItem(index)}
                            className={`carousel-img ${index === activeitem ? 'active-img' : ''}`}><img src={image}/></div>)
                        }
                    </div>
                    <div className='product-thumbnail'>
                        <img src={product.images[activeitem]} alt="product-thumbnail" />
                    </div>
                </div>
                <div className='product-details '> 
                    <div className='product-heading d-flex justify-content-between align-items-center'> 
                        <div className='product-name'>{product.name}</div>
                        <div className='product-price'>{product.price} EGP</div>
                    </div>
                    <div className='product-description d-flex flex-column gap-3'>
                        <div className='product-dimensions d-flex text-secondary gap-1 '> 
                            <span>Dimensions:</span>
                        <Tooltip title='Width'>
                            <div>{product.width}</div>
                        </Tooltip>
                            <div>x</div>
                            <Tooltip title="Length"> 
                                <div>{product.length}</div>
                            </Tooltip>
                        </div>
                        <input type='text' placeholder='Choose Bag Color ( All Colors Avilable )' style={{width: '100%'}} onChange={(e) => setBagColor(e.target.value)} />
                        <button style={{width: '100%', height: '5vh', fontSize: 'clamp(16px, 3vw, 24px)'}}
                        onClick={() => addToOrderList()}
                        className='d-flex justify-content-center align-items-center gap-2'>
                            <IoBagHandleOutline />
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </Motion.section>
    )
}