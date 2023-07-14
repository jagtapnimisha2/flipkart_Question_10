import React from 'react'
import Headincom from './Headincom'
import { Dataa } from './Dataa'
const Main = () => {
  return (
    <div>
        <Headincom heading={"Best of Electronics"} subheading={"Devices and Accessories"} list={Dataa}/>
        <Headincom heading={"Best Battery Phone"} subheading={"More than 40000mAh"} list={Dataa}/>
        <Headincom heading={"Top Deals Fashions"} subheading={"Mens Cotton Jacket"} list={Dataa}/>

    </div>
  )
}

export default Main