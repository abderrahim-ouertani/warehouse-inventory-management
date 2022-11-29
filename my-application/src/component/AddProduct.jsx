import React,{ useState} from 'react';

const AddProduct = ({Add}) => {
  console.log(Add);
const [name,setName]=useState("")
const [description,setDescription]=useState("")
const [section,setSection]=useState("")
const [quantity,setQuantity]=useState(0)

 return(<div className="center1">
    <h1 className='center1'>create Product</h1>
    <form>
    <label >Name</label>
    <input onChange={(event)=>setName(event.target.value)}
    type="text" placeholder="Product name.."></input>

    <label >Description</label>
    <input onChange={(event)=>setDescription(event.target.value)}
    type="text" placeholder="Your product description..."></input>

    <label > <section></section></label>
    <select  onChange={(event)=>setSection(event.target.value)}
    >
      <option >computers</option>
      <option >Smartphones</option>
      <option >House Machines</option>
    </select>
    <label >quantity</label>
    <input onChange={(event)=>setQuantity(event.target.value)}
    type="number" placeholder="Your product quantity..."></input>
   
    <input onClick={()=>Add({name,description,section,quantity})}
     type="submit" value="Submit"></input>
  </form>
    
    </div>
 )
}

export default AddProduct;