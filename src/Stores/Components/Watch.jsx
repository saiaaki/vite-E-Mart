import React from 'react'
import  {watchData } from '../data/watch'
const Watch = () => {

const firstfiveImages = watchData.slice(0,5)

  return (
  <>
    <div className='proTitle'>
      <h2>Watch</h2>
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

export default Watch