import { Divider } from '@mui/material'
import './ProductList.css'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
export default function ProductList() { 
    const products = useSelector((state) => state.products.products); 
    return ( 
        <section className='shop-container d-flex flex-column'> 
            <h1>Shop</h1>
            <Divider style={{borderColor: 'black'}}/>
            <div className='products d-flex flex-wrap gap-4 justify-content-center mt-4 '> 
                { 
                products && 
                products.map((product) => ( 
                    <Card key={product.id} product={{...product, quantity: 1}} showCartButton={true}/>
                ))
                }
            </div>
        </section>
    )
}