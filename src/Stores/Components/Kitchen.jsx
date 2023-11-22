import React from 'react'
import  {kitchenData } from '../data/kitchen'
const Kitchen = () => {

const firstfiveImages = kitchenData.slice(0,5)

  return (
  <>
     <div className='proTitle'>
     <h2>kitchen</h2>
    </div>
   
 
  <div className='prosection'> 
        {
            firstfiveImages.map((item)=>{
                return(
                    <div className='imgbox'>
                        <img className='proimage' src={item.image}/> 
                    </div>
                )
            })
        }
    </div>
  </>
  )
}

export default Kitchen