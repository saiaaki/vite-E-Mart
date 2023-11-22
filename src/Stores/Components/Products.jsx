import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import Men from './Men'
import Woman from './Woman'
import Ac from './AC'
// import Books from './Books'
// import Tv from './Tv'
import Watch from './Watch'
import Fridge from './Fridge'
// import Furniture from './Furniture'
import Kitchen from './Kitchen'
// import Speaker from './Speaker'

const Products = () => {
  return (
    <div> 
      <Mobiles/>
      <Computers/>
      <Men/>
      <Woman/>
      <Ac/>
      {/* <Books/> */}
      {/* <Tv/> */}
      <Watch/>
      <Fridge/>
      {/* <Furniture/> */}
      <Kitchen/>
      {/* <Speaker/> */}
    </div>
  )
}

export default Products