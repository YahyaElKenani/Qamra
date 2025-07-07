import { useSelector } from 'react-redux'
import './LatestProductsAr.css'
import Divider from '@mui/material/Divider';
import Card from '../Card/Card';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion'
export default function LatestProductsAr() { 
    const products = useSelector((state) => state.products.products);
    const navigate = useNavigate();
    const routeToShop = () => { 
        navigate('/shop')
    }
    return ( 
        <Motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className='latest-products-container latest-products-containerAr ar-text gap-3 d-flex flex-column align-items-center justify-content-center'> 
            <Divider className='d-none d-md-flex' style={{width: '100%'}}><div className='display-5 display-md-4 fw-bold text-center mb-3'>احدث المنتجات</div></Divider>
            <div className='display-6 d-block latest-products-heading d-md-none fw-bold text-center mb-3'>احدث المنتجات</div>
            <div className='cards d-flex justify-content-center gap-3 w-100 align-items-center flex-wrap'> 
                <Card product={products[4]} showCartButton={false}/>
                <Card product={products[1]} showCartButton={false}/>
                <Card product={products[2]} showCartButton={false}/>
            </div>
            <Motion.button
            whileHover={{scale: 1.05, opacity: .8}}
            className='mt-3 card-btn' style={{fontSize: '1.4rem', height:'70px', width: '150px'}} onClick={() => routeToShop()}>اعرض الكل</Motion.button>
        </Motion.div>
    )
}