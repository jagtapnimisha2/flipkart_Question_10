import React from 'react'
import Navbar from './Navbar'
import './Home.css';
// import Home from "./components/Home";
// import {Box,styled} from '@mui/material';
// import Data from './components/Data';
import Banner from './Banner'
import Products from './Products';
import SingleProduct from './SingleProduct';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='baner'>
        <Banner />
        <Products />
        <SingleProduct />
        </div>
    </div>
  )
}

export default Home