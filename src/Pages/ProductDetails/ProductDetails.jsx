import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import HeaderAr from "../../Components/HeaderAr/HeaderAr"
import Product from "../../Components/Product/Product";
import ProductAr from "../../Components/ProductAr/ProductAr";

export default function ProductDetails() { 
    const { productId } = useParams();
    const language = useSelector((state) => state.language.language)
    return ( 
        <> 
            { 
                language === 'ar' ?
                <>
                    <HeaderAr active={null} showBg={true} disableAnimation={true}/> 
                    <ProductAr id={productId} />
                </>
                :
                <>
                    <Header active={null} showBg={true} disableAnimation={true} />
                    <Product id={productId} />
                </>
            }
        </>
    )
}