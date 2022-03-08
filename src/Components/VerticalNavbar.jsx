import React, { useState } from 'react'

function VerticalNavbar()
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
                      <span class="nav-link-title">Dashboards</span>
                    </a>

                 
                  </div>
               

                  <span class="dropdown-header mt-4">Operations</span>
                  <small class="bi-three-dots nav-subtitle-replacer"></small>

                 
                  <div class="navbar-nav nav-compact">

                  </div>
                  <div id="navbarVerticalMenuPagesMenu">
                   
                    <div class="nav-item">
                      <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white dropdown-toggle":"nav-link dropdown-toggle"} href="#navbarVerticalMenuPagesUsersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUsersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesUsersMenu">
                       <i class="fa-brands fa-ubuntu px-2"></i>
                        <span class="nav-link-title">Operation Bulliten</span>
                      </a>

                      <div id="navbarVerticalMenuPagesUsersMenu" class="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                        <button className={localStorage.getItem('mode')=='dark'?"nav-link text-white ":"nav-link "} data-bs-toggle="modal" data-bs-target="#exampleModal" ><i className="fa fa-plus py-1 px-1"></i> Add New Order <span class="badge bg-info rounded-pill ms-1">Hot</span></button>
                        <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white":"nav-link"} href="#" data-placement="left" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa fa-eye py-1 px-1"></i>View SAM Sheets</a>
                        <button className={localStorage.getItem('mode')=='dark'?"nav-link text-white ":"nav-link "} data-placement="left" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><i className="fa fa-download px-1 py-1"></i>Download <span className="badge bg-primary mx-2 ">new</span> </button>
                      </div>
                    </div>
                  
                    <div class="nav-item">
                      <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white dropdown-toggle":"nav-link dropdown-toggle"} href="#navbarVerticalMenuPagesUserProfileMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUserProfileMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesUserProfileMenu">
                      <i class="fa-brands fa-bitcoin px-2"></i>
                        <span class="nav-link-title">Bill of Material </span>
                      </a>

                      <div id="navbarVerticalMenuPagesUserProfileMenu" class="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                       <a className={localStorage.getItem('mode')=='dark'?"nav-link text-white ":"nav-link "} data-bs-toggle="modal" data-bs-target="#exampleModal1"  href='#'><i className="fa fa-plus py-1 px-1" ></i> Add BOM</a>
                       <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white":"nav-link"} href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><i className="fa fa-eye py-1 px-1"></i>View BOM</a>
                      </div>
                    </div>
               
                    <div class="nav-item">
                      <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white dropdown-toggle":"nav-link dropdown-toggle"} href="#navbarVerticalMenuPagesAccountMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesAccountMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesAccountMenu">
                        <i class="fa fa-user nav-icon"></i>
                        <span class="nav-link-title">User</span>
                      </a>

                      <div id="navbarVerticalMenuPagesAccountMenu" class="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                      <button className={localStorage.getItem('mode')=='dark'?"nav-link text-white ":"nav-link "} data-bs-toggle="modal" data-bs-target="#exampleModal12"><i className="fa fa-plus py-1 px-1"></i> Add User </button>
                      </div>
                    </div>
                   
                  </div>
            

                  <span class="dropdown-header mt-4">Activity Monitoring</span>
                  <small class="bi-three-dots nav-subtitle-replacer"></small>

                  <div class="nav-item">
                    <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white ":"nav-link "} href="#" data-placement="left" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                      <i class="fa fa-plus px-1 py-1 nav-icon"></i>
                      <span class="nav-link-title">Add New Activity</span>
                    </a>
                  </div>

                  <div class="nav-item">
                    <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white ":"nav-link "}  data-placement="left" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <i class="fa fa-eye px-1 py-1 nav-icon"></i>
                      <span class="nav-link-title">View All</span>
                    </a>
                  </div>

                  <div class="nav-item">
                    <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white ":"nav-link "} href="#" data-placement="left">
                      <i class="fa fa-edit nav-icon"></i>
                      <span class="nav-link-title">Edit</span>
                    </a>
                  </div>

                  

                 
                  

                  <span class="dropdown-header mt-4">Capacity Holding</span>
                  <small class="fa fa-hold nav-subtitle-replacer"></small>

                  <div class="nav-item">
                    <a class={localStorage.getItem('mode')=='dark'?"nav-link text-white ":"nav-link "} href="/admin" data-placement="left">
                       <i class="fa-solid fa-hands-holding py-1 px-1"></i>
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

export default VerticalNavbar