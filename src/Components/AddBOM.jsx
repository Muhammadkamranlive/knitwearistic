import React from 'react'

function AddBOM() {
  return (
      <div>
                            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel1">Add Bill of Material</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <form >
                                        <div class="form-row">
                                          <div class="form-group ">
                                            <label for="inputWorkOrderID">Work Order No</label>
                                            <input type="number" class="form-control" id="inputWorkOrderID"  name="WorkNo"  required/>
                                  </div>
                                  </div>
                                          <div class="form-group ">
                                            <label for="inputGarmentStyle">Select Garment style</label>

                                            <select name="" class="form-control" id="inputGarmentStyle"    placeholder="Garment Style" required>
                                              <option value="">Select Garment Style</option>
                                              <option value="Pull Over Hood">Pull Over Hood</option>
                                             <option value="Sweat Shirt">T Shirt</option>
                                             <option value="Pull Over Hood"> Hood</option>
                                              <option value="Sweat Shirt">Shirt</option>
                                            </select>
                                  </div>
                                  <div class="form-row">
                                          <div class="form-group ">
                                            <label for="inputWorkOrderID">UOM</label>
                                            <input type="number" class="form-control" id="inputWorkOrderID"  name="WorkNo"   required/>
                                          </div>
                                          
                              </div>
                              <div class="form-row">
                                          <div class="form-group ">
                                            <label for="inputWorkOrderID">Exchange Rate</label>
                                            <input type="number" class="form-control" id="inputWorkOrderID"  name="WorkNo"   required/>
                                          </div>
                                          
                              </div>
                                 <div class="form-row">
                                          <div class="form-group ">
                                            <label for="inputWorkOrderID">Finish UOM</label>
                                            <input type="text" class="form-control" id="inputWorkOrderID"  name="WorkNo"   required/>
                                          </div>
                                          
                                  </div>
                                  <div class="form-row">
                                          <div class="form-group ">
                                            <label for="inputWorkOrderID">Finish Item Code</label>
                                            <input type="text" class="form-control" id="inputWorkOrderID"  name="WorkNo"  required/>
                                          </div>
                                          
                                        </div>
                                        
                                        <div class="form-row">
                                          <div class="form-group ">
                                            <label for="inputCustomerName">Customer Name</label>
                                            <input type="text" class="form-control" id="inputCustomerName" name="Customer"  placeholder="Jhon Whick"/>
                                          </div>
                                            <div class="form-group ">
                                                <label for="inputTargetPerDay">Order Quantity</label>
                                                <input type="number" class="form-control" id="inputTargetPerDay"  name="OrderQuantity"    placeholder="e.g 918" required/>
                                              </div>

                                        </div>

                                         

                                      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>  
    </div>
  )
}

export default AddBOM