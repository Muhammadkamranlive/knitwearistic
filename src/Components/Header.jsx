import React from 'react'
import AddBOM from './AddBOM'
import AddSAMOder from './AddSAMOder'
import AddUser from './AddUser'
import ViewAllOrder from './ViewAllOrder'

function Header({title,b,f})
{
  
  return (
   
    <>
      <div class="bg-dark">
      
      <div class="content container py-5" style={{ height: "25rem"}} >
         
          <div class="page-header page-header-light page-header-reset py-3">
            <div class="row align-items-center">
              <div class="col">
                <h1 class="page-header-title">{ title}</h1>
              </div>
              <div class="col-auto">
                <button class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i class="fa fa-plus me-1"></i> Add Order
                </button>
              </div>
            
            </div>
          
          </div>
          
        </div>
      </div>
      <AddSAMOder />
      <AddBOM />
      <AddUser />
   
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">View All </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <ViewAllOrder/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Load More</button>
      </div>
    </div>
  </div>
</div>

     </>
    
    
  )
}

export default Header