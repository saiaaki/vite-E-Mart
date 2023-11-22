import React from 'react'
import  {womanData } from '../data/woman'
const Woman = () => {

const firstfiveImages = womanData.slice(0,5)

  return (
  <>
    <div className='proTitle'>
    <h2>woman</h2>
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

export default Woman