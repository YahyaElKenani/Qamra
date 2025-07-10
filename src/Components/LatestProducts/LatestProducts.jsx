import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './LatestProducts.css'
import Divider from '@mui/material/Divider';
import {motion as Motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
export default function LatestProducts() { 
    const products = useSelector((state) => state.products.products);
    const navigate = useNavigate(); 
    const routeToShop = () => { 
        navigate('/shop');
    }
    return ( 
        <Motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className='latest-products-container gap-3 d-flex flex-column align-items-center justify-content-center'> 
            <Divider className='d-none d-md-flex' style={{width: '70%'}}><p className='display-4 fw-bold text-center'>Latest Products</p></Divider>
            <div className='display-6 d-block latest-products-heading d-md-none fw-bold text-center mb-3'>Latest Products</div>
            <div className='cards d-flex justify-content-center gap-3 w-100 align-items-center flex-wrap'> 
                <Card product={products[4]} showCartButton={false}/>
                <Card product={products[6]} showCartButton={false}/>
                <Card product={products[2]} showCartButton={false}/>
            </div>
            <Motion.button
            whileHover={{scale: 1.05, opacity: .8}}
            className='mt-3 card-btn show-all-btn d-flex align-items-center justify-content-center' style={{fontSize: '1.4rem', height:'70px', width: '150px'}} onClick={() => routeToShop()}>Show All</Motion.button>
        </Motion.div>
    )
}