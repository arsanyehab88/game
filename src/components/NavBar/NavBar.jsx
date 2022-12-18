import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from "../img/img1.png"

export default function NavBar({use,logout}) {
  let [click,setClick]=useState("pc")
  let [browser,setBrowser]=useState("browser")

  
  
  return (
    <>
<nav className="navbar navbar-expand-lg position-fixed nav-z w-100 bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand icon ms-5" to="">
      <img src={img} alt="" />
      Game over
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {use? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/games/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/games/all'>All</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Platforms
          </Link>
          <ul className="dropdown-menu ">
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Platforms/pc">Pc</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold"  to='/games/Platforms/browser'> Browser</Link></li>
          </ul>  
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to='SortBy' role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort By
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item text-secondary  fw-bold" to="/games/sortby/release-date">release-date</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/sortby/popularity">popularity</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/sortby/alphabetical">alphabetical</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/sortby/relevance">relevance</Link></li>
          </ul>  
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to='Categories' role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/racing">racing</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/sports">sports</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/social">social</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/shooter">shooter</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/open-world">open-world</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/zombie">zombie</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/fantasy">fantasy</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/action-rpg">action-rpg</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/action">action</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/flight">flight</Link></li>
            <li><Link className="dropdown-item text-secondary fw-bold" to="/games/Categories/battle-royale">battle-royale</Link></li>
          </ul>  
        </li>
      </ul>:""}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {use?"":      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/'>Login</Link>
        </li>}
      {use?        <li className="nav-item">
          <button onClick={logout} className='btn btn-outline-primary'>
          logOut
          </button>
          
        </li>:""}
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}
