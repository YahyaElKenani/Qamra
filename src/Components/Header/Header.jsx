import { Badge, Divider, Tooltip, Fade } from '@mui/material';
import logo from '../../assets/Images/logo.png'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeLanguage } from '../../Slices/languageSlice';
import { motion as Motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom';
export default function Header({active, showBg, disableAnimation}) { 
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showHeaderBg, setShowHeaderBg] = useState(showBg || false); 
    const [menuExpanded, setMenuExpanded] = useState(false);
    useEffect(() => {
        if (disableAnimation) { 
            return;
        } else { 
            const handleScroll = () => { 
                const offset = window.scrollY; 
                setShowHeaderBg(offset > 50); 
            }
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    const routeToCart = () => { 
        navigate('/cart');
    }
    return ( 
        <Motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className={`header-container d-flex align-items-center justify-content-between ${showHeaderBg ? 'header-scrolled' : ''}`}> 
        <img src={logo} alt="logo" className={`me-2 header-logo ${menuExpanded ? 'hide' : ''}`} />
        <Navbar key={'md'} expand={'md'}>
        <Container fluid>
        { 
            !menuExpanded && <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} className='custom-toggler' onClick={() => setMenuExpanded(true)}/>
        }
        <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'md'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
            placement="end"
            show={menuExpanded}
            onHide={() => setMenuExpanded(false)}
        >
            <Offcanvas.Header closeButton className='mt-2 close-btn'>
            </Offcanvas.Header>
                    <Divider sx={{borderColor: 'black'}} className='my-2 d-flex d-md-none'/>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 tabs gap-4 text-light">
                <Nav.Link as={Link} to={'/homepage'} className={`nav-tab ${active === 'home' ? 'active' : ''}`}>Home</Nav.Link>
                <Nav.Link as={Link} to={'/shop'} className={`nav-tab ${active === 'shop' ? 'active' : ''}`}>Shop</Nav.Link>
                <Nav.Link as={Link} to={'/gallery'} className={`nav-tab ${active === 'gallery' ? 'active' : ''}`}>Gallery</Nav.Link>
                <Nav.Link as={Link} to={'/contact'} className={`nav-tab ${active === 'contact' ? 'active' : ''}`}>Contact</Nav.Link>
                <div className='d-md-none d-flex align-items-center gap-3'>
                    <Tooltip title ='Switch to arabic' slots={{transition: Fade}}> 
                        <LanguageIcon sx={{fontSize: '2rem'}} className='icon text-light' onClick={() => dispatch(changeLanguage())}/>
                    </Tooltip>
                    <Badge badgeContent={cart.length} color='primary' >
                        <ShoppingCartIcon color='light' sx={{fontSize: '2rem'}} className='icon text-light' onClick={() => routeToCart()}/>
                    </Badge>
                </div>
            </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
    </Navbar>
            <div className="d-flex gap-4 header-btns"> 
                <Tooltip title='Switch to arabic' slots={{transition: Fade}}>
                    <LanguageIcon sx={{fontSize: '2rem'}} className='icon text-light' onClick={() => dispatch(changeLanguage())}/>
                </Tooltip>
                    <Badge badgeContent={cart.length} color='primary' >
                        <ShoppingCartIcon color='light' sx={{fontSize: '2rem'}} className='icon text-light' onClick={() => routeToCart()} />
                    </Badge>
            </div>
        </Motion.div>
    )
}