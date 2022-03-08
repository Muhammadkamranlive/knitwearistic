import React from 'react'
import AdminSideDetached from './AdminSideDetached'
import AdminVerticalNabar from './AdminVerticalNavbar'
import { Brands } from './Brands'
import Header from './Header'
import { LineBar } from './LineBar'
import RightSideBarNav from './RightSideBarNav'
import SideDetachedBar from './SideDetachedBar'
import VerticalNavbar from './VerticalNavbar'
import ViewAllOrder from './ViewAllOrder'

function Owner()
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
                  <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModalSetting">Settings</a>
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
            <div class="bg-dark">
      
      <div class="content container py-5" style={{ height: "25rem"}} >
         
          <div class="page-header page-header-light page-header-reset py-3">
            <div class="row align-items-center">
              <div class="col">
                <h1 class="page-header-title">Knitwearistic Admin Dashboard</h1>
              </div>
              <div class="col-auto">
             
              <div class="modal fade" id="exampleModal14" tabindex="-1" aria-labelledby="exampleModalLabel14" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Payment</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                     <ViewAllOrder/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">OK</button>
                    </div>
                    </div>
                </div>
                </div>
              </div>
            
            </div>
          
          </div>
          
        </div>
      </div>
        <div class="content container" style={{ marginTop: "-20rem" }}>
      <div class="navbar-expand-lg">
    
    <button class="navbar-toggler text-white border-white-10 w-100 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu" aria-controls="navbarVerticalNavMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="d-flex justify-content-between align-items-center">
        <span class="navbar-toggler-text text-white">Menu</span>
        <span class="navbar-toggler-default">
          <i class="fa fa-bars"></i>
        </span>
        <span class="navbar-toggler-toggled">
          <i class="fa fa-bars"></i>
        </span>
      </span>
    </button>
  

    <aside id="navbarVerticalNavMenu" class="js-navbar-vertical-aside navbar navbar-vertical navbar-vertical-absolute navbar-vertical-detached navbar-shadow navbar-collapse collapse bg-white rounded-2">
      <div class="navbar-vertical-container">
        <div class="navbar-vertical-footer-offset">
       
          <div class="navbar-vertical-content">
            <div id="navbarVerticalMenu" class="nav nav-pills nav-vertical card-navbar-nav">
         
              <div class="nav-item ">
                <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white":"nav-link"} href="#navbarVerticalMenuDashboards" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuDashboards" aria-expanded="true" aria-controls="navbarVerticalMenuDashboards">
                <i class="fas fa-th py-1 px-4"></i>
                  <span class="nav-link-title">Admin Dashbaord</span>
                </a>
                <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white":"nav-link"}  data-bs-toggle="modal" data-bs-target="#exampleModal14">
                <i class="fas fa-th py-1 px-4"></i>
                  <span class="nav-link-title">Payments</span>
                </a>
                        
               
             
              </div>
              
            
            
            </div>

          </div>

          <div class="navbar-vertical-footer py-lg-5">
            <ul class="navbar-vertical-footer-list">
            

              <li class="navbar-vertical-footer-list-item">
             
                <div class="dropdown dropup">
                  <button type="button" class="btn btn-ghost-secondary btn-icon rounded-circle" id="otherLinksDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                    <i class="fa fa-info text-primary py-1 px-1"></i>
                  </button>

                  <div class="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="otherLinksDropdown">
                    <span class="dropdown-header">Personlization</span>
                  <button class="dropdown-item" onClick={changedark}>
                  <i class="fa-solid fa-circle-half-stroke dropdown-item-icon"></i>
                    <span class="text-truncate" title="Dark Mode">Change to Dark Mode</span>
                  </button>
                  <button class="dropdown-item" onClick={changelight}>
                  <i class="fa-solid fa-circle-half-stroke dropdown-item-icon"></i>
                    <span class="text-truncate" title="Dark Mode">Change to light Mode</span>
                    </button>
                   
                    <div class="dropdown-divider"></div>
                   
                  </div>
                </div>
               
              </li>

              <li class="navbar-vertical-footer-list-item">
             
                <div class="dropdown dropup">
                  <button type="button" class="btn btn-ghost-secondary btn-icon rounded-circle" id="selectLanguageDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                    <img class="avatar avatar-xss avatar-circle" src="us.svg" alt="United States Flag" />
                  </button>

                  <div class="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="selectLanguageDropdown">
                    <span class="dropdown-header">Select language</span>
                    <a class="dropdown-item" href="#">
                      <img class="avatar avatar-xss avatar-circle me-2" src="us.svg" alt="Flag" />
                      <span class="text-truncate" title="English">English (US)</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <img class="avatar avatar-xss avatar-circle me-2" src="gb.svg" alt="Flag" />
                      <span class="text-truncate" title="English">English (UK)</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <img class="avatar avatar-xss avatar-circle me-2" src="de.svg" alt="Flag" />
                      <span class="text-truncate" title="Deutsch">Deutsch</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <img class="avatar avatar-xss avatar-circle me-2" src="dk.svg" alt="Flag" />
                      <span class="text-truncate" title="Dansk">Dansk</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <img class="avatar avatar-xss avatar-circle me-2" src="it.svg" alt="Flag" />
                      <span class="text-truncate" title="Italiano">Italiano</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <img class="avatar avatar-xss avatar-circle me-2" src="cn.svg" alt="Flag" />
                      <span class="text-truncate" title="中文 (繁體)">中文 (繁體)</span>
                    </a>
                  </div>
                </div>

            
              </li>
            </ul>
          </div>
         
        </div>
      </div>
    </aside>
  </div>
                  <AdminSideDetached/>
              </div>
          </main>
          <RightSideBarNav/>
         
    </div>
  )
}

export default Owner