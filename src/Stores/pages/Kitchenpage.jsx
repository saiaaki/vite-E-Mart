import React from 'react' 
import { kitchenData } from '../data/kitchen'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const  Kitchenpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            kitchenData.map((item)=>{
                return(
                    <div>
                        <Link to={`/kitchen/${item.id}`}>
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

export default Kitchenpage