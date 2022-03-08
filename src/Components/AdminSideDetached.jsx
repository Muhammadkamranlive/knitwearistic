import React from 'react'
import { Link } from 'react-router-dom'
import {Brands} from './Brands';
import {LineBar} from './LineBar';
import UserCard from './UserCard';

function AdminSideDetached()
{

  return (
      
    <div class="sidebar-detached-content mt-3 mt-lg-0">
        <div class="row">
          <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
            
            <a class="card card-hover-shadow h-100" href="#">
              <div class="card-body">
                <h6 class="card-subtitle text-dark">Premium Users</h6>

                <div class="row align-items-center gx-2 mb-1">
                  <div class="col-6">
                    <h2 class="card-title text-inherit">720</h2>
                  </div>
                 

                  <div class="col-6">
                    
                                     
                   
                  </div>
                  
                </div>
                

                <span class="badge bg-soft-success text-success">
                <i class="fa-solid fa-user" style={{fontSize:"25px"}}></i> 
                </span>
                
              </div>
            </a>
            
          </div>

          <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
          
            <a class="card card-hover-shadow h-100" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal14">
              <div class="card-body">
                <h6 class="card-subtitle text-dark">Payment</h6>

                <div class="row align-items-center gx-2 mb-1">
                  <div class="col-6">
                    <h2 class="card-title text-inherit">$4500</h2>
                  </div>
                 

                  <div class="col-6">
                 
                            
                 
                  </div>
                  
                </div>
                

                <span class="badge bg-soft-success text-success">
                <i class="fa-solid fa-dollar" style={{fontSize:"25px"}}></i>
                </span>
                
              </div>
            </a>
           
          </div>

          <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
            
            <a class="card card-hover-shadow h-100" href="#">
              <div class="card-body">
                <h6 class="card-subtitle text-dark">Complaints</h6>

                <div class="row align-items-center gx-2 mb-1">
                  <div class="col-6">
                    <h2 class="card-title text-inherit">9</h2>
                  </div>
                  <div class="col-6">
                   
                                    
                      
                    
                    
                  </div>
                 
                </div>
               

                <span class="badge bg-soft-danger text-danger">
                <i class="fa-solid fa-envelopes-bulk" style={{fontSize:"25px"}}></i> 
                </span>
               
              </div>
            </a>
           
          </div>

          <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
            
            <a class="card card-hover-shadow h-100" href="#">
              <div class="card-body">
                <h6 class="card-subtitle text-dark">Free Trial Users</h6>

                <div class="row align-items-center gx-2 mb-1">
                  <div class="col-6">
                    <h2 class="card-title text-inherit">2444 </h2>
                  </div>
                  

                  <div class="col-6">
                   
                        
                  </div>
                 
                </div>
              

              <span class="badge bg-soft-secondary text-success">
              <i class="fa-solid fa-user-group" style={{fontSize:"25px"}}></i>
              </span>
                
              </div>
            </a>
            
          </div>
        </div>
        

      <div class="row">
        <div className="col-xl-12">
          <h2 className='text-center text-white'>Companies and Thier Trials</h2>
        </div>
        <div className="col-xl-4">
           <UserCard title='Lahore Fashion' task='10'emp='3' premium='premium'/>
        </div>
        <div className="col-xl-4">
           <UserCard title='Kozi International' task='10'emp='3' premium='premium'/>
        </div>
        <div className="col-xl-4">
           <UserCard title='Hami Textile' task='10'emp='3' premium='premium'/>
        </div>
        </div>
       
        <div class="card mb-3 mb-lg-5">
          
          <div class="card-header">
            <div class="row justify-content-between align-items-center flex-grow-1">
              <div class="col-md">
                <div class="d-flex justify-content-between align-items-center">
                  <h4 class="card-header-title">All Users</h4>
                    <div id="datatableCounterInfo" style={{ display: "none" }}>
                    
                  </div>
                  
                </div>
              </div>
             

              <div class="col-auto">
             
               
              </div>
             
            </div>
       
          </div>
        
          <div class="table-responsive datatable-custom">
            <table id="datatable" class="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" >
              <thead class="thead-light">
                <tr>
                  <th scope="col" class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="datatableCheckAll" />
                      <label class="form-check-label" for="datatableCheckAll"></label>
                    </div>
                  </th>
                  <th class="table-column-ps-0">Customer/Brand Name</th>
                  <th>Trial days left</th>
                  <th>Upgrade</th>
                  <th>Defaulter</th>
                  <th>Action</th>
                 
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="usersDataCheck2" />
                      <label class="form-check-label" for="usersDataCheck2"></label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./user-profile.html">
                      <div class="flex-shrink-0">
                        <div class="avatar avatar-sm avatar-circle">
                          <img class="avatar-img" src="img10.jpg" alt="Image Description" />
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">ZARA <i class="fa-solid fa-circle-check text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Top Client"></i></h5>
                      </div>
                    </a>
                  </td>
                  <td>
                    <span class="legend-indicator bg-success"></span>4
                  </td>
                  <td>No</td>
                  <td>No</td>
                  <td><a href="" className="btn btn-primary">Delete</a></td>
                  
                </tr>
                <tr>
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="usersDataCheck2" />
                      <label class="form-check-label" for="usersDataCheck2"></label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="#">
                      <div class="flex-shrink-0">
                        <div class="avatar avatar-sm avatar-circle">
                          <img class="avatar-img" src="img10.jpg" alt="Image Description" />
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">ZARA <i class="fa-solid fa-circle-check text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Top Client"></i></h5>
                      </div>
                    </a>
                  </td>
                  <td>
                    <span class="legend-indicator bg-success"></span>14
                  </td>
                  <td>No</td>
                  <td>No</td>
                  <td><a href="" className="btn btn-primary">Delete</a></td>
                  
              </tr>
              <tr>
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="usersDataCheck2" />
                      <label class="form-check-label" for="usersDataCheck2"></label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="#">
                      <div class="flex-shrink-0">
                        <div class="avatar avatar-sm avatar-circle">
                          <img class="avatar-img" src="img10.jpg" alt="Image Description" />
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Khadi <i class="fa-solid fa-circle-check text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Top Client"></i></h5>
                      </div>
                    </a>
                  </td>
                  <td>
                    <span class="legend-indicator bg-success"></span>0
                  </td>
                  <td>No</td>
                  <td>Yes</td>
                  <td><a href="" className="btn btn-danger">Delete</a></td>
                  
              </tr>
              
               
              </tbody>
            </table>
          </div>
        
          <div class="card-footer">
            
            <div class="row justify-content-center justify-content-sm-between align-items-sm-center">
              <div class="col-sm mb-2 mb-sm-0">
                <div class="d-flex justify-content-center justify-content-sm-start align-items-center">
                  <span class="me-2">Showing:</span>

                 
                  <div class="tom-select-custom">
                    3
                  </div>
                 

                  <span class="text-secondary me-2"> of</span>

                  
                  <span id="datatableWithPaginationInfoTotalQty">20</span>
                </div>
              </div>
              

              <div class="col-sm-auto">
                <div class="d-flex justify-content-center justify-content-sm-end">
                  
                  <nav id="datatablePagination" aria-label="Activity pagination"></nav>
                </div>
              </div>
            
            </div>
          
          </div>
          
        </div>
        
       

   
        
        
      </div>
 
  )
}

export default AdminSideDetached