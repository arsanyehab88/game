import React from 'react'
import { Link } from 'react-router-dom';
import Loading from "../loading/loading"
import useForm from '../Platforms/useForm';



export default function Home() {
  

    let {data,isloading}=useForm('sort-by','popularity')
  return (
    <>
      {isloading?<Loading/>:
      <>
      <div className="layer">
        <div className="home">
            <h1 className=' mb-3'>Find & track the best <span className='text-primary  '>free-to-play</span> games!</h1>
            <p>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <Link to="/games/all" className=' mt-3 btn btn-outline-secondary'>Browse Games</Link>
            
            </div>
      </div>
  
        <div className="container pb-5 pt-5">
          <div className="row">
            <div className="col-md-12 mb-3">
            <div className="header pt-5">
              <h3><i className='fas fa-robot mr-2'></i>Personalized Recommendations</h3>
            </div>
            </div>
            {data?.splice(0,3).map((ele,i)=>(
                <div key={i} className="col-md-4  mb-2">
                  <Link to={"/Details/"+ele.id}>
                    <div className="game rounded-3 pb-2">
                      <img src={ele.thumbnail} className="w-100" alt="" />
                      <div className="title d-flex p-3 pb-0 justify-content-between">
                        <h4>{ele.title}</h4>
                        <span className='badge badge-ftg d-flex align-items-center bg-info'>Free</span>
                      </div>
                    </div>                  
                  </Link>

                  
                  
            </div>
            ))}
          </div>
        </div>
      </>
    
    }
    </>
  )
}
