import React from 'react' 
import { computerData } from '../Stores/data/computers'
import { useParams } from 'react-router-dom'
import Navbar from '../Stores/Components/Navbar'
import { useCart } from '../Stores/context/Cartcontext'
const Computersingle = () => {
    const {id} = useParams()
    const {addtocart,cartitems} = useCart()
    const product = computerData.find((item)=>item.id === id)
  return (
    <>
    <Navbar/>
    <div>
        <div className="ind-page">
            <div className="ind-image">
                <img src={product.image}/> 
            </div>
            <div className="ind-details">
                <div className="ind-company">
                    <h2>{product.company}</h2>
                </div>
                <div className="ind-model">
                    <h3>{product.model}</h3>
                </div>
                <div className="ind-price">
                    <h2>{product.price}</h2>
                </div>
                <div className="ind-disk">
                    <p>{product.description}</p>
                </div>
                <button onClick={()=>addtocart(product)}>Add to cart</button>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Computersingle