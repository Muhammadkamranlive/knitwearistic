import React from 'react'
import { Link } from 'react-router-dom'

function MainNavBar()
{
  const changelight = () =>
  {
    if (localStorage.getItem('mode') === 'dark')
    {
      localStorage.setItem('mode', 'light')
      window.location.reload();
    }else {
      localStorage.setItem('mode', 'dark')
      window.location.reload();
    }
  }
  return (
  <div className='mb-4'>
  <nav class="navbar navbar-expand-lg  navbar-fixed-lg navbar-light bg-white">
  <div class="container-fluid">
  <img class="navbar-brand" style={{height:"70px"}} src="logotop.png" alt="Logo" data-hs-theme-appearance="default" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent" >
      <ul class="navbar-nav px-lg-5  me-auto mb-2 mb-lg-0 d-flex justify-content-end ">
        <li class="nav-item">
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Feature
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#Activity Monitoring">Activity Monitoring</a></li>
            <li><a class="dropdown-item" href="#Bill of Material (BOM)">Bill of Material</a></li>
            <li><a class="dropdown-item" href="#Capacity Holding">Capacity Holding</a></li>
            <li><hr class="dropdown-divider"/></li>      
            <li><a class="dropdown-item" href="#Operation Bulletin">Operation Bulletin</a></li>        
            
            
          </ul>
        </li>      
        <li class="nav-item">
          <a class="nav-link" href="#Pricing">Pricing</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link " href="#FAQ" tabindex="-1" >FAQ</a>
              </li>
              <li class="nav-item">
              <a className="nav-link" href='#' onClick={changelight}>
              <i class="fa-solid fa-moon" style={{fontSize:'20px'}}></i>
            </a>
          </li>
      </ul>
      <form class="d-flex ">
        <Link to='/register' class="btn btn-defualt  " type="submit">Sign Up</Link>        
        <Link to='/login' class="btn btn-primary btn-lg  px-xl-5 mx-4 " type="submit">Login</Link>
      </form>
    </div>
  </div>
 </nav>
   
    </div>
  )
}

export default MainNavBar