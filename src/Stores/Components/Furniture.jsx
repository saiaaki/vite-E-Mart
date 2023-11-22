import React from 'react'
import  {furnitureData } from '../data/furniture'
const Furniture = () => {

const firstfiveImages = furnitureData.slice(0,5)

  return (
  <>
    <div className='proTitle'>
    <h2>Furniture</h2>
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

export default Furniture