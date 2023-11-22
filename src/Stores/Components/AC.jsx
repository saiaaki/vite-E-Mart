import React from 'react'
import  {acData } from '../data/ac'
const Ac = () => {

const firstfiveImages = acData.slice(0,5)

  return (
  <>
  <div className='proTitle'>
  <h2>AC</h2>
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

export default Ac