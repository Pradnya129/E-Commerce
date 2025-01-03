import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Text from './Text'

const RelatedProducts = ({category , subCategory}) => {

    const {products}=useContext(ShopContext)
    const [related,setRelated]=useState([])
    
    useEffect(()=>{
        if(products.length > 0){

            let productsCopy = products.slice();
            productsCopy=productsCopy.filter((item)=>category === item.category)
            productsCopy=productsCopy.filter((item)=>subCategory === item.subCategory)
            setRelated(productsCopy.slice(0,5))
        }
    },[products])
     
  return (
    <div className='my-24'>
    <div className='text-center max-[400px]:text-[22px]  sm:text-3xl py-8'>
        <Text text1 ={'RELATED'} text2={'PRODUCTS'} />
        
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
   {
    related.map((item,index)=>{
      return(
        <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}  />
      )
    })
   }
 </div>
 </div>
  )
}

export default RelatedProducts
