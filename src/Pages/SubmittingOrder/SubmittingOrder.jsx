import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import './SubmittingOrder.css'
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion as Motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { setCart } from "../../Slices/cartSlice";
export default function SubmittingOrder() { 
    const language = useSelector((state) => state.language.language);
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        if (!loading) { 
            setTimeout(() => {
                navigate('/homepage');
                dispatch(setCart([]));
            }, 2000);
        }
    }, [loading])
    return ( 
        <> 
            <div className={`submitting-order ${language === 'ar' && 'ar-text submitting-order-ar'}`}> 
                { 
                    loading ? 
                    <Spinner animation="border"/> 
                    : 
                    <Motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    className="d-flex flex-column align-items-center justify-content-center fs-2 gap-2"> 
                        <FaCheckCircle style={{color: 'green'}}/>
                        <div>{language === 'en' ? 'Order Submitted' : 'تم تأكيد الطلب'}</div>
                        <div className="fs-6 text-secondary">{language === 'en' ? 'Wait For Confirmation During Incoming Hours' : 'انتظر التأكيد خلال الساعات القادمة'}</div>
                    </Motion.div>
                }
            </div>
        </>
    )
}