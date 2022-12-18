import React from 'react'
import { Link } from 'react-router-dom'
import imge from "../img/img1.jpg"
import img1 from "../img/img1.png"
import joi from "joi"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'



export default function Login({usedata}) {
  let [valdtionError,setVald]=useState([])
  let [apiError,setApiError]=useState(null)
  let [isLoading,setIsLoading]=useState(false)
  let navigate = useNavigate()

  let [userData,setUserData]=useState({
    email:"",
    password:""
  })

  async function sendData(e){
    e.preventDefault();
    if(VAldData()){
      setIsLoading(true)
      let {data} = await axios.post(`https://route-movies-api.vercel.app/signin`,userData)
    
      if(data.message == "success"){
        localStorage.setItem("token",data.token)
        usedata();
        setIsLoading(false)
        setApiError(null)
        navigate("/games/home")
      }else{
        setApiError(data.message)
        setIsLoading(false)
      }
    }
  }
  


  function VAldData(){
    const schema=joi.object({
      email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
        "string.email":"Email must be a valid email",
        "string.empty":"Email Required!"
      }),
      password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
        "string.pattern.base":"Password no match to pattern",
        "string.empty":"Password Required!"
      })
    })
    let res = schema.validate(userData,{abortEarly:false})
    if(res.error){
      setVald(res.error.details)
      
      return false
    }else{
      return true
    }
  }

  function getData(e){
    let current = {...userData}
    current[e.target.name]=e.target.value
    setUserData(current)
  }
  return (
    <>
    <div className="container pt-5">
        <div className="content">
            <div className="row">
            <div className="col-md-6">
              <img src={imge} alt=""  className=' w-100'/>
            </div>
            <div className="col-md-6">
              <div className="item  text-center">
              <img src={img1} className=" w-25 mb-3" alt="" />
              <h2>Log in to GameOver</h2>
              {apiError && <div className=' alert alert-info w-75 mx-auto'>{apiError}</div>}
              <form action="" onSubmit={sendData} className='w-75 mx-auto'>
                <input onChange={getData} type="email" name='email' placeholder='Email' className=' form-control mb-2'/>
                <div className={valdtionError.filter(ele => ele.context.label=="email")[0]?"alert alert-danger mt-4":""}>
                {valdtionError.filter(ele => ele.context.label=="email")[0]?.message}
                </div>
                <input onChange={getData} type="password" name='password' placeholder='password' className=' form-control mb-2'/>
                <div className={valdtionError.filter(ele => ele.context.label=="password")[0]?"alert alert-danger mt-4":""}>
                {valdtionError.filter(ele => ele.context.label=="password")[0]?.message}
                </div>
                <button className='btn btn-dark mt-2 btn-user btn-block w-100 py-2'>
                  {isLoading?<i className='fa fa-spinner fa-spin '></i>:"Login"}
                </button>
                <hr className="line"/>
              </form>
                <p>Not a member yet? 
                  <Link className=' text-decoration-none' to="/Register"><span className='text-info'> Create Account</span>
                <i className='fas fa-chevron-right small text-info'></i></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
