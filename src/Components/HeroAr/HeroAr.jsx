import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import './HeroAr.css'
import heroBag1 from '../../assets/Images/image2_photogrid.png'
import heroBag2 from '../../assets/Images/carousel-img.jpg'
import heroBag3 from '../../assets/Images/carousel-img2.jpg'
import { motion as Motion } from 'framer-motion'
export default function HeroAr() { 
    return ( 
        <Motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className='hero-container'> 
            <Swiper
            className='hero hero-ar'
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
            effect='fade'
            slidesPerView={1}
            autoplay={{ 
                delay: 5000,
                disableOnInteraction: false
            }}
            pagination={{clickable: true}}
            > 
                <SwiperSlide>
                    <img src={heroBag1} alt="bag1" className='hero-bg' />
                    <div className='hero-content d-flex flex-column ar-text'>
                        <div className='hero-main-text fw-bold'>مجموعة جديدة</div>
                        <div className='hero-sub-text mb-2'>مصنوعة بأيدينا بكل حُب, ومصنوعة علشان تبقي مميزة وتلفتي النظر</div>
                        <button className='mt-2 hero-btn'>تسوق الآن</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={heroBag2} alt="bag1" className='hero-bg' />
                    <div className='hero-content d-flex flex-column ar-text'>
                        <div className='hero-main-text fw-bold'>جريئة • فريدة • زيك</div>
                        <div className='hero-sub-text mb-2'>اكتشفي سحر شنط الكليم المودرن</div>
                        <button className='mt-2 hero-btn'>تسوق الآن</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={heroBag3} alt="bag1" className='hero-bg' />
                    <div className='hero-content hero-content-ar d-flex flex-column ar-text'>
                        <div className='hero-main-text fw-bold'>لما التراث يقابل الشياكة</div>
                        <div className='hero-sub-text mb-4'>كل غرزة بتحكي حكاية</div>
                        <button className='mt-2 hero-btn'>تسوق الآن</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Motion.div>
    )
}