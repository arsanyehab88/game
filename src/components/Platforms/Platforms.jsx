import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useForm from './useForm';
import Loading from '../loading/loading'
import Shared from '../Shared/Shared';

export default function Platforms() {
 let {Platforms}= useParams()
 let {data,isloading}=useForm(`platform`,Platforms) 
 let [x,setX]=useState(20)
 function more(){
   if(x<=data.length){
     setX(x+=20)
   }
 }

  return (
    <>
      {isloading? <Loading/>:
            <>
            <div className="all">
                <div className="container pt-5 ">
                  <div className="row gy-3">
                  {data?.splice(0,x).map((ele,i)=>(
                        <div key={i} className="col-md-3 pb-3">               
                            <Shared ele={ele}/>
                    </div>
                    ))}
                    
                  </div>
              </div>
              <button onClick={more} className='btn btn-outline-secondary mt-5 mb-3 d-flex mx-auto justify-content-between'>More Games <i className='fas fa-angle-right mt-1'></i></button>
            </div>
        </>
      
      }
    </>
  )
}
