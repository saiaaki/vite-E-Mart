import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Womenpage = () => {
  return (
     <>
     <Navbar/>
     <div className='pageSection'>
        {
            womanData.map((item)=>{
                return(
                    <div>
                        <Link to={`/women/${item.id}`}>
                            <div className='pageImg'>
                                <img src={item.image} className='proimage'/>
                            </div>
                        </Link>
                        <div className='proModel'>
                            {item.company}{item.model}
                        </div>
                    </div>
                )
            })
        }
     </div>
     </>
  )
}

export default Womenpage