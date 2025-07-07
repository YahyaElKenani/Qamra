import { Divider } from '@mui/material'
import './ProductListAr.css'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import { motion as Motion } from 'framer-motion'
export default function ProductListAr() { 
    const products = useSelector((state) => state.products.products); 
    return ( 
        <Motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className='shop-container shop-container-ar d-flex flex-column'> 
            <h1 className='ar-text mb-3'>المتجر</h1>
            <Divider style={{borderColor: 'black'}}/>
            <div className='products d-flex flex-wrap gap-3 justify-content-center mt-4 '> 
                { 
                products && 
                products.map((product) => ( 
                    <Card key={product.id} product={product}/>
                ))
                }
            </div>
        </Motion.section>
    )
}