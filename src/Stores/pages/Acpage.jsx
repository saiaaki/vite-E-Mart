import React from 'react' 
import { acData } from '../data/ac'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Acpage = () => {
  return (
  <>
  <Navbar/>
  <div className='pageSection'>
    {
        acData.map((item)=>{
            return(
                <div>
                <Link to={`/ac/${item.id}`}>
                <div className='pageImg'>
                    <img src={item.image} className='proimage' />
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

export default Acpage