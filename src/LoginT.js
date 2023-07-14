import React from 'react'
import { MdFavorite } from "react-icons/md";
import {MdCardGiftcard} from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdConfirmationNumber } from "react-icons/md";
// import { MdFavorite } from "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
import './LoginT.css';
const LoginT = () => {
  return (
    <div className='logint'>
        <div className="login__in">
        <div className='kk'>
            <h2 className='n'>New customer</h2>
            <h2 className='s'>Signup</h2>
            </div>
        </div>
        <hr />
        <div className="login__in">
            <span className="h"><RiAccountCircleFill /></span>
            <p>My Profile</p>
        </div>
        <hr />
        <div className="login__in">
        <img width="4" height="8" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt='flipkart logo'/>
        <p>Flipkart Pluse Zone</p>
        </div>
        <hr />
        <div className="login__in">
           <span className='h'><MdStoreMallDirectory /></span>
            <p>Oder</p>
        </div>
        <hr />
        <div className="login__in">
          <span className='h'><MdFavorite /></span>
          <p>Wishlist</p>
        </div>
        <hr />
        <div className="login__in">
        <span className='h'><MdCardGiftcard /></span>
        <p>Reward</p>
        </div>
        <hr />
        <div className="login__in">
        <span className='h'><MdConfirmationNumber /></span>
        <p>Gift Crd</p>
        </div>
    </div>
  )
}

export default LoginT