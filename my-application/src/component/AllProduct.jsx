import React from "react";
import ProductDetails from './ProductDetails.jsx'
const AllProduct = (props) => {
  // console.log(props.data);
  return(
    <div>
    {props.data.map((element,index)=>{
      return(
        <>
        <ProductDetails Key={index} data={element}/>
        </>
      )
    })}
  </div>
    
)};

export default AllProduct;