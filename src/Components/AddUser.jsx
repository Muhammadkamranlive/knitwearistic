import React from 'react'

function AddUser() {
  return (
     <div>
      <div class="modal fade" id="exampleModal12" tabindex="-1" aria-labelledby="exampleModalLabel12" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel12">Register Admin/Manager</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form >
                                      
                                          <div class="form-group ">
                                            <label for="inputWorkOrderID">Email</label>
                                            <input type="email" class="form-control" id="inputWorkOrderID"  name="WorkNo" placeholder="Email"  required/>
                                      
                                          
                                           </div>
                                           
                                      
                                          <div class="form-group ">
                                            <label for="inputCustomerName">Manager Name</label>
                                            <input type="text" class="form-control" id="inputCustomerName" name="Customer"  placeholder="" required/>
                                          </div>
                                            <div class="form-group ">
                                                <label for="inputTargetPerDay">Password</label>
                                                <input type="password" class="form-control" id="inputTargetPerDay"  name="OrderQuantity"     required/>
                                            </div>
                                            

                                       

                                         

                                      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</div>         
    </div>
  )
}

export default AddUser