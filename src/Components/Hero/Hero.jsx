import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import './Hero.css'
import heroBag1 from '../../assets/Images/image2_PhotoGrid.png'
import heroBag2 from '../../assets/Images/carousel-img.jpg'
import heroBag3 from '../../assets/Images/carousel-img2.jpg'
import {motion as Motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
export default function Hero() { 
    const navigate = useNavigate();
    const routeToShop = () => { 
        navigate('/shop')
    }
    return ( 
        <Motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className='hero-container'> 
            <Swiper
            className='hero'
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
                    <div className='hero-content d-flex flex-column'>
                        <div className='hero-main-text fw-bold'>New Collection</div>
                        <div className='hero-sub-text mb-2'>Handcrafted with love, designed to stand out.</div>
                        <button className='hero-btn' onClick={() => routeToShop()}>Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={heroBag2} alt="bag1" className='hero-bg' />
                    <div className='hero-content d-flex flex-column'>
                        <div className='hero-main-text fw-bold'>Bold • Unique • You</div>
                        <div className='hero-sub-text mb-2'>Discover the charm of modern kilim bags.</div>
                        <button className='hero-btn' onClick={() => routeToShop()}>Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={heroBag3} alt="bag1" className='hero-bg' />
                    <div className='hero-content d-flex flex-column'>
                        <div className='hero-main-text fw-bold'>Where Tradition Meets Style</div>
                        <div className='hero-sub-text mb-2'>Every stitch tells a story.</div>
                        <button className='hero-btn' onClick={() => routeToShop()}>Shop Now</button>
                    </div>
                </SwiperSlide>
            </Swiper>

        </Motion.div>
    )
}