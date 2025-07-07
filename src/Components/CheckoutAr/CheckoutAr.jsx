import { Divider } from "@mui/material";
import '../Checkout/Checkout.css'
import { motion as Motion } from 'framer-motion'
import { useState } from "react";
import OrderSummaryAr from "../../Components/OrderSummaryAr/OrderSummaryAr";
import { useSelector } from "react-redux";
import emailjs from '@emailjs/browser';
export default function CheckoutAr() { 
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    // const [deliveryAmount, setDeliveryAmount] = useState(0);
    const [contactMethod, setContactMethod] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const cart = useSelector((state) => state.cart.cart);
    const handleSubmit = (e) => { 
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name.length > 10) { 
            if (phoneNumber.length === 11) { 
                if(emailRegex.test(email)) { 
                    if (address) { 
                        if (contactMethod) { 
                                    const templateParams = { 
                                        name: name, 
                                        phoneNumber: phoneNumber, 
                                        email: email, 
                                        message: `Product Name & Quantity: \n ${cart.map((product) => `${product.name} => ${product.quantity} | color: ${product.color} \n`)}
                                        Contact Method: \n ${contactMethod} \n Address: \n ${address} \n
                                         Total Price: ${cart.reduce((acc, value) => acc + value.quantity * value.price, 0)}
                                        \n ${additionalNotes && `Additional Notes: \n ${additionalNotes}`}
                                        
                                        `
                            }
                            emailjs.send('service_eqvv69e', 'template_g1491gj', templateParams, 'Y3FUdJxCFB7o3ecmW'); 
                        }
                    }
                }
            }
        }
    }
    return ( 
        <Motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className="checkout-page-container checkout-page-container-ar d-flex justify-content-between align-items-start"> 
            <div className="checkout-container ar-text"> 
                <div className="checkout-heading"> 
                    <h1>تأكيد الطلب</h1>
                    <Divider style={{borderColor: 'black'}} />
                </div>
                <form className="d-flex flex-column gap-3 mt-4">
                    <label htmlFor="name">الاسم ثنائي او ثلاثي <sup style={{color: 'red'}}>*</sup> :</label>
                    <Motion.input whileFocus={{scale: 1.1}} onChange={(e) => setName(e.target.value)} type="text" id="name" autoComplete="off"/>
                    <label htmlFor="number">{`رقم الموبايل ( واتساب ومكالمات ) `}<sup style={{color: 'red'}}>*</sup> :</label>
                    <Motion.input whileFocus={{scale: 1.1}} type="number" onChange={(e) => setPhoneNumber(e.target.value)} inputMode="numeric" id="number" />
                    <label htmlFor="email">الايميل :</label>
                    <Motion.input whileFocus={{scale: 1.1}} type="text" name="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                    onChange={(e) => setEmail(e.target.value)} id="email" autoComplete="off"/>
                    <label htmlFor="delivery">منطقة التوصيل : </label>
                    <select name="delivery" id="delivery"> {/* missing delivery handling */}
                        <option value="20">Alexandria</option>
                        <option value="30">Cairo</option>
                        <option value="40">Aswan</option>
                    </select>
                    <label htmlFor="address">العنوان بالتفصيل <sup style={{color: 'red'}}>*</sup> :</label>
                    <Motion.input whileFocus={{scale: 1.1}} type="text" autoComplete="off" onChange={(e) => setAddress(e.target.value)} id="address" />
                    <label>طريقة التواصل <sup style={{color: 'red'}}>*</sup> :</label>
                    <div> 
                        <Motion.input whileFocus={{scale: 1.1}} type="radio" value={'email'} onChange={(e) => setContactMethod(e.target.value)} id="email-contact" name="contact-method"/>
                        <label htmlFor="email-contact" id="contact-label">الايميل</label>
                    </div>
                    <div> 
                        <Motion.input whileFocus={{scale: 1.1}} type="radio" value={'whatsapp'} onChange={(e) => setContactMethod(e.target.value)} id="whatsapp-contact" name="contact-method"/>
                        <label htmlFor="whatsapp-contact" id="contact-label">واتساب</label>
                    </div>
                    <label htmlFor="notes">ملاحظات اضافية : </label>
                    <Motion.textarea whileFocus={{scale: 1.03}} id="notes" onChange={(e) => setAdditionalNotes(e.target.value)}/>
                    <button className="d-flex justify-content-center" onClick={(e) => handleSubmit(e)}>تأكيد</button>
                </form>
            </div>
            <div className='total-checkout'> 
                <OrderSummaryAr />
            </div>
        </Motion.section>
    )
}