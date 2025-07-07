import { useSelector } from "react-redux"
import HeaderAr from "../../Components/HeaderAr/HeaderAr"
import Header from "../../Components/Header/Header"
import Checkout from "../../Components/Checkout/Checkout"
import CheckoutAr from "../../Components/CheckoutAr/CheckoutAr"
export default function CheckoutPage() { 
    const language = useSelector((state) => state.language.language)
    return ( 
        <> 
            {
                language === 'ar' ? 
                <> 
                    <HeaderAr active={null} showBg={true} disableAnimation={true} />
                    <CheckoutAr />
                </>
                : 
                <> 
                    <Header active={null} showBg={true} disableAnimation={true} />
                    <Checkout />
                </>
            }
        </>
    )
}