import { useSelector } from "react-redux";
import Contact from "../../Components/Contact/Contact";
import Header from '../../Components/Header/Header'
import HeaderAr from '../../Components/HeaderAr/HeaderAr'
import ContactAr from "../../Components/ContactAr/ContactAr";
export default function ContactPage() { 
    const language = useSelector((state) => state.language.language);
    return ( 
        <> 
            { 
                language === 'ar' ? 
                <>
                    <HeaderAr active={'contact'} showBg={true} disableAnimation={true}/> 
                    <ContactAr />
                </>
                : 
                <>
                    <Header active={'contact'} showBg={true} disableAnimation={true}/> 
                    <Contact />
                </>
            }
        </>
    )
}