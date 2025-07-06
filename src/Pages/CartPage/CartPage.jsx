import { useSelector } from "react-redux"
import HeaderAr from "../../Components/HeaderAr/HeaderAr"
import Header from "../../Components/Header/Header"
import Cart from "../../Components/Cart/Cart"
import CartAr from "../../Components/CartAr/CartAr"

export default function CartPage() { 
    const language = useSelector((state) => state.language.language)
    return ( 
        <>
            {
                language === 'ar' ? 
                <> 
                    <HeaderAr active={null} showBg={true} disableAnimation={true} />
                    <CartAr />
                </>
                : 
                <> 
                    <Header active={null} showBg={true} disableAnimation={true}/>
                    <Cart />
                </>
            }
        </>
    )
}