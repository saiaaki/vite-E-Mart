import React from 'react'
import  {tvData } from '../data/tv'
const Tv = () => {

const firstfiveImages = tvData.slice(0,5)

  return (
  <>
    <div className='proTitle'>
        <h2>TV</h2>
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

export default Tv