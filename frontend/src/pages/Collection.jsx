import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Text from '../components/Text'
import ProductItem from '../components/ProductItem'

  const Collection = () => {
  const {products,search,ShowSearch}=useContext(ShopContext)
  const [showFilter,setShowFilter]=useState(false)
  const [filterProduct,setFilterProducts]=useState([]);
  const [SubCategory,setSubCategory]=useState([])
  const [Category,setCategory]=useState([]);
  const [sortType,setSortType]=useState('relevant')
 


  const toggleCategory=(e)=>{
    if(Category.includes(e.target.value)){
      setCategory((prev)=>prev.filter(item=> item !==  e.target.value))
      
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{
    if(SubCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item =>item !== e.target.value ))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice()
 
    if(ShowSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(Category.length > 0){
      productsCopy=productsCopy.filter(item => Category.includes(item.category))
    }
    if(SubCategory.length > 0){
      productsCopy=productsCopy.filter(item => SubCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProducts = ()=>{
    let fpProducts=filterProduct.slice()
    switch (sortType) {
      case 'low-high' :
        setFilterProducts(fpProducts.sort((a,b)=>a.price - b.price))
        break;
      
      case 'high-low':
        setFilterProducts(fpProducts.sort((a,b)=>b.price - a.price))  
        break;

      default:  
      applyFilter();
      break;
    }
  }
  

  useEffect(()=>{
   applyFilter()
  
  },[SubCategory,Category,search,ShowSearch,products])

  useEffect(()=>{
  sortProducts()
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-1 mt-5'>
     
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>{setShowFilter(!showFilter)}} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
        <img className={` h-3 sm:hidden ${showFilter? 'rotate-90' :""} ` } src={assets.dropdown_icon} alt="" />
        </p>
       
        {/* Category Filter */}
         <div className={` border border-gray-300 pl-5 py-3 mt-6 ${showFilter? '' : 'hidden'} sm:block` }>
           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'}  onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
           </div>
         </div>
         {/* SubCategory Filter */}
         <div className={` border border-gray-300 pl-5 py-3 my-5 ${showFilter? '' : 'hidden'} sm:block` }>
           <p className='mb-3 text-sm font-medium'>Type</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'}  onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'}  onChange={toggleSubCategory} />Winterwear 
            </p>
           </div>
         </div>
      </div>
      {/* Right Side */}

      <div className='flex-1'>
        <div className='flex justify-between min-[789px]:flex-row  max-[768px]:flex-col-reverse text-xl  min-[420px]:text-2xl mb-4'>
           <Text text1={'ALL'} text2={'COLLECTION'}/>
           {/* Product Sort */}
           <select className='border-2 border-gray-300 text-sm px-2 h-8 w-44 mb-4' onChange={(e)=>{setSortType(e.target.value)}}>
            <option value='relevant'>Sort by : Relevant</option>
            <option value ='low-high'> Sort by : Low to High</option>
            <option value='high-low'> Sort by : High to Low</option>
           </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProduct.map((item,index)=>{
            return(
              <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>
            )
          })
        }
        </div>

      </div>
    </div>
  )
}

export default Collection

