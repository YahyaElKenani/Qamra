import { Divider } from '@mui/material'
import '../ProductsGallery/ProductsGallery.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion'
import { Spinner } from 'react-bootstrap';
export default function ProductsGalleryAr() { 
    const [productsImages, setProductsImage] = useState([]);
    const [gallery, setGallery] = useState([]);
    const products = useSelector((state) => state.products.products); 
    useEffect(() => {
        setProductsImage(products.map((product) => product.images)); 
    }, [products])

    useEffect(() => {
        if (productsImages) { 
            setGallery(productsImages.flat()) 
        }
    }, [productsImages])

    useEffect(() => {
        console.log(gallery);
    }, [gallery])
    return ( 
        <>
        { 
            productsImages ? 
            <Motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className='gallery-container gallery-container-ar'> 
                <div className='section-header ar-text'>
                    <h1 className='mb-4'>المعرض</h1>
                    <Divider style={{borderColor: 'black'}}/>
                </div>
                <div className='products-gallery'> 
                    {
                        gallery.map((product) => <img className='gallery-item' key={Math.random()} src={product} />)
                    }
                </div>
            </Motion.section>
            : 
            <Spinner animation='border' /> 
        }
        </> 
    )
}