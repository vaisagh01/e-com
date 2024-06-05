import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import { Toaster } from "@/components/ui/sonner"
import { useSelector } from 'react-redux'
import Profile from './pages/Profile'
import ProductPage from './pages/ProductPage'
import CategoryPage from './pages/CategoryPage'
import CartPage from './pages/CartPage'
import Cart from './redux/cart'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const isLoggedIn = useSelector((state) => state.logger.isLoggedIn)
  console.log(isLoggedIn);
  return (
    <BrowserRouter>
    {isLoggedIn && <Header/>}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to={'signin'} />} />
        <Route path="/signin" element={isLoggedIn ? <Navigate to={'/'}/> : <Signin/>} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to={'/'}/> : <Signup/>} />
        <Route path="/profile" element={!isLoggedIn ? <Navigate to={'/'}/> : <Profile/>} />
        <Route path='/category/:category' element={!isLoggedIn ? <Navigate to={'/'}/> : <CategoryPage />} />
        <Route path='/product/:product' element={!isLoggedIn ? <Navigate to={'/'}/> : <ProductPage />} />
        <Route path='/cart' element={!isLoggedIn ? <Navigate to={'/'}/> : <CartPage />} />
      </Routes>
      <Footer/>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
