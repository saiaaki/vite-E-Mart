import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Watchpage = () => {
  return (
  <>
  <Navbar/>
  <div className='pageSection'>
    {
        watchData.map((item)=>{
            return(
                <div>
                    <Link to={`/watch/${item.id}`}>
                    <div className='pageImg'>
                        <img src={item.image} className='proimage'/>
                    </div>
                    </Link>
                    
                    <div className='proModel'>
                        {item.brand},{item.model}
                    </div>
                </div>
            )
        })
    }
  </div>
  </>
  )
}

export default Watchpage