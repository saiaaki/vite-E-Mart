import { createContext, useContext, useState } from "react";


const CartContext = createContext()
 
 export const Cartprovider= ({children})=>{
    const [cartitems,setCartitems] = useState([])
    const addtocart =(item)=>{
        setCartitems([...cartitems , item])
    }
    const removeFromCart = (item)=>{
        setCartitems(cartitems.filter((apple)=>apple!== item))
    }

    return(
        <CartContext.Provider value={{cartitems,addtocart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () =>{
    return useContext(CartContext)
}