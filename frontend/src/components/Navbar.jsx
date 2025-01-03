import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {
  const[visible,setVisible]=useState(false)
  const navigate=useNavigate()
   const {ShowSearch ,setShowSearch , getCartCount,token,setToken,setCartItems}=useContext(ShopContext)

   const CollectionPage =()=>{
    console.log('collection')
    navigate('/collection')
    setShowSearch(true)
   }

const logout=()=>{
  navigate('/login')
  localStorage.removeItem('token')
  setToken('')
  setCartItems({});
}



  const Nav=[
    {
      to:'/',
      link:'HOME',
      
    },
    {
      to:'/collection',
      link:'COLLECTION',
    },
    {
      to:'/about',
      link:'ABOUT',
    },
    {
      to:'/contact',
      link:'CONTACT',
    }
  ]
  return (
    <div className='flex items-center border-b-2  justify-between py-3 font-medium'>
    
     <img onClick={()=>{ token ? null : navigate('/login')}} src={assets.logo} alt='' className='w-24 h-auto   text-sm sm:w-24 md:w-28'/>
  
      <ul className='hidden sm:flex gap-5 text-sm text-grey-700'>
      
        { token &&
          Nav.map((item,index)=>{
           return(
          
            <NavLink to= {item.to} key={index} className='h-[27px] flex items-center  text-gray-600 group hover:text-black transition-all  duration-300 flex-col gap-1'>
            <p>{item.link}</p>
            <hr className='w-0 group-hover:w-2/4 transition-all duration-300   bg-gray-700 h-[1.8px] border-none  '/>
            </NavLink>
          
           )
          })
        }
      </ul>
      <div className=' flex gap-6 items-center'>
           { token && <>
        <img src={assets.search_icon} className=' cursor-pointer w-4 text-sm sm:w-5' onClick={CollectionPage}/>
        {/* Dropdown list */}
        <div className='relative group'>
           <Link to={'/login'}> <img src={assets.profile_icon} alt="" className='w-4 text-sm sm:w-5' /></Link>
           
            <div className='absolute group-hover:block z-50 hidden dropdown-menu pt-4 right-0'>
            <div className='rounded flex-col  bg-slate-100 w-36 gap-2 text-gray-500 px-5 py-3'>
                <p className='cursor-pointer hover:text-black'> My Profile</p>
                <p className='cursor-pointer hover:text-black' onClick={()=>{navigate('/orders')}}>Orders</p>
                <p className='cursor-pointer hover:text-black' onClick={()=>{logout()}}>Logout</p>
            </div>
        </div>
        </div>
        <Link to={'/cart'} className='relative'>
        <img src={assets.cart_icon} alt="" className='w-4 text-base sm:w-6 min-w-5 ' />
        <p className='absolute right-[-5px] bottom-[-5px] bg-black rounded-full leading-4  text-white text-[8px] text-center w-4 h-4 '>{getCartCount()}</p>
        </Link>
        </>
           }
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className="w-5 cursor-pointer sm:hidden " />
      </div>
      {/* Sidebar menu for small screen */}
    <div className={`absolute top-0 right-0 z-50  ${visible?'w-full':'w-0'} overflow-hidden bottom-0  bg-white transition-all `}>
    <div className='flex flex-col text-gray-600'>
        <div className='flex items-center cursor-pointer transition-all gap-4 p-3' onClick={()=>{setVisible(false)}}>
          <img src={assets.dropdown_icon} alt="" className='h-4 pe-2 rotate-180' />
          <p>Back</p>
       </div>
       { 
        Nav.map((item,index)=>{
          return(
            <NavLink className='pl-6 py-2 border-b-[2px]'key={index} onClick={()=>setVisible(false)} to={item.to}> {item.link}</NavLink>
          )
        })
       }
      
    </div>
      </div>
      </div>
  )
}

export default Navbar
