import React from 'react' 
import { fridgeData } from '../data/fridge'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Fridgepage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            fridgeData.map((item)=>{
                return(
                    <div>
                        <Link to={`/fridge/${item.id}`} >
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

export default Fridgepage