import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const navigate=useNavigate()
  const [currentState,setCurrentState]=useState('Login')
  const {token,setToken,backendUrl}=useContext(ShopContext)
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')


 const onSubmitHandler = async(e) =>{
 e.preventDefault()
 try {
  if (currentState === 'Sign Up' && (!name || !email || !password)) {
    toast.error('Please fill out all fields to sign up.');
    return;
  }

  if (currentState === 'Login' && (!email || !password)) {
    toast.error('Please enter both email and password to log in.');
    return;
  }

   if(currentState === 'Sign Up'){
   
    const response = await axios.post(backendUrl+'/api/user/register',{name,email,password})
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
      navigate('/')
    }else{
      
      toast.error(response.data.message)
    }
    
  }else{
    const response = await axios.post(backendUrl+'/api/user/login',{email,password})
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
      toast.success("Login Successfully")
  }else{
    toast.error(response.data.message)
  }
}

  
 } catch (error) {
   console.log(error)
   toast.error(error.message)
 }
 }

 useEffect(()=>{
  if(token){
    navigate('/')
  }
 },[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      { currentState == 'Login' ? '' : <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} className='w-full px-3 py-2 border border-gray-800' placeholder='Name' />}
      <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' />
      <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
           {
            currentState === 'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'> Create account </p>
            : <p onClick={()=>setCurrentState('Login')} className ='cursor-pointer'> Login here </p>
           }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
