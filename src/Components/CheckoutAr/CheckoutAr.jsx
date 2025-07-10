import { Divider, Alert } from "@mui/material";
import '../Checkout/Checkout.css'
import { motion as Motion } from 'framer-motion'
import { useState } from "react";
import OrderSummaryAr from "../../Components/OrderSummaryAr/OrderSummaryAr";
import { useSelector } from "react-redux";
import emailjs from '@emailjs/browser';
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function CheckoutAr() { 
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [contactMethod, setContactMethod] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [nameError, setNameError] = useState(false); 
    const [phoneError, setPhoneError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [contactError, setContactError] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();
    const handleSubmit = (e) => { 
        e.preventDefault();
        if (name.length > 10) { 
            setNameError(false);
            if (phoneNumber.length === 11) { 
                setPhoneError(false);
                    if (address) { 
                        setAddressError(false)
                        if (contactMethod) { 
                            setContactError(false)
                                    const templateParams = { 
                                        name: name, 
                                        phoneNumber: phoneNumber, 
                                        email: email, 
                                        message: `Product Name & Quantity: \n ${cart.map((product) => `${product.name} => ${product.quantity} | color: ${product.color} \n`)}
                                        Contact Method: \n ${contactMethod} \n Address: \n ${address} \n
                                         Total Price: ${cart.reduce((acc, value) => acc + value.quantity * value.price, 0)} جنيه
                                        \n ${additionalNotes && `Additional Notes: \n ${additionalNotes}`}
                                        
                                        `
                            }
                            emailjs.send('service_eqvv69e', 'template_g1491gj', templateParams, 'Y3FUdJxCFB7o3ecmW'); 
                            navigate('/submit-order');
                        } else { 
                            setContactError(true);
                        }
                    } else { 
                        setAddressError(true);
                    }
            } else { 
                setPhoneError(true)
            }
        } else { 
            setNameError(true);
        }
    }
    return ( 
        <Motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className="checkout-page-container checkout-page-container-ar d-flex justify-content-between align-items-start"> 
        { 
            cart.length !== 0 && 
            <> 
            
            <div className="checkout-container ar-text"> 
                <div className="checkout-heading"> 
                    <h1>تأكيد الطلب</h1>
                    <Divider style={{borderColor: 'black'}} />
                </div>
                <form className="d-flex flex-column gap-3 mt-4 ar-text">
                    <label htmlFor="name">الاسم ثنائي او ثلاثي <sup style={{color: 'red'}}>*</sup> :</label>
                    <Motion.input whileFocus={{scale: 1.1}} onChange={(e) => setName(e.target.value)} type="text" id="name" autoComplete="off"/>
                    <Alert className="ar-text" variant="filled" severity="error" sx={ nameError ? {width: '70%'} : {display: 'none'}}> الاسم كامل مطلوب </Alert>
                    <label htmlFor="number">{`رقم الموبايل ( واتساب ومكالمات ) `}<sup style={{color: 'red'}}>*</sup> :</label>
                    <Motion.input whileFocus={{scale: 1.1}} type="number" onChange={(e) => setPhoneNumber(e.target.value)} inputMode="numeric" id="number" />
                    <Alert className="ar-text" variant="filled" severity="error" sx={ phoneError ? {width: '70%'} : {display: 'none'}}> رقم الموبايل مطلوب </Alert>
                    <label htmlFor="email">البريد الالكتروني :</label>
                    <Motion.input whileFocus={{scale: 1.1}} type="text" name="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                    onChange={(e) => setEmail(e.target.value)} id="email" autoComplete="off"/>
                    <label htmlFor="address">العنوان بالتفصيل <sup style={{color: 'red'}}>*</sup> :</label>
                    <Motion.input whileFocus={{scale: 1.1}} type="text" autoComplete="off" onChange={(e) => setAddress(e.target.value)} id="address" />
                    <Alert className="ar-text" variant="filled" severity="error" sx={ addressError ? {width: '70%'} : {display: 'none'}}> العنوان مطلوب </Alert>
                    <label>طريقة التواصل <sup style={{color: 'red'}}>*</sup> :</label>
                    <div> 
                        <Motion.input whileFocus={{scale: 1.1}} type="radio" value={'email'} onChange={(e) => setContactMethod(e.target.value)} id="email-contact" name="contact-method"/>
                        <label htmlFor="email-contact" id="contact-label">الايميل</label>
                    </div>
                    <div> 
                        <Motion.input whileFocus={{scale: 1.1}} type="radio" value={'whatsapp'} onChange={(e) => setContactMethod(e.target.value)} id="whatsapp-contact" name="contact-method"/>
                        <label htmlFor="whatsapp-contact" id="contact-label">واتساب</label>
                    </div>
                    <Alert className="ar-text" variant="filled" severity="error" sx={ contactError ? {width: '70%'} : {display: 'none'}}> طريقة التواصل مطلوبة </Alert>
                    <label htmlFor="notes">ملاحظات اضافية : </label>
                    <Motion.textarea whileFocus={{scale: 1.03}} id="notes" onChange={(e) => setAdditionalNotes(e.target.value)}/>
                    <button className="d-flex justify-content-center" onClick={(e) => handleSubmit(e)}>تأكيد</button>
                </form>
            </div>
            <div className='total-checkout'> 
                <OrderSummaryAr />
            </div>
            </>
        }
        </Motion.section>
    )
}