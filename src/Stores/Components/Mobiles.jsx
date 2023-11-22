import React from 'react'
import  {mobileData } from '../data/mobiles'
const Mobiles = () => {

const firstfiveImages = mobileData.slice(0,5)

  return (
  <>
    <div className='proTitle'>
        <h2>Mobiles</h2>
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

export default Mobiles