import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "../NavBar/NavBar.jsx"
export default function MainLayOut({use ,logout}) {
  return (
    <>
    <NavBar use={use} logout={logout}/>
    <Outlet/>
    </>
  )
}
