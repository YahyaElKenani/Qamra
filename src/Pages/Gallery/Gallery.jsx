import { useSelector } from "react-redux"
import HeaderAr from "../../Components/HeaderAr/HeaderAr";
import Header from "../../Components/Header/Header";
import ProductsGallery from "../../Components/ProductsGallery/ProductsGallery";
import ProductsGalleryAr from "../../Components/ProductsGalleryAr/ProductsGalleryAr";

export default function Gallery() { 
    const language = useSelector((state) => state.language.language);
    return ( 
        <>
            {
                language === 'ar' ? 
                <> 
                    <HeaderAr active={'gallery'} showBg={true} disableAnimation={true} />
                    <ProductsGalleryAr />
                </>
                : 
                <>
                    <Header active={'gallery'} showBg={true} disableAnimation={true}/>
                    <ProductsGallery />
                </>
            }
        </>
    )
}