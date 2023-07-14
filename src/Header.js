import React from 'react';
import './Header.css';
import {MdExpandMore} from 'react-icons/md';
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from './MoreT';
import LoginT from './LoginT';
import 'tippy.js/themes/light.css'
import Cart from './components/Cart' 
import { useState } from 'react';
import {Dataa} from './components/Dataa'
const Header = () => {
  const [showCart,setShowCart]=useState(false);
  const [showSearch,setShowSearch]=useState(false);
  return (
    <>
    <div className='headerr'>
       <div className='headerr__firstt'>
       <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
      <div className='mainnn'>
       <span style={{
        fontSize:'11px',
        color:"white",
        fontStyle:"italic",
       }}>
       Explore
       </span>
       <span
       style={{
        color:'#f9e107',
        fontSize:"11px",
        fontStyle:"italic",
       }}>
       Plus
      
       <div style={{
        width:"10px"
       }}>
       <img width="10" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt='flipkart logo'/>
       </div>
       </span>
       </div>
       </div> 
       <div className="header__second">
        <input placeholder='Search for products,brands and more' type="text" autoFocus/>
      <span className='MuiSvgIcon-root'>
      <BiSearch />
      </span>
       </div>
       <div className="header__third">
       <Tippy
       theme='light'   className='l'
       content={<LoginT />}  interactive="true">
       <button>Login</button>
       </Tippy>
       </div>
        
       <div className="header__fifth1">
        <p><a className='aa' href={"https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect"}>
        Become a saller</a></p>
      </div>
       <div className="header__fourth">
       <Tippy theme='light' content={<MoreT />} interactive="true">
          <span>More</span>
       </Tippy>
        <span className='MuiSvgIcon-root'>
         <MdExpandMore />
       </span>
       </div>
       <div className="header__fifth" onClick={()=>setShowCart(true)}>
        <FaShoppingCart />
        <p>Cart</p>
       </div>
    </div>
    <div>
      {showCart && <Cart setShowCart={setShowCart} />}
    </div>
    
    
    
    <div className="search-result-content">
        <div className="search-resuls">
        </div>
       </div>

    </>
    
  )
}

export default Header