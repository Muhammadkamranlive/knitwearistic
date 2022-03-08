import React from 'react'
import Header from './Header'
import RightSideBarNav from './RightSideBarNav'
import SideDetachedBar from './SideDetachedBar'
import VerticalNavbar from './VerticalNavbar'
import Fade from 'react-reveal/Fade';
function PlannerDashboard()
{
  const changedark = () =>
  {
    localStorage.setItem('mode', 'dark')
    window.location.reload();
  }
  const changelight = () =>
  {
    localStorage.setItem('mode', 'light')
    window.location.reload();
  }
  return (
      <div>
    <header id="header" class="navbar navbar-expand-lg navbar-fixed-lg navbar-light bg-white">
    <div class="container">
      <div class="navbar-nav-wrap">
        
        <a class="navbar-brand" href="/" aria-label="Front">
          <img class="navbar-brand" src="logotop.png" style={{height:"70px"}} alt="Logo" data-hs-theme-appearance="default" />
          
        </a>
        

        <div class="navbar-nav-wrap-content-start ">
          <div class="d-none d-lg-block px-lg-5 mx-lg-5">
            <div class="dropdown">
             
              <div class="d-none d-lg-block">
                <div class="input-group input-group-merge navbar-input-group">
                  <div class="input-group-prepend input-group-text">
                    <i class="fa fa-search"></i>
                  </div>

                  <input type="search" class="js-form-search form-control" placeholder="Search..." aria-label="Search.."  />
                
                </div>
              </div>

              
             
             
             

            </div>

          </div>
          
        </div>

        <div class="navbar-nav-wrap-content-end">
          
          <ul class="navbar-nav">
            

            <li class="nav-item d-none d-sm-inline-block">
              
              <div class="dropdown">
                <button type="button" class="btn btn-icon btn-ghost-secondary rounded-circle" id="navbarAppsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                <i class="fa-solid fa-bell"></i>
                </button>

                 <div class="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarAppsDropdown" style={{ width: "25rem" }}>
                  
                  <div class="card-header">
                    <h4 class="card-title">These brands reached threshold of 30%</h4>
                  </div>
                  
                  <div class="card-body card-body-height">
                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="atlassian-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">Alkram </h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                    </a>

                   

                   

                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="frontapp-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">zara</h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                    </a>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="atlassian-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">Alkram </h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                    </a>

                   

                   

                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="frontapp-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">zara</h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                        </a>
                        <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="atlassian-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">Alkram </h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                    </a>

                   

                   

                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="frontapp-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">zara</h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                        </a>
                        <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="atlassian-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">Alkram </h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                    </a>

                   

                   

                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="frontapp-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">zara</h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                        </a>
                        <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="atlassian-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">Alkram </h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                    </a>

                   

                   

                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs avatar-4x3" src="frontapp-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-3">
                          <h5 class="mb-0">zara</h5>
                          <p class="card-text text-body">30% of thier total is achieved</p>
                        </div>
                      </div>
                    </a>
                  </div>
                 

                  
                  <a class="card-footer text-center" href="#">
                    View all <i class="fa fa-arrow-right"></i>
                  </a>
                
                </div>
              </div>
            
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              
              <div class="dropdown">
                <button type="button" class="btn btn-icon btn-ghost-secondary rounded-circle" id="navbarAppsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                <i class="fa-solid fa-moon"></i>
                </button>

                 <div class="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarAppsDropdown" style={{ width: "25rem" }}>
                  
                  <div class="card-header">
                    <h4 class="card-title">User Personalization</h4>
                  </div>
                  
                  <div class="card-body card-body-height">
                    <button class="dropdown-item" onClick={changedark}>
                    <i class="fa-solid fa-circle-half-stroke py-1 px-1"></i>
                          Change to dark Mode
                        </button>
                    <button class="dropdown-item" onClick={changelight}>
                    <i class="fa-solid fa-moon py-1 px-1"></i>
                          Change to light Mode
                    </button>

                 
                
                      </div>
                      </div>
              </div>
            
            </li>
            <li class="nav-item d-none d-sm-inline-block">
           
              <button class="btn btn-ghost-secondary btn-icon rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasActivityStream" aria-controls="offcanvasActivityStream">
              <i class="fa-solid fa-bars"></i>
              </button>
            
            </li>

            <li class="nav-item">
              
              <div class="dropdown">
                <a class="navbar-dropdown-account-wrapper" href="javascript:;" id="accountNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                  <div class="avatar avatar-sm avatar-circle">
                    <img class="avatar-img" src="img6.jpg" alt="Image Description" />
                    <span class="avatar-status avatar-sm-status avatar-status-success"></span>
                  </div>
                </a>

                <div class="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account" aria-labelledby="accountNavbarDropdown"  style={{ width: "16rem" }}>
                  <div class="dropdown-item-text">
                    <div class="d-flex align-items-center">
                      <div class="avatar avatar-sm avatar-circle">
                        <img class="avatar-img" src="img6.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="mb-0">Khuram</h5>
                        <p class="card-text text-body">Kurram@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Settings</a>
                  <div class="dropdown-divider"></div>

                  <a class="dropdown-item" href="#">Sign out</a>
                </div>
              </div>
              
            </li>
          </ul>
         
        </div>
      </div>
    </div>
          </header>
          
            <main id="content" role="main" class="main">
            <Header title={'Production Planner Dashboard'} />
              <div class="content container" style={{ marginTop: "-20rem" }}>
                  <VerticalNavbar /> 
           
            
            
            
              <SideDetachedBar/> 
             
              </div>
          </main>
          <RightSideBarNav/>
         
    </div>
  )
}

export default PlannerDashboard