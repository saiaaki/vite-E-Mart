import React from 'react'
import  {menData } from '../data/men'
const Men = () => {

const firstfiveImages = menData.slice(0,5)

  return (
  <>
     <div className='proTitle'>
      <h2>Men</h2>
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

export default Men