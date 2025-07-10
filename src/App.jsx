import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import IntroPage from './Pages/IntroPage/IntroPage'
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shop/Shop'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Gallery from './Pages/Gallery/Gallery'
import CartPage from './Pages/CartPage/CartPage'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import SubmittingOrder from './Pages/SubmittingOrder/SubmittingOrder'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<IntroPage />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/:productId' element={<ProductDetails/>} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/submit-order' element={<SubmittingOrder />} />
        </Routes>
      </Router>
    </>
  )
}
