import React  from 'react';
import axios from 'axios'
import { useEffect } from 'react';
const ProductDetails = (props) => {
  
 return(
  <div>
  <div className='center' >
    <div className="product-list">
      <div className="product-list-item">{props.data.name}
      <p>section: {props.data.section}</p>
      <p>description: {props.data.description}</p>
      <div >quantity :{props.data.quantity}</div>
        <button onClick={()=>{
          axios.put(`http://localhost:5000/prod/${props.data.name}`)
        window.location.reload()
        }} >➕</button>
        <button onClick={()=>{
          axios.put(`http://localhost:5000/prod/${props.data.name}/hello`)
        window.location.reload()
        }}
        >➖</button>
        <button onClick={()=>{
          axios.delete(`http://localhost:5000/prod/${props.data.name}`)
        window.location.reload()
        }}
        >❌</button>
      </div>
     
    </div>
  </div>
  </div>
 )
}

export default ProductDetails;