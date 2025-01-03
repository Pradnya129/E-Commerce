import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext)
    const handleImageClick = () => {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' })

    }

    useEffect(()=>{
   handleImageClick()
    },[])

  return (
    <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
      <div className='overflow-hidden'>
       <img src={image[0]} className='hover:scale-110 transition-all ease-in-out' alt="" onClick={handleImageClick} />
      </div>
      <p className='pt-3 text-sm cursor-pointer'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
