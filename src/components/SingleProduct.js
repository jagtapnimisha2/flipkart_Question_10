import React from 'react'
import {Dataa} from './Dataa'
import './SingleProduct.css'
import { FaCartPlus, FaFacebookSquare, FaTwitter , FaInstagram, FaLinkedin, FaPinterest} from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import RelatedPoduct from './RelatedPoduct';
const SingleProduct = () => {
  return (
    <div className='single-product-main-content'>
    <div className="layout">
        <div className="single-product-page">
            <div className="left">
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            </div>
            <div className="right">
              <h1 className='name'> School Bag</h1>
              <span className='price'> Price: &#8377;2000</span><br></br>
              <span className='desc'>Available offers</span><br></br>
              <span className='desc'>1) Bank offer 5% Unlimited Cashbank on Flipkart Axis Bank Creadit Cart.</span><br></br>
              <span className='desc'>2) Bank Offer 10% Off on Bank of Borad Mastercard debit card first time transaction,Terms and Conditions apply.</span><br></br>
              <span className='desc'>3) Purchase this Bag or Applicance and Get Extra Rs.500 Off on Select ACs.</span><br></br>
              <span className='desc'>4) Partner OfferExtra 10% off upto Rs.500 on next furnture purchase.</span><br></br>
              <div className='cart-buttons'>
                <div className="quantity-button">
                  <span className='s'>-</span>
                  <span className='s'>5</span>
                  <span className='s'>+</span>
                </div>
                <br>
                </br>
                <>
                
                <button className='add-to-cart-button'>
                <FaCartPlus  size={20}/>
                  ADD TO CART
                </button>
                </>
              </div>
              <span className="divider" />
<hr></hr>
              <div className="info-item">
                <span className="text-bold">Category:
                <span className='ss'>Headphones</span>
                </span>
                <span className="text-bold">Share:
                <span className='social-icons'>
                  <FaFacebookSquare size={16} />
                  <FaTwitter  size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} /> 
                  <FaPinterest scale={16} />              </span>
                </span>
              </div>
                <div>
                  <button className='add-to-cart-butto'>
                  <BsLightningFill size={20} />
                  BUY NOW</button>
                </div>
            </div>
        </div>
{/* <RelatedPoduct /> */}
    </div>
    </div>
  )
}

export default SingleProduct