import { Alert, Divider } from "@mui/material";
import './Checkout.css'
import { motion as Motion } from 'framer-motion'
import { useState } from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import { useSelector } from "react-redux";
import emailjs from '@emailjs/browser'
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Checkout () { 
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
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name.length > 10) { 
            if (phoneNumber.length === 11) { 
                    
                        if (address) { 
                            if (contactMethod) { 
                                        const templateParams = { 
                                            name: name, 
                                            phoneNumber: phoneNumber, 
                                            email: email, 
                                            message: `Product Name & Quantity: \n ${cart.map((product) => `${product.name} => ${product.quantity} | color: ${product.color}  \n`)}
                                            Contact Method: \n ${contactMethod} \n Address: \n ${address} \n
                                             Total Price: ${cart.reduce((acc, value) => acc + value.quantity * value.price, 0)} EGP
                                            \n ${additionalNotes && `Additional Notes: \n ${additionalNotes}`}
                                            
                                            `
                                }
                                if (email) { 
                                    if(emailRegex.test(email)) {  
                                        console.log(`email error`);
                                    }
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
                setPhoneError(true);
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
        className="checkout-page-container d-flex justify-content-between"> 
        { 
            cart.length !== 0 && 
            <>
            
            <div className="checkout-container"> 
                <div className="checkout-heading"> 
                    <h1>Checkout</h1>
                    <Divider style={{borderColor: 'black'}} />
                </div>
                <form className="d-flex flex-column gap-3 mt-4 ar-text">
                    <label htmlFor="name">Full Name <sup style={{color: 'red'}}>*</sup> :</label>
                    <Motion.input whileFocus={{scale: 1.1}} onChange={(e) => setName(e.target.value)} type="text" id="name" autoComplete="off"/>
                    <Alert variant="filled" severity="error" sx={ nameError ? {width: '70%'} : {display: 'none'}}> Full Name Required </Alert>
                    <label htmlFor="number">{`Phone Number (Whatsapp & Calls) `}<sup style={{color: 'red'}}>*</sup> :</label>
                    <Motion.input whileFocus={{scale: 1.1}} type="number" onChange={(e) => setPhoneNumber(e.target.value)} inputMode="numeric" id="number" />
                    <Alert variant="filled" severity="error" sx={ phoneError ? {width: '70%'} : {display: 'none'}}> Phone Number Required </Alert>
                    <label htmlFor="email">Email Address :</label>
                    <Motion.input whileFocus={{scale: 1.1}} type="text" name="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                    onChange={(e) => setEmail(e.target.value)} id="email" autoComplete="off"/>
                    <label htmlFor="address">Address <sup style={{color: 'red'}}>*</sup> :</label>
                    <Motion.input whileFocus={{scale: 1.1}} type="text" autoComplete="off" onChange={(e) => setAddress(e.target.value)} id="address" />
                    <Alert variant="filled" severity="error" sx={ addressError ? {width: '70%'} : {display: 'none'}}> Address Required </Alert>
                    <label>Contact Method <sup style={{color: 'red'}}>*</sup> :</label>
                    <div> 
                        <Motion.input whileFocus={{scale: 1.1}} type="radio" value={'email'} onChange={(e) => setContactMethod(e.target.value)} id="email-contact" name="contact-method"/>
                        <label htmlFor="email-contact" id="contact-label">Email</label>
                    </div>
                    <div> 
                        <Motion.input whileFocus={{scale: 1.1}} type="radio" value={'whatsapp'} onChange={(e) => setContactMethod(e.target.value)} id="whatsapp-contact" name="contact-method"/>
                        <label htmlFor="whatsapp-contact" id="contact-label">Whatsapp</label>
                    </div>
                    <Alert variant="filled" severity="error" sx={ contactError ? {width: '70%'} : {display: 'none'}}> Contact Method Required </Alert>
                    <label htmlFor="notes">Additional Notes: </label>
                    <Motion.textarea whileFocus={{scale: 1.03}} id="notes" onChange={(e) => setAdditionalNotes(e.target.value)}/>
                    <button className="d-flex justify-content-center" onClick={(e) => handleSubmit(e)}>Checkout</button>
                </form>
            </div>
            <div className='total-checkout'> 
                <OrderSummary />

            </div>
            </> 
        }
        </Motion.section>
    )
}