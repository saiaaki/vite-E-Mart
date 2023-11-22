import React from 'react'
import  {mobileData } from '../data/mobiles'    
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
const Mobilepage = () => {
  return (
  <>
    <Navbar/>
  <div className='pageSection'> 
        {
            mobileData.map((item)=>{
                return(
                    <div>
                        <Link to={`/mobiles/${item.id}`}>
                        <div className='pageImg'>
                            <img className='proimage' src={item.image}/> 
                        </div>
                        </Link>
                       
                        <div className='proModel'>
                            {item.company},{item.model}
                        </div>
                    </div>
                     
                )
            })
        }
    </div>
  </>
  )
}

export default Mobilepage