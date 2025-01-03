import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Product = () => {

const {productId} = useParams()
const {products,currency,addToCart} = useContext(ShopContext)
const [productData,setProductData] = useState(null)
const [image,setImage]=useState('')
const [size,setSize]=useState('')

const fetchProductData = async () => {
  console.log("Products:", products); // Check if products are populated
  if (!products || products.length === 0) {
    console.log("No products available.");
    return;
  }

  // Iterate through products and find the matching product
  const matchedProduct = products.find((item) => item._id === productId);
  if (matchedProduct) {
    console.log("Matched product:", matchedProduct);
    setProductData(matchedProduct); // This triggers a re-render
    setImage(matchedProduct.image[0]); // Assuming the first image is to be used
  } else {
    console.log("No matching product found for productId:", productId);
  }
};

 const productCart=(productData)=>{
  if(size){
    addToCart(productData._id,size)
    toast.success("Product Added to Cart")

  }else{
    toast.error("Select Product Size")
  }
 }

 useEffect(() => {
  if (productData) {
    console.log("Updated productData:", productData.image);
  }
}, [productData]);

useEffect(()=>{

  fetchProductData()
  console.log(productData)
},[products,productData,productId])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in-out duration-500  opacity-100'>
      {/* Product Data */}
      <ToastContainer />
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
    
       {/* Product Image */}

       <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] sm:justify-normal w-full  '>
           {
             productData.image && productData.image.map((item,index)=>{
             return(         
              <img src={item} alt=""key={index} onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'  />
             )
            })
           }
          </div>
          {/* main image */}
       <div className=' w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
       </div>
       </div>

      {/* --------------Product Info ------------- */}
      
      <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
             <img src={assets.star_icon} alt=""  className='w-3.5' />
             <img src={assets.star_icon} alt=""  className='w-3.5' />
             <img src={assets.star_icon} alt=""  className='w-3.5' />
             <img src={assets.star_icon} alt=""  className='w-3.5' />
             <img src={assets.star_dull_icon}    className='w-3.5' alt="" />
             <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5  text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
         <p>Select Size</p>
         <div className='flex gap-2 '>
          {productData.sizes && productData.sizes.map((item,index)=>{
            return(<p onClick={()=>{setSize(item)}} key={index} className={`border py-2 cursor-pointer px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ' '} `}>{item}</p>)
          })}
         </div>  
        </div>
        <button onClick={()=>{productCart(productData)}} className='bg-black text-white  px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
        <hr  className='mt-8 sm:w-4/5' />
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
         <p>100% Original product.</p>
         <p>Cash on delivery is available on this product.</p>
         <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>
      </div>

      {/* Description and Review Section */}

      <div className='mt-20'>
         <div className='flex'>
            <b className='border px-5 py-3 text-sm'> Description</b>
            <p className='border px-5 text-sm py-3'>Review (122)</p>
         </div>
         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
           <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
         </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ):<div className='opacity-0'></div>
}

export default Product
