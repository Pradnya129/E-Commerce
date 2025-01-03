import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Text from './Text'

const CartTotal = () => {
      const {currency,delivery_fee, getCartAmount}=useContext(ShopContext)
  return (
    <div className='w-full mt-5 max-[320px]:px-5'>
        <div className='sm:text-2xl text-xl'>
         <Text text1={'CART' } text2={'TOTALS'} />
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency} {getCartAmount()}.00</p>
          </div>
          <hr />
          <div className='flex justify-between'>
            <p>Shipping Fee</p>
             <p>{currency} {delivery_fee}.00</p>
          </div>
          <hr />
          <div className='flex justify-between'>
           <p>Total</p>
           <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee } </p>
          </div>
        </div>
      
    </div>
  )
}

export default CartTotal
