import React from 'react'
import  {booksData } from '../data/books'
const Books = () => {

const firstfiveImages = booksData.slice(0,5)

  return (
  <>
  <div className='proTitle'>
  <h2>Books</h2>
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

export default Books