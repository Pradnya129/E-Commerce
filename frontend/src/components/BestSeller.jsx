import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Text from './Text'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products}=useContext(ShopContext)
    const [bestSeller,setBestSeller]=useState([])
    useEffect(()=>{
     const bestProduct=products.filter((item)=>(item.bestSeller ))
     setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center max-[400px]:text-[22px] text-3xl sm:text-3xl py-8'>
            <Text text1 ={'BEST'} text2={'SELLERS'} />
            <p className='W-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 px-4'> 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum repudiandae quo sed officia voluptatem
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
       {
        bestSeller.map((item,index)=>{
          return(
            <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>
          )
        })
       }
     </div>

    </div>
  )
}

export default BestSeller
