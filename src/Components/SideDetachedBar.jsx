import React from 'react'
import { Link } from 'react-router-dom'
import {Brands} from './Brands';
import {LineBar} from './LineBar';

function SideDetachedBar()
{

  return (
      
    <div class="sidebar-detached-content mt-3 mt-lg-0">
     
      <div class="row">
      <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
        
        <a class="card card-hover-shadow h-100" href="#">
          <div class="card-body">
            <h6 class="card-subtitle text-dark">Totall Shipped Orders </h6>

            <div class="row align-items-center gx-2 mb-1">
              <div class="col-6">
                <h2 class="card-title text-inherit">72,540</h2>
              </div>
             

              <div class="col-6">
                
                                 
               
              </div>
              
            </div>
            

            <span class="badge bg-soft-success text-success">
            <i class="fa-solid fa-chart-column"></i> 96.5%
            </span>
            <span class="text-body fs-6 ms-1">from 70,104</span>
          </div>
        </a>
        
      </div>

      <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
      
        <a class="card card-hover-shadow h-100" href="#">
          <div class="card-body">
            <h6 class="card-subtitle text-dark">Average SAM</h6>

            <div class="row align-items-center gx-2 mb-1">
              <div class="col-6">
                <h2 class="card-title text-inherit">29.4</h2>
              </div>
             

              <div class="col-6">
             
                        
             
              </div>
              
            </div>
            

            <span class="badge bg-soft-success text-success">
            <i class="fa-solid fa-chart-pie"></i> POID 56B25  
            </span>
            
          </div>
        </a>
       
      </div>

      <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
        
        <a class="card card-hover-shadow h-100" href="#">
          <div class="card-body">
            <h6 class="card-subtitle text-dark">Totall BOM Generated</h6>

            <div class="row align-items-center gx-2 mb-1">
              <div class="col-6">
                <h2 class="card-title text-inherit">56</h2>
              </div>
              

              <div class="col-6">
               
                                
                  
                
                
              </div>
             
            </div>
           

            <span class="badge bg-soft-danger text-danger">
            <i class="fa-solid fa-calendar-days"></i> Today so far
            </span>
            <span class="text-body fs-6 ms-1">56</span>
          </div>
        </a>
       
      </div>

      <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
        
        <a class="card card-hover-shadow h-100" href="#">
          <div class="card-body">
            <h6 class="card-subtitle text-dark">Activity Sheet Status</h6>

            <div class="row align-items-center gx-2 mb-1">
              <div class="col-6">
                <h2 class="card-title text-inherit">2 </h2>
              </div>
              

              <div class="col-6">
               
              days ago       
              </div>
             
            </div>
          

            <span class="badge bg-soft-secondary text-body">Last Updated At</span>
            <span class="text-body fs-6 ms-1">18/2/2022</span>
          </div>
        </a>
        
      </div>
     
  </div>
    
    

    <div class="row">
      <div class="col-xl-5 mb-3 mb-xl-5">
        
        <div class="card h-100">
          
          <div class="card-header card-header-content-between">
            <h4 class="card-header-title">Bill of Materials (BOM)</h4>

           
            <div class="dropdown">
              <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="reportsOverviewDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>

              <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="reportsOverviewDropdown2">
              

                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <i class="fa-solid fa-plus"></i> Add BOM
                </a>
                <a class="dropdown-item" href="#">
                <i class="fa-solid fa-cloud-arrow-down"></i> Download Report
                </a>
               

                <div class="dropdown-divider"></div>

                

                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <i class="fa-solid fa-eye"></i> View All
                </a>
              </div>
            </div>
            
          </div>
         
          <div class="card-body">
            <p>You can easily Make Bill of Material with our software. As Every garment industry make BOM with their own style it will allow you to make your BOM as by your choice.</p>

            <ul class="list-group list-group-flush list-group-no-gutters">
              <li class="list-group-item">
                <h5 class="card-title">Last Generated BOMS:</h5>
              </li>

              
              <li class="list-group-item">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <img class="avatar avatar-xs avatar-4x3" src="capsule-icon.svg" alt="Image Description" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h5 class="mb-0">Zara</h5>
                        <span class="d-block fs-6 text-body">Hoodi</span>
                      </div>
                      

                      <div class="col-auto">
                        <a class="btn btn-primary btn-sm" href="#" title="Launch importer" target="_blank">
                           View
                          <i class="fa fa-eye ms-1"></i>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <img class="avatar avatar-xs avatar-4x3" src="capsule-icon.svg" alt="Image Description" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h5 class="mb-0">Zara</h5>
                        <span class="d-block fs-6 text-body">Hoodi</span>
                      </div>
                      

                      <div class="col-auto">
                        <a class="btn btn-primary btn-sm" href="#" title="Launch importer" target="_blank">
                           View
                          <i class="fa fa-eye ms-1"></i>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <img class="avatar avatar-xs avatar-4x3" src="capsule-icon.svg" alt="Image Description" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h5 class="mb-0">Zara</h5>
                        <span class="d-block fs-6 text-body">Hoodi</span>
                      </div>
                      

                      <div class="col-auto">
                        <a class="btn btn-primary btn-sm" href="#" title="Launch importer" target="_blank">
                           View
                          <i class="fa fa-eye ms-1"></i>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              </li>
             
            

              
            </ul>
          </div>
         
        </div>
        
      </div>
      

      <div class="col-xl-7 mb-3 mb-xl-5">
        
      <div class="card h-100">
          
          <div class="card-header card-header-content-between">
            <h4 class="card-header-title">Operation Bulliten</h4>

           
            <div class="dropdown">
              <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="reportsOverviewDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>

              <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="reportsOverviewDropdown2">
              

                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-plus"></i> Add Oder
                </a>
               
               

                <div class="dropdown-divider"></div>

                

                <a class="dropdown-item" href="#">
                  <i class="fa-solid fa-eye"></i> View All
                </a>
              </div>
            </div>
            
          </div>
         
          <div class="card-body">
            <p>The inputs will be product type, sewing operations, SAM of operations and machine type. The output will be a list of operations in sequence with total SAM of product, number of machines required, type of machines required etc.</p>

            <ul class="list-group list-group-flush list-group-no-gutters">
              <li class="list-group-item">
                <h5 class="card-title">Last Generated SAM Sheets:</h5>
              </li>

              
              <li class="list-group-item">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <img class="avatar avatar-xs avatar-4x3" src="capsule-icon.svg" alt="Image Description" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h5 class="mb-0">Zara</h5>
                        <span class="d-block fs-6 text-body">Hoodi</span>
                      </div>
                      

                      <div class="col-auto">
                        <a class="btn btn-primary btn-sm" href="#" title="Launch importer" target="_blank">
                           View
                          <i class="fa fa-eye ms-1"></i>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <img class="avatar avatar-xs avatar-4x3" src="capsule-icon.svg" alt="Image Description" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h5 class="mb-0">Zara</h5>
                        <span class="d-block fs-6 text-body">Hoodi</span>
                      </div>
                      

                      <div class="col-auto">
                        <a class="btn btn-primary btn-sm" href="#" title="Launch importer" target="_blank">
                           View
                          <i class="fa fa-eye ms-1"></i>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <img class="avatar avatar-xs avatar-4x3" src="capsule-icon.svg" alt="Image Description" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h5 class="mb-0">Zara</h5>
                        <span class="d-block fs-6 text-body">Hoodi</span>
                      </div>
                      

                      <div class="col-auto">
                        <a class="btn btn-primary btn-sm" href="#" title="Launch importer" target="_blank">
                           View
                          <i class="fa fa-eye ms-1"></i>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              </li>
             
            

              
            </ul>
          </div>
         
        </div>
       
      </div>
      
    </div>
   
    <div class="card mb-3 mb-lg-5">
      
      <div class="card-header">
        <div class="row justify-content-between align-items-center flex-grow-1">
          <div class="col-md">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="card-header-title">SAM SHEETS FOR ORDERS</h4>
                <div id="datatableCounterInfo" style={{ display: "none" }}>
                
              </div>
              
            </div>
          </div>
         

          <div class="col-auto">
          <Link to='/' className="btn btn-primary">
              View All
             </Link>
           
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
              <th>Quantity</th>
              <th>Garment Type</th>
              <th>POID</th>
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
                <span class="legend-indicator bg-success"></span>454554
              </td>
              <td>Hoodi</td>
              <td>520B34</td>
              <td><Link to='/sam' className="btn btn-primary">View SAM Sheet</Link></td>
              
            </tr>
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
                <span class="legend-indicator bg-success"></span>454554
              </td>
              <td>Hoodi</td>
              <td>520B34</td>
              <td><Link to='/sam' className="btn btn-primary">View SAM Sheet</Link></td>
              
          </tr>
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
                <span class="legend-indicator bg-success"></span>454554
              </td>
              <td>Hoodi</td>
              <td>520B34</td>
              <td><Link to='/sam' className="btn btn-primary">View SAM Sheet</Link></td>
              
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
    
     <div class="row">
      <div class="col-xl-5 mb-3 mb-xl-5">
        
        <div class="card h-100">
          
          <div class="card-header card-header-content-between">
            <h4 class="card-header-title">Add User</h4>

           
            <div class="dropdown">
              <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="reportsOverviewDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>

              <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="reportsOverviewDropdown2">
              

                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal12">
                <i class="fa-solid fa-plus"></i> Add User 
                </a>
                
               

               
              </div>
            </div>
            
          </div>
         
          <div class="card-body">
            <p>You can register only one user for Activity Monitring .</p>

            <ul class="list-group list-group-flush list-group-no-gutters">
              
               <li class="list-group-item">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <img class="avatar rounded  avatar-4x3" src="img3.jpg" alt="Image Description" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h5 class="mb-0">Muhammad Khurram</h5>
                        <span class="d-block fs-6 text-body">Marketing Manager</span>
                      </div>
                      <div class="col-auto">
                        <a class="btn btn-primary btn-sm" href="/reset" title="view" target="_blank">
                           Rest Password
                          <i class="fa fa-lock ms-1"></i>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
            </li>   
            </ul>
          </div>
         
        </div>
        
      </div>
      

      <div class="col-xl-7 mb-3 mb-xl-5">
        
      <div class="card h-100">
          
          <div class="card-header card-header-content-between">
            <h4 class="card-header-title">Actvity Booking</h4>

           
            <div class="dropdown">
              <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="reportsOverviewDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>

              <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="reportsOverviewDropdown2">
              

                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <i class="fa-solid fa-plus"></i> Add load
                </a>
               
               

                <div class="dropdown-divider"></div>

                

                <a class="dropdown-item" href="#">
                  <i class="fa-solid fa-eye"></i> View All
                </a>
              </div>
            </div>
            
          </div>
         
          <div class="card-body">
            <p>This will you to add daily bases load in Every department.</p>

            <ul class="list-group list-group-flush list-group-no-gutters">
              <li class="list-group-item">
                <h5 class="card-title">Last added activity:</h5>
              </li>

              
              <li class="list-group-item">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <img class="avatar avatar-xs avatar-4x3" src="capsule-icon.svg" alt="Image Description" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h5 class="mb-0">POID</h5>
                        <span class="d-block fs-6 text-body">45B40</span>
                      </div>
                      

                      <div class="col-auto">
                        <a class="btn btn-primary btn-sm" href="#" title="Update" target="_blank">
                           Update
                          <i class="fa fa-edit ms-1"></i>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
            </li>
           
             
            

              
            </ul>
          </div>
         
        </div>
       
      </div>
      
    </div>

    
    
    
  </div>
 
  )
}

export default SideDetachedBar