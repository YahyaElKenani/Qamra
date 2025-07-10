import { Divider, Tooltip, Alert } from '@mui/material'
import './ProductAr.css'
import { useDispatch, useSelector } from 'react-redux'
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from 'react';
import { addToCart } from '../../Slices/cartSlice';
import { motion as Motion } from 'framer-motion';
import { Bounce, toast, ToastContainer } from 'react-toastify';
export default function ProductAr({id}) { 
    const product = useSelector((state) => state.products.products).find((item) => item.id === +id);
    const [activeitem, setActiveItem] = useState(0);
    const dispatch = useDispatch();
    const [bagColor, setBagColor] = useState('');
    const [colorMissing, setColorMissing] = useState(false);
    const addToOrderList = () => { 
            setColorMissing(false);
            if (bagColor) { 
                dispatch(addToCart({...product, quantity: product.quantity + 1 || 1, color: bagColor}));
                toast.success(`${product.name} اضيفت للسلة`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            } else { 
                setColorMissing(true);
            }
    }
    return ( 
        <Motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className="product-container product-container-ar"> 
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{zIndex: '99999999999999999999999999999999999999999'}}
        className='ar-text'
        transition={Bounce}
        />
            <div className='section-header ar-text'>
                <h1 className='mb-4'>تفاصيل المُنتج</h1>
                <Divider style={{borderColor: 'black'}}/>
            </div>
            <div className='product d-flex'> 
                <div className='product-images d-flex gap-3'>
                    <div className='carousel-images d-flex flex-column gap-2'> 
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
                <div className='product-details ar-text'> 
                    <div className='product-heading d-flex justify-content-between align-items-cente'> 
                        <div className='product-name'>{product.name}</div>
                        <div className='product-price'>{product.price} جنيه مصري</div>
                    </div>
                    <div className='product-description d-flex flex-column gap-3'>
                        <div className='product-dimensions d-flex text-secondary gap-1 '> 
                            <span>الابعاد:</span>
                        <Tooltip title='عرض'>
                            <div>{product.width}</div>
                        </Tooltip>
                            <div>x</div>
                            <Tooltip title="طول"> 
                                <div>{product.length}</div>
                            </Tooltip>
                        </div>
                        <input type='text' placeholder='اختر اللون ( كل الالوان متاحة )' style={{width: '100%'}} onChange={(e) => setBagColor(e.target.value)} />
                        <Alert variant="filled" className='ar-text' severity="error" sx={ colorMissing ? {width: '100%'} : {display: 'none'}}> اللون مطلوب </Alert>
                        <button style={{width: '100%', height: '5vh', fontSize: 'clamp(16px, 3vw, 24px)'}} 
                        onClick={() => addToOrderList()}
                        className='d-flex justify-content-center align-items-center gap-2'>
                            <IoBagHandleOutline />
                            اضف للسلة
                        </button>
                    </div>
                </div>
            </div>
        </Motion.section>
    )
}