import React from 'react'

function RightSideBarNav() {
  return (
      <div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasActivityStream" aria-labelledby="offcanvasActivityStreamLabel">
    <div class="offcanvas-header">
      <h4 id="offcanvasActivityStreamLabel" class="mb-0">System Alerts</h4>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      
      <ul class="step step-icon-sm step-avatar-sm">
        
        <li class="step-item">
          <div class="step-content-wrapper">
            <div class="step-avatar">
              <img class="step-avatar" src="img9.jpg" alt="Image Description"/>
            </div>

            <div class="step-content">
              <h5 class="mb-1">Zara</h5>

              <p class="fs-5 mb-1">Last Threshold 30% is reached at 12/2/2022 <a class="text-uppercase" href="#"><i class="bi-journal-bookmark-fill"></i>Priorty High</a></p>

              <ul class="list-group list-group-sm">
                
                <li class="list-group-item list-group-item-light">
                  <div class="row gx-1">
                    
                    

                    <div class="col-6">
                     
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs" src="word-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-2">
                          <span class="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                          <span class="d-block small text-muted">4kb</span>
                        </div>
                      </div>
                     
                    </div>
                   
                  </div>
                 
                </li>
                
              </ul>

              <span class="small text-muted text-uppercase">Now</span>
            </div>
          </div>
            </li>
            <li class="step-item">
          <div class="step-content-wrapper">
            <div class="step-avatar">
              <img class="step-avatar" src="img9.jpg" alt="Image Description"/>
            </div>

            <div class="step-content">
              <h5 class="mb-1">Zara</h5>

              <p class="fs-5 mb-1">Last Threshold 30% is reached at 12/2/2022 <a class="text-uppercase" href="#"><i class="bi-journal-bookmark-fill"></i>Priorty High</a></p>

              <ul class="list-group list-group-sm">
                
                <li class="list-group-item list-group-item-light">
                  <div class="row gx-1">
                    
                    

                    <div class="col-6">
                     
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <img class="avatar avatar-xs" src="word-icon.svg" alt="Image Description" />
                        </div>
                        <div class="flex-grow-1 text-truncate ms-2">
                          <span class="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                          <span class="d-block small text-muted">4kb</span>
                        </div>
                      </div>
                     
                    </div>
                   
                  </div>
                 
                </li>
                
              </ul>

              <span class="small text-muted text-uppercase">Now</span>
            </div>
          </div>
        </li>
       
       
       
      </ul>
     

      
    </div>
  </div>
    </div>
  )
}

export default RightSideBarNav