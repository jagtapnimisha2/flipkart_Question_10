import React from 'react'
import { MdClose} from "react-icons/md";
import {Dataa} from './Dataa'
import './CartItem.css';
const CartItem = () => {
  return (
    <div className='cart-products'>
    
    <div className="cart-product">
        <div className="img-container">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </div>
        <div className="prod-deatils">
            <span className="name">product name</span>
                <MdClose className='close-btn' />
                <div className="gquantity-button">
                  <span className='ss'>-</span>
                  <span className='ss'>5</span>
                  <span className='ss'>+</span>
                </div>
                <div className="textt">
                    <span>3</span>
                    <span>x</span>
                    <span className='hilit'>&#8377;4567</span>
                </div>
        </div>
    </div>
    </div>
  )
}

export default CartItem