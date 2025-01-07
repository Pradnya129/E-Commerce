import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Text from '../components/Text'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {products,currency,cartItems,updateQuantity}=useContext(ShopContext)
   const navigate=useNavigate()
  const [cartData,setCartData]=useState([])

  useEffect(()=>{

    if(products.length  > 0){
    
      const tempData = [];
    for(const items in cartItems){
       for(const item in cartItems[items]){
        if(cartItems[items][item]){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
       }
    }
    setCartData(tempData)
    console.log("Product Added to Cart")
    }
   
  },[cartItems,products])


  return (
    <div className='border-t pt-14'>
    
      <div className='text-2xl mb-3'>
         <Text text1={'YOUR'} text2 = {'CART'} />
      </div>
    <div>
      {
        cartData.map((item,index)=>{
          const productData = products.find((product)=> product._id === item._id)
          return(
          <div key={index} className='grid py-4 border-t border-b text-gray-700 grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '>
            
            <div className='flex items-start gap-6'>
              <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
              <div>
              <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
              <div className='flex items-center gap-5 mt-2'>
                <p>{currency}{productData.price}</p>
                <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
              </div>
              </div>
            </div>
            <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size, Number(e.target.value))} type="number" className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'  defaultValue={item.quantity} />
            <img  onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 mr-4 cursor-pointer' alt="" />
            </div>
          )
          })


        
        }
    </div>
      
    <div className=' flex justify-end '>
      <div className='w-full sm:w-[450px]  sm:px-0'>

    <CartTotal/>
    <div className='w-full text-end'>
         <button className='bg-black text-white my-8 px-8 py-3' onClick={()=>{ cartData.length === 0 ? null: navigate('/place_order')}}>PROCEED TO CHECKOUT</button>
    </div>
      </div>
    </div>
    </div>
    
  )
}

export default Cart
