import React from 'react'
import  {speakerData } from '../data/speaker'
const Speaker = () => {

const firstfiveImages = speakerData.slice(0,5)

  return (
  <>
    <div className='proTitle'>
     <h2>Speaker</h2>
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

export default Speaker