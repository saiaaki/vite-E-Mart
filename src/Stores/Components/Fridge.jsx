import React from 'react'
import  {fridgeData } from '../data/fridge'
const Fridge = () => {

const firstfiveImages = fridgeData.slice(0,5)

  return (
  <>
   <div className='proTitle'>
   <h2>Fridge</h2>
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

export default Fridge