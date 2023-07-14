import React from 'react'
import './MainProduct.css';
import {Dataa} from './Dataa';
const MainProduct = () => {
  return (
    <div className='product-card'>
        <div className='thumbnail'>

        </div>
        <div className="prod-details">
            
            {
                Dataa.map(items=>(
       <div>
        <img width="67" src={items.image} alt="images" />
        <p className='para'>{items.title}</p>
      </div>
      ))
    }


        </div>
    </div>
  )
}

export default MainProduct