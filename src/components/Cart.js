import React from 'react'
import { MdClose} from "react-icons/md";
import { BsCartX} from "react-icons/bs";
import './Cart.css';
import CartItem from './CartItem'
const Cart = ({setShowCart}) => {
  return (
    <div className='cart-panel'>
    
    <div className='opac-layer'>
<div className="cart-content">
    <div className="cart-header">
        <span className='heading'>Shoping Cart</span>
        <span className='close-btn' onClick={()=>setShowCart(false)}>
            <MdClose />
            <span className='text'>
                close
            </span>
        </span>
    </div>
   
    <>
        <CartItem />
        <div className="cart-footer">
            <div className="subtotal">
                <span className="text">
                    Subtotal:</span>
                <span className='text total'>&#8377;1234</span>
            </div>
            <div className="button">
                <button className='Checkout-cta'>Checkout</button>
            </div>
        </div>
    </>
</div>
    </div>
    </div>
  )
}

export default Cart