import React from 'react'

function UserCard({title,task,emp,premium}) {
  return (
    <div>
      <div class="card mb-3">
                    <div class="card-body">
                      <div class="d-flex mb-5">
                        <div class="me-2">
                          <h4 class="text-wrap">{ title}</h4>

                       
                          <div class="avatar-group avatar-group-sm">
                            <span class="avatar avatar-circle">
                              <img class="avatar-img" src="img6.jpg" alt="Image Description" />
                            </span>
                            <span class="avatar avatar-circle">
                              <img class="avatar-img" src="img7.jpg" alt="Image Description" />
                            </span>
                            <span class="avatar avatar-soft-dark avatar-circle">
                              <span class="avatar-initials">I</span>
                            </span>
                            <span class="fs-6 ms-2">{task} Upgrades </span>
                          </div>
                          
                        </div>

                        <div class="ms-auto">
                        
                          <div class="dropdown">
                            <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                            </button>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown1">
                           
                          
                              <div class="dropdown-divider"></div>

                              <a class="dropdown-item text-danger" href="#">
                                <i class="fa fa-trash dropdown-item-icon text-danger"></i>
                                Remove
                              </a>
                            </div>
                          </div>
                        
                        </div>
                      </div>

                      <div class="row mb-3">
                        <div class="col-4">
                          
                          <div class="text-center">
                              <span class="d-block h4 mb-1">{ emp}</span>
                            <span class="d-block fs-6">days left</span>
                          </div>
                          
                        </div>
                       

                        <div class="col-4">
                        
                          <div class="text-center">
                              <span class="d-block h4 mb-1">{ premium}</span>
                            <span class="d-block fs-6">User Type</span>
                          </div>
                        
                        </div>
                       

                        <div class="col-4">
                        
                          <div class="text-center">
                              <span class="d-block h4 mb-1">{ emp}</span>
                            <span class="d-block fs-6">Sub Users</span>
                          </div>
                         
                        </div>
                        
                      </div>
                      
                      <div class="progress bg-gradient">
                      <div class="progress-bar " role="progressbar" style={{ width: "0 %"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      
                    </div>
                  </div>      
    </div>
  )
}

export default UserCard