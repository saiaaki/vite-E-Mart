import React from 'react'
import { useCart } from './context/Cartcontext'
const UserCart = () => {
    const {cartitems,addtocart,removeFromCart} = useCart()
  return (
    <div> 
       { cartitems.map((item)=>{
            return (
                <div className="cart-section">
                    <div className="pageImg1">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="cart-details">
                        <h3>{item.product}</h3>
                        <h2>{item.price}</h2>
                        <h3>{item.model}</h3>
                    </div>
                    <div className='remove'>
                        <button onClick={()=>removeFromCart(item)}>Remove</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default UserCart