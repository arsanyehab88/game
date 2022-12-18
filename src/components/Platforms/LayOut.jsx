import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function LayOut({use ,logout}) {
  return (
    <div>
        <NavBar use={use} logout={logout}/>
        <Outlet/>
    </div>
  )
}
