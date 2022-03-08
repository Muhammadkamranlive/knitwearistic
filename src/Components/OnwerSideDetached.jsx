import React from 'react'
import { Brands } from './Brands';
import { LineBar } from './LineBar';
function OnwerSideDetached() {
  return (
       
    <div class="sidebar-detached-content mt-3 mt-lg-0">
    <div class="row">
      <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
        
        <a class="card card-hover-shadow h-100" href="#">
          <div class="card-body">
            <h6 class="card-subtitle text-dark">Total Order Shipped</h6>

            <div class="row align-items-center gx-2 mb-1">
              <div class="col-6">
                <h2 class="card-title text-inherit">1293</h2>
              </div>
             

              <div class="col-6">
                
                            Pieces         
               
              </div>
              
            </div>
            

            <span class="badge bg-soft-success text-success">
            <i class="fa fa-area-chart" aria-hidden="true">POID B534M2</i>
            </span>
            
          </div>
        </a>
        
      </div>

      <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
      
        <a class="card card-hover-shadow h-100" href="#">
          <div class="card-body">
            <h6 class="card-subtitle text-dark">Load in Cutting</h6>

            <div class="row align-items-center gx-2 mb-2">
              <div class="col-6">
                <h2 class="card-title text-inherit">4500 </h2>
              </div>
             

              <div class="col-6">
             
                        Pieces
             
              </div>
              
            </div>
            

            <span class="badge bg-soft-success text-success">
            <i class="fa fa-ils">POID B534M2</i>
            </span>
            
          </div>
        </a>
       
      </div>

      <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
        
        <a class="card card-hover-shadow h-100" href="#">
          <div class="card-body">
            <h6 class="card-subtitle text-dark">Load in Stiching</h6>

            <div class="row align-items-center gx-2 mb-1">
              <div class="col-6">
                <h2 class="card-title text-inherit">44444</h2>
              </div>
              <div class="col-6">
               
                             Pieces   
                  
                
                
              </div>
             
            </div>
           

            <span class="badge bg-soft-danger text-danger">
            <i class="fa fa-microchip" aria-hidden="true">POID B534M2</i>
            </span>
           
          </div>
        </a>
       
      </div>

      <div class="col-sm-6 col-xl-3 mb-3 mb-xl-5">
        
        <a class="card card-hover-shadow h-100" href="#">
          <div class="card-body">
            <h6 class="card-subtitle text-dark">Load in Finishg</h6>

            <div class="row align-items-center gx-2 mb-1">
              <div class="col-6">
                <h2 class="card-title text-inherit">244433 </h2>
              </div>
              

              <div class="col-6">
               
                    Pieces
              </div>
             
            </div>
          

          <span class="badge bg-soft-secondary text-success">
          <i class="fa fa-bar-chart" aria-hidden="true">POID B534M2</i>
          </span>
            
          </div>
        </a>
        
      </div>
    </div>
    

    <div className="row mb-4">
              <div className="col-sm-8">
                  <div className="card shadow py-4">
                      <div className="card-header">
                        <h2>Statistics of Brands</h2>
                      </div>
                  <LineBar/>
                  </div>
              </div> 
              <div className="col-sm-4">
                  
                  <div className="card py-5">
                  <div className="card-header">
                    <h2>Capacity Holding</h2>
                  </div>
                      <Brands/>
                  </div>
              </div>
          </div>
   
    <div class="card mb-3 mb-lg-5">
      <div class="card-header">
        <div class="row justify-content-between align-items-center flex-grow-1">
          <div class="col-md">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="card-header-title">All Orders</h4>
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
              <th>POID</th>                  
              <th>Order</th>
              <th>Date of Oder Delivery</th>
              <th>Capacity</th>
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
                    B534M2                   
                 </td>
              <td>
                <span class="legend-indicator bg-success"></span>4333
              </td>
              <td>23/12/2022</td>
              <td>30%</td>
              <td><a href="/admin" className="btn btn-primary">view</a></td>
              
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
                    B534M2                   
                 </td>
              <td>
                <span class="legend-indicator bg-success"></span>4333
              </td>
              <td>23/12/2022</td>
              <td>30%</td>
              <td><a href="/admin" className="btn btn-primary">view</a></td>
              
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
                    B534M2                   
                 </td>
              <td>
                <span class="legend-indicator bg-success"></span>4333
              </td>
              <td>23/12/2022</td>
              <td>30%</td>
              <td><a href="/admin" className="btn btn-primary">view</a></td>
              
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

export default OnwerSideDetached