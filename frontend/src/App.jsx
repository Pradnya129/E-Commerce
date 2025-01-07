import React, { useContext, useEffect } from 'react'
import {Routes,Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Product from './pages/Product'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import { ShopContext } from './context/ShopContext'

const App = () => {
   const navigate = useNavigate()
   const {token}=useContext(ShopContext)
   useEffect(()=>{
    if(!token){
      navigate('/login')
    }
   },[])
  return (
  <div className='sm:px-[5vw] px-[3vw] md:px-[7vw] lg:px-[9vw]'>
    <ToastContainer/>
  
    <Navbar/>
    { token ?
     <div><SearchBar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/cart' element={ <Cart/> }/>
    <Route path='/collection' element={ <Collection/> }/>
    <Route path='/contact' element={<Contact/>  }/>
    <Route path='/login' element={<Login/>  }/>
    <Route path='/orders' element={<Orders/>  }/>
    <Route path='/place_order' element={<PlaceOrder/>  }/>
    <Route path='/product/:productId' element={<Product/>}/>
    <Route path='/verify' element={<Verify/>  }/>
  </Routes>
  <Footer/></div>
  : <Login/>
  }
  </div>
  )
}

export default App





