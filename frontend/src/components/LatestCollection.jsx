import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Text from './Text'
import ProductItem from './ProductItem'

const LatestCollection = () => {
const {products}=useContext(ShopContext)
const[latestProduct,setLatestProduct]=useState([])

useEffect(()=>{
setLatestProduct(products.slice(0,10))
},[products])

  return (
    <div className='lg:my-10 my-3 max-sm:my-8 '>
        <div className='max-[400px]:text-[22px] text-3xl  sm:text-3xl text-center items-center py-4 lg:py-8'>
      <Text text1={"LATEST"} text2= { 'COLLECTION'} />
      <p className='W-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 px-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
    </div>

    {/* // Rendering products */}

     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
       {
        latestProduct.map((item,index)=>{
          return(
            <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>
          )
        })
       }
     </div>

    </div>

    
  )
}

export default LatestCollection
