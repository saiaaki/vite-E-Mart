import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/Cartcontext'
const Navbar = () => {
    const {cartitems} = useCart()
  return (
    <>
    <div className='navsection'>
    
        <div className='title'>
            <Link  style={{textDecoration: 'none'}} to='/'>
                  <h2>E-Mart</h2>
            </Link>
        </div>
        {/* <div className='search'>
            <input type='text' placeholder='search...'></input>
        </div> */}
        {/* <div className='user'>
            <div className="user-detail"> SignIn/SignUp </div>
           
        </div> */}
        <div className='cart-items'>
            <Link to='/cart'  style={{textDecoration: 'none'}}  >
            <div className="cart" >Cart <span>{cartitems.length}</span></div>
            
            </Link>
           
        </div>
     
    </div>
    <div className='subMenu'>
        <ul>
        <Link   style={{textDecoration: 'none'}} to='/mobiles'>
            <li>Mobiles</li>
        </Link>
        <Link  style={{textDecoration: 'none'}} to='/computer'>
             <li>Computers</li>
        </Link>
        <Link  style={{textDecoration: 'none'}} to='/men'>
        <li>Mens wear</li>
        </Link>
        <Link  style={{textDecoration: 'none'}} to='/women'>
        <li>woman wear</li>
        </Link>
        <Link  style={{textDecoration: 'none'}} to='/ac'>
        <li>AC</li>
        </Link>
        {/* <Link  style={{textDecoration: 'none'}} to='/book'>
        <li>Books</li>
         </Link> */}
        {/* <Link  style={{textDecoration: 'none'}} to='/tv'>
        <li>TV</li>
        </Link> */}
        <Link  style={{textDecoration: 'none'}} to='/watch'>
        <li>Watch</li>
        </Link>
       <Link  style={{textDecoration: 'none'}} to='/fridge'>
       <li>Fridge</li>
       </Link>
        {/* <Link  style={{textDecoration: 'none'}} to='/furniture'>
        <li>Furniture</li>
        </Link> */}
       <Link  style={{textDecoration: 'none'}} to='/kitchen'>
       <li>kitchen</li>
       </Link>
        {/* <Link  style={{textDecoration: 'none'}} to='/speaker'>
        <li>Speaker</li>
        </Link> */}
        
        </ul>
        
    </div>
    </>
    
  )
}

export default Navbar