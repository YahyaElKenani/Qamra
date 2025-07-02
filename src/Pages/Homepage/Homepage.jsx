import { useSelector } from "react-redux"
import Header from "../../Components/Header/Header"
import HeaderAr from "../../Components/HeaderAr/HeaderAr"
import Hero from "../../Components/Hero/Hero"
import HeroAr from '../../Components/HeroAr/HeroAr'
import LatestProducts from "../../Components/LatestProducts/LatestProducts"
import LatestProductsAr from "../../Components/LatestProductsAr/LatestProductsAr"
import SpecialOffer from "../../Components/SpecialOffer/SpecialOffer"
import SpecialOfferAr from "../../Components/SpecialOfferAr/SpecialOfferAr"
import Footer from "../../Components/Footer/Footer"
import FooterAr from "../../Components/FooterAr/FooterAr"


export default function Homepage() { 
    const language = useSelector((state) => state.language.language)
    return ( 
        <>
            {
                language === 'ar' ? 
                <> 
                    <HeaderAr active={'home'}/>
                    <HeroAr />
                    <LatestProductsAr />
                    <SpecialOfferAr />
                    <FooterAr />
                </>
                : 
                <> 
                    <Header active={'home'}/>
                    <Hero />    
                    <LatestProducts />
                    <SpecialOffer />
                    <Footer />
                </>
            }
        </>
    )
}