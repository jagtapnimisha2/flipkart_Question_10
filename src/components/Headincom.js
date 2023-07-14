import { flexbox } from "@mui/system";
import React from "react";
import "./Headincom.css"
// import {useNavigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { colors } from "@mui/material";
const Headincom = ({ heading, subheading, list }) => {
  // const navigate = useNavigate();
  const gotoproductpage = () =>{
    alert("SingleProduct");
    
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: 16,
        }}
      >
        <div className="left-heading-com">
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
        <div className="right-heading-com">
          <button style={{backgroundColor:"#2874f0",border:"none",color:"white",fontSize:16}}>View All</button>
        </div>
      </div>
      <div className="list-com" >
        {list.map((items) => (
          <div className="list-com-child"  onClick={() => gotoproductpage()}>
            <img src={items.image} alt="images" />
            <p className="para">{items.title}</p>
            <p className="Price">Price: {items.price}</p>
            <p className="category">{items.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headincom;
