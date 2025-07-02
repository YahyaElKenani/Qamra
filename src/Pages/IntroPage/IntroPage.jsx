import { useDispatch, useSelector } from "react-redux"
import { setLanguage } from "../../Slices/languageSlice";
import mainBag from '../../assets/Images/bag5/image2.jpg'
import logo from '../../assets/Images/logo.png'
import './IntroPage.css'
import { AnimatePresence, easeInOut, motion as Motion } from 'framer-motion'
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function IntroPage() { 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state)
    useEffect(() => {
        console.log();
        console.log('full redux state:', state);
    }, [])
    const sloganVariant = { 
        hidden: {}, 
        visible: {
            transition: { 
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }
    const sloganChildrenVariant = { 
        hidden: {
            opacity: 0, x: -100
        }, 
        visible: { 
            opacity: 1, x: 0, 
            transition: {
                duration: 0.9,
                easeInOut
            }
        }
    }
    const buttonVariant = { 
        hidden: {
            opacity: 0, y: 100
        }, 
        visible: { 
            opacity: 1, y: 0, 
            transition: {
                duration: 0.9
            }
        }
    }
    const routeToHomepage = () => { 
            navigate('/homepage')
    }
    return ( 
        <AnimatePresence mode="wait"> 
            <Motion.div exit={{opacity: 0}} transition={{duration: 1}} className="content-container align-items-center d-flex"> 
                <div className="left-section d-flex flex-column justify-content-center align-items-center gap-2">
                    <Motion.img
                    initial={{opacity: 0, scaleX: 0}}
                    animate={{opacity: 1, scaleX: 1}}
                    transition={{duration: 0.9, ease: 'easeOut'}}
                    src={logo} alt="logo" className="logo mb-3"/>
                    <Motion.div
                    variants={sloganVariant}
                    initial='hidden'
                    animate='visible'
                    className="slogan ar-text d-flex flex-column text-center align-items-center">
                        <Motion.p variants={sloganChildrenVariant}>
                        لَيسَ الجَمالُ بِأَثوابٍ تُزَيِّنُنا 
                        </Motion.p>
                        <Motion.p variants={sloganChildrenVariant}>
                        إِنَّ الجَمالَ جَمالُ العَقلِ وَالأَدَب
                        </Motion.p>
                    </Motion.div>
                    <Motion.div
                    variants={sloganVariant}
                    initial='hidden'
                    animate='visible'
                    className="user-preferences d-flex flex-column gap-3 align-items-center"> 
                        <Motion.div variants={buttonVariant} className="label d-flex gap-3 justify-content-center align-items-center">
                            <div style={{fontWeight: 600}}>Choose Your Language</div>
                            <Divider orientation="vertical" />
                            <div className="ar-text">اختر اللغة</div>
                        </Motion.div>
                        <Motion.div variants={buttonVariant} className="languages d-flex gap-2">
                            <Motion.button
                            whileHover={{opacity: 0.7}} whileTap={{scale: 0.9}} style={{fontWeight: 600}}
                            onClick={() => { 
                                dispatch(setLanguage('en'))
                                routeToHomepage();
                                }}>English</Motion.button>
                            <Motion.button
                            whileHover={{opacity: 0.7}} whileTap={{scale: 0.9}}
                            className="ar-text" onClick={() => {
                                dispatch(setLanguage('ar'))
                                routeToHomepage();
                                }}>عربي</Motion.button>
                        </Motion.div>
                    </Motion.div>
                </div>
                <Motion.img
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.9, ease: 'easeOut'}}
                src={mainBag} alt="background" className="right-section d-none d-lg-block" />
            </Motion.div>
        </AnimatePresence>
    )
}