import React, { useEffect, useState } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayOut from './components/MainLayOut/MainLayOut'
import Login from './components/Login/Login'
import jwt_decode from "jwt-decode";
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import All from './components/All/All';
import Categories from './components/Categories/Categories';
import Details from './components/Details/Details';
import LayOut from './components/Platforms/LayOut';
import Platforms from './components/Platforms/Platforms';
import Sortby from './components/SortBy/Sortby';
import NotFound from './components/NotFound/NotFound';







export default function App() {

  let [use, setUse] = useState()
  

  function ProtuctRouters(props) {
    if (localStorage.getItem("token")) {
      return props.children
    } else {
      return <Navigate to="/" />
    }
  }

  function usedata() {
    let token = localStorage.getItem("token")
    let decoded = jwt_decode(token)
    setUse(decoded)

  }

  function logout() {
    localStorage.removeItem("token")
    setUse(null)
    return <Navigate to="/"/>
  }


  useEffect(() => {
    if (localStorage.getItem("token")) {
      usedata()
    }
  }, [])

  const routers = createBrowserRouter([{
    path: "/", element: <MainLayOut use={use} logout={logout}  />, children: [
      { index:true, element: <Login usedata={usedata} /> },
      { path: "Register", element: <Register /> },


      {
        path: "Details/:id", element:
          <ProtuctRouters><Details /></ProtuctRouters>
      },
      {
        path:"*",element:<NotFound/>
      }
    ]
  },
    {path:"/games",element:<LayOut use={use} logout={logout} />,children:[
      {path:"home",element:
      <ProtuctRouters><Home/></ProtuctRouters> },
      {
        path: "all", element:
          <ProtuctRouters><All /></ProtuctRouters>
      },
      {
        path: "Platforms/:Platforms", element:
          <ProtuctRouters><Platforms /></ProtuctRouters>
      },
      {
        path: "Categories/:cat", element:
         <ProtuctRouters><Categories /></ProtuctRouters> 
      },
      {
        path: "sortby/:sort", element:
         <ProtuctRouters><Sortby /></ProtuctRouters> 
      },
      {
        path:"*",element:<NotFound/>
      }
    ]},

  
  ])

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
      
    </>
  )
}


