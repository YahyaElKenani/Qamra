import { Divider, Tooltip } from '@mui/material'
import './ProductAr.css'
import { useSelector } from 'react-redux'
import { IoBagHandleOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
export default function ProductAr({id}) { 
    const product = useSelector((state) => state.products.products).find((item) => item.id === +id);
    const [activeitem, setActiveItem] = useState(0);
    const [productImages, setProductImages] = useState([]);
    useEffect(() => {
        setProductImages(product.images.slice(0,3));
    }, [product]) 
    useEffect(() => {
        console.log(productImages);
    }, [productImages])
    return ( 
        <section className="product-container product-container-ar"> 
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
                        <button style={{width: '100%', height: '5vh', fontSize: 'clamp(16px, 3vw, 24px)'}} className='d-flex justify-content-center align-items-center gap-2'>
                            <IoBagHandleOutline />
                            اضف للسلة
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}