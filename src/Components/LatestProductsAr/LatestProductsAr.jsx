import { useSelector } from 'react-redux'
import './LatestProductsAr.css'
import Divider from '@mui/material/Divider';
import Card from '../Card/Card';
export default function LatestProductsAr() { 
    const products = useSelector((state) => state.products.products);
    return ( 
        <div className='latest-products-container latest-products-containerAr ar-text gap-3 d-flex flex-column align-items-center justify-content-center'> 
            <Divider className='d-none d-md-flex' style={{width: '100%'}}><div className='display-5 display-md-4 fw-bold text-center mb-3'>احدث المنتجات</div></Divider>
            <div className='display-6 d-block latest-products-heading d-md-none fw-bold text-center mb-3'>احدث المنتجات</div>
            <div className='cards d-flex justify-content-center gap-3 w-100 align-items-center flex-wrap'> 
                <Card productName={products[4].name} productImage={products[4].images[0]} productPrice={products[4].price}/>
                <Card productName={products[1].name} productImage={products[1].images[0]} productPrice={products[1].price}/>
                <Card productName={products[2].name} productImage={products[2].images[0]} productPrice={products[2].price}/>
            </div>
            <button className='mt-3 card-btn' style={{fontSize: '1.4rem', height:'70px', width: '150px'}}>اعرض الكل</button>
        </div>
    )
}