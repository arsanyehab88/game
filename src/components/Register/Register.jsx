import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import imge from "../img/img1.jpg"
import axios from "axios"
import { useEffect } from 'react'
import joi from "joi"
import { useNavigate } from 'react-router-dom'


export default function Register() {

  let [valdtionError,setVald]=useState([])
  let [apiError,setApiError]=useState(null)
  let [isLoading,setIsLoading]=useState(false)
  let navigate = useNavigate()

  let [userData,setUserData]=useState({
    first_name:"",
    last_name:"",
    age:0,
    email:"",
    password:""
  })

  async function sendData(e){
    e.preventDefault();
    if(VAldData()){
      setIsLoading(true)
      let {data} = await axios.post(`https://route-movies-api.vercel.app/signup`,userData)
      if(data.message=="success"){
        setIsLoading(false)
        setApiError(null)
        navigate("/login")
      }else{
        setApiError(data.message)
        setIsLoading(false)
      }
    }
  }
  


  function VAldData(){
    const schema=joi.object({
      first_name:joi.string().min(3).max(15).required().messages({
        "string.min":"first Name length must be at least 3 characters long",
        "string.empty":"First Name Required!",
        "string.max":"first Name length must be less than or equal to 15 characters long"
      }),
      last_name:joi.string().min(3).max(15).required().messages({
        "string.min":"Last Name length must be at least 3 characters long",
        "string.empty":"Last Name Required!",
        "string.max":"Last Name length must be less than or equal to 15 characters long"
      }) ,
      age:joi.number().min(17).required().messages({
        "number.min":"you must be 17+",
        "number.empty":"Age Required!"
      }),
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
        <div className="content ">
            <div className="row">
            <div className="col-md-6">
              <img src={imge} alt=""  className=' w-100'/>
            </div>
            <div className="col-md-6">
              <div className="item  text-center mt-5">
              <h2 className='mb-4'>Create My Account!</h2>
              <div className="container">
              {apiError && <div className=' alert alert-info'>{apiError}</div>}
                <form action="" onSubmit={sendData}>

                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" onChange={getData} className=' form-control mb-2' id='first_name' name='first_name' placeholder='first name' />
                        <div className={valdtionError.filter(ele => ele.context.label=="first_name")[0]?"alert alert-danger mt-4":""}>
                        {valdtionError.filter(ele => ele.context.label=="first_name")[0]?.message}
                        </div>                      </div>
                      <div className="col-md-6">
                      <input type="text" onChange={getData}  className=' form-control mb-2' id='last_name' name='last_name' placeholder='last name' />
                      <div className={valdtionError.filter(ele => ele.context.label=="last_name")[0]?"alert alert-danger mt-4":""}>
                        {valdtionError.filter(ele => ele.context.label=="last_name")[0]?.message}
                        </div>                      </div>
                      <div className="col-md-12">
                        <input type="email" onChange={getData}  name='email' placeholder='Email' id='email'    className=' form-control mb-2'/>
                        <div className={valdtionError.filter(ele => ele.context.label=="email")[0]?"alert alert-danger mt-4":""}>
                        {valdtionError.filter(ele => ele.context.label=="email")[0]?.message}
                        </div>                      </div>
                      <div className="col-md-12">
                        <input type="number" onChange={getData}   placeholder='age' id='age' name='age' className=' form-control mb-2'/>
                        <div className={valdtionError.filter(ele => ele.context.label=="age")[0]?"alert alert-danger mt-4":""}>
                        {valdtionError.filter(ele => ele.context.label=="age")[0]?.message}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input type="password" onChange={getData}   placeholder='password' id='password' name='password' className=' form-control mb-2'/>
                        <div className={valdtionError.filter(ele => ele.context.label=="password")[0]?"alert alert-danger mt-4":""}>
                        {valdtionError.filter(ele => ele.context.label=="password")[0]?.message}
                        </div>
                      </div>
                    </div>
                  <button className='btn btn-dark mt-2 btn-user btn-block w-100 py-2'>
                    {isLoading?<i className='fa fa-spinner fa-spin '></i>:"signup"}
                  </button>
                  <hr className="line"/>
                </form>
              </div>

                <p>Already a member? 
                  <Link className=' text-decoration-none' to="/"><span className='text-info'> Login</span>
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
