import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Bookspage = () => {
  return (
  <>
  <Navbar/>
  <div className='pageSection'>
    {
        booksData.map((item)=>{
            return(
                <div>
                    <Link to={`/book/${item.id}`}>
                        <div className='pageImg'>
                        <img src={item.image} className='proimage' />
                        </div>
                    </Link>
                
                <div className='proModel'>
                    {item.title},{item.author}
                </div>
                </div>
              
            )
        })
    }
  </div>
  </>
  )
}

export default Bookspage