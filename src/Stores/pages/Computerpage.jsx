import React from 'react'
import Navbar from '../Components/Navbar'
import {computerData} from '../data/computers'
import { Link } from 'react-router-dom'
const Computerpage = () => {
  return (
     <>
     <Navbar/>
     <div className='pageSection'>
        {
            computerData.map((item)=>{
                return(
                    <div>
                        <Link to={`/computer/${item.id}`}>
                        <div className='pageImg'>
                            <img className='proimage' src={item.image}/>
                        </div>  
                        </Link>
                       
                        <div>
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

export default Computerpage