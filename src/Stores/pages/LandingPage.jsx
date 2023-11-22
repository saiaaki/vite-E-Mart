 import React from 'react'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
 
 const LandingPage = () => {
   return (
    <>
    <div> 
        <Navbar/>
        <Products/>
     </div>
     <footer className='footer'>
      <center>
          
        <h3> © [2023] <i>E-Mart</i>  All rights reserved.  </h3>
          <h4> Privacy Policy | Terms of Service | Cookie Policy</h4>
      </center>
     </footer>
     </>
     
   )
 }
 
 export default LandingPage