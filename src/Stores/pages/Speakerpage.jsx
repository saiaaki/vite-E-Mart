import React from 'react'  
import { speakerData } from '../data/speaker'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const  Speakerpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            speakerData.map((item)=>{
                return(
                    <div>
                        <Link to={`/speaker/${item.id}`}>
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

export default Speakerpage