import React from 'react'
// import { Box} from '@mui/system'
import {Data} from './Data';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>

      {
      Data.map(item=>(
       <div>
        <img width="67" src={item.image} alt="images" />
        <p className='para'>{item.title}</p>
      </div>
      ))
    }
    



    </div>
  )
}

export default Navbar