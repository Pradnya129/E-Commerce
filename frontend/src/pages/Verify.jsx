import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {
const navigate = useNavigate()
const [searchParams,setSearchParams]=useSearchParams()
const {token,setCartItems,backendUrl}=useContext(ShopContext)

const success = searchParams.get('success')
const orderId = searchParams.get('orderId')

const verifyPayment = async()=>{
 try {
    if(!token){
        return null
    }
    const response = await axios.post(backendUrl+'/api/order/verifystripe',{success,orderId},{headers:{token}})

    if(response.data.success){
        setCartItems({})
        navigate('/orders')
    }else{
        navigate('/cart')
    }
 } catch (error) {
    console.log(error)
    toast.error(error.message)
 }
}
useEffect(()=>{
verifyPayment()
},[token])
  return (
    <div>
      hh
    </div>
  )
}

export default Verify
