import React, { useState } from 'react'

function AdminVerticalNabar()
{
  const [mode, setmode] = useState('light');
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
                      <span class="nav-link-title">Manager Dashbaord</span>
                    </a>
                  </div>
                 

                  <div class="nav-item">
                    <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white ":"nav-link "} href="#" data-placement="left" data-bs-toggle="modal" data-bs-target="#exampleModal14">
                       <i class="fa-solid fa-hands-holding py-1 px-4"></i>
                      <span class="nav-link-title">Capacity Holding <span class="badge bg-primary rounded-pill ms-1">pro</span></span>
                    </a>
                  </div>

                
                </div>

              </div>

              <div class="navbar-vertical-footer">
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
    
  
  )
}

export default AdminVerticalNabar