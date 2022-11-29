import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import AllProduct from './component/AllProduct.jsx'
import AddProduct from './component/AddProduct.jsx'
function App() {
  const [view,setView] = useState("product");

  const[data,setData]=useState([])
  

  useEffect(()=>{
    axios.get("http://localhost:5000/prod/prod").then(res=>setData(res.data))
},[])

const changeView=(option) =>{
  setView(option)
}

const AddProd=(prod) =>{
  axios.post(`http://localhost:5000/prod/prod`, prod)
    
 this.changeView("product")
}




const renderView=(option)=> {
    
  if (option === "product") { 
    return <AllProduct data={data}/>;
  } 
  else if(option==="add Product"){
    return <AddProduct Add={AddProd}/>
  }
}




return (
  <div>
        <nav className=" nav">
          <h2
            className={
              view !== "add Product"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              changeView("add Product");
            }}
          >
            Add Product
          </h2>
          <h2 
            className={ 
              view === "AllProduct"
            }
            onClick={() => changeView("product")}
          >
            Warehouse Storage
          </h2>
          
        </nav>

    <div >
      {/* <h1 className='titre'>Warehouse</h1> */}
      <img className='soura center1' src="https://img.freepik.com/vecteurs-premium/batiment-entrepot-illustration-dessin-anime-boites_75802-315.jpg?w=2000" alt="" />
      {renderView(view)}
    
    </div>
  </div>
)
}

export default App;
