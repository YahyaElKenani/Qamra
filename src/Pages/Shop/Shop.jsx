import { useSelector } from "react-redux"
import Header from "../../Components/Header/Header"
import HeaderAr from "../../Components/HeaderAr/HeaderAr"
import ProductList from "../../Components/ProductList/ProductList"
import ProductListAr from "../../Components/ProductListAr/ProductListAr"

export default function Shop() { 
    const language = useSelector((state) => state.language.language)
    return ( 
        <>
        { 
            language === 'ar' ? 
            <>
                <HeaderAr active={'shop'} showBg={true} disableAnimation={true}/>
                <ProductListAr />
            </>
            : 
            <>
                <Header active={'shop'} showBg={true} disableAnimation={true}/>
                <ProductList />
            </>
        }
        </>
    )
}