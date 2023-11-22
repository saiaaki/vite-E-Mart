import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Tvpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            tvData.map((item)=>{
                return(
                    <div>
                       <Link to={`/tv/${item.id}`}>
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

export default Tvpage