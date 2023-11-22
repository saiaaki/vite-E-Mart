import React from 'react'
import { menData } from '../data/men'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Menpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            menData.map((item)=>{
                return(
                    <div>
                        <Link to={`/men/${item.id}`}>
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

export default Menpage