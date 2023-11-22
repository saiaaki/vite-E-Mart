import React from 'react'
import {computerData} from '../data/computers'
const Computers = () => {
    const firstfiveImages = computerData.slice(0,5)
  return (
   <>
    <div className='proTitle'>
    <h2>Computers</h2>
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

export default Computers