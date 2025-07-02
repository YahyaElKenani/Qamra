import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import IntroPage from './Pages/IntroPage/IntroPage'
import Homepage from './Pages/Homepage/Homepage'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<IntroPage />} />
          <Route path='/homepage' element={<Homepage />} />
        </Routes>
      </Router>
    </>
  )
}
