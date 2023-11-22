import React from 'react' 
import { tvData } from '../Stores/data/tv'
import { useParams } from 'react-router-dom'
import Navbar from '../Stores/Components/Navbar'
const Tvsingle = () => {
    const {id} = useParams()
    const product = tvData.find((item)=>item.id === id)
  return (
    <>
    <Navbar/>
    <div>
        <div className="ind-page">
            <div className="ind-image">
                <img src={product.image}/> 
            </div>
            <div className="ind-details">
            <div className="ind-model">
                <h3>{product.model}</h3>
            </div>
            <div className="ind-price">
                <h2>{product.price}</h2>
            </div>
            <div className="ind-disk">
                <p>{product.description}</p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tvsingle