import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Loading from '../loading/loading';

export default function Details() {
  const [res, setres] = useState(null)
  let [isloading,setIsloading]=useState(true)
  let {id}=useParams()
  async function get(){
    let {data} = await axios('https://free-to-play-games-database.p.rapidapi.com/api/game',{
      params:{id},
      headers:{
        'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
    
    setres(data)

  }
    useEffect(()=>{
      get()
    setIsloading(false)
    },[])
  
  return (
    <>
      {isloading? <Loading/>:
      <>
          <div className="details">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                  <img src={res?.thumbnail} className="w-100 mb-3" alt="" />
                  <button className='btn btn-secondary'>Free</button>
                  <a className='btn btn-info text-white fs-5 btn-block w-75 py-2 ms-3' href={res?.game_url} target="_blank">Play Now <i className='fas fa-sign-out-alt'></i></a>
              </div>
              <div className="col-md-8">
                <h2>{res?.title}</h2>
                <h4>About {res?.title}</h4>
                <p>{res?.description}</p>
                <h4 className='pb-2'>Minimum System Requirements</h4>
                <ul className=' list-unstyled'>
                  <li className='pb-3'>graphics: {res?.minimum_system_requirements?.graphics}</li>
                  <li className='pb-3'>memory: {res?.minimum_system_requirements?.memory}</li>
                  <li className='pb-3'>os:{res?.minimum_system_requirements?.os}</li>
                  <li className='pb-3'>processor: {res?.minimum_system_requirements?.processor}</li>
                  <li className='pb-3'>storage: {res?.minimum_system_requirements?.storage}</li>
                </ul>
                    <div className="carsoul pb-5">
                       <Carousel fade>
                        {res?.screenshots.map((ele,i)=>(
                          <Carousel.Item key={i}>
                            <img
                              className="d-block w-100"
                              src={ele?.image}
                              alt=""
                            />
                          </Carousel.Item>        
                        ))}

                       </Carousel>
                    </div>
                  <div className="end">
                    <h3>Additional Information</h3>
                      <div className="d-flex justify-content-between">
                          <div>
                          <p className=' fw-light'>Title</p>
                          <h6 className='pb-4'>{res?.title}</h6>
                          <p>Release Date</p>
                          <h6>{res?.release_date}</h6>
                        </div>
                        <div>
                          <p>Developer</p>
                          <h6 className='pb-4'>{res?.developer}</h6>
                          <p>Genre</p>
                          <h6 className='pb-4'>{res?.genre}</h6>
                        </div>
                        <div>
                          <p>Publisher</p>
                          <h6 className='pb-4'>{res?.publisher}</h6>
                          <p>Platform</p>
                          <h6 className='pb-4'><i className='fab fa-windows me-1'></i> {res?.platform}</h6>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
      
      </>
      
      }
    </>
  )
}
