import React from 'react'

function Setting() {
  return (


    

<div class="modal fade" id="exampleModalSetting" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="text-center mb-5">
          
          <label class="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar" for="editAvatarUploaderModal">
            <img id="editAvatarImgModal" class="avatar-img" src="img6.jpg" alt="Image Description" />

            <input type="file" class="js-file-attach avatar-uploader-input" id="editAvatarUploaderModal" data-hs-file-attach-options='{
                        "textTarget": "#editAvatarImgModal",
                        "mode": "image",
                        "targetAttr": "src",
                        "allowTypes": [".png", ".jpeg", ".jpg"]
                     }' />

            <span class="avatar-uploader-trigger">
              <i class="fa fa-edit avatar-uploader-icon shadow-sm"></i>
            </span>
          </label>
        

          <h1 class="page-header-title">Khurram<i class="fa fa-check fs-2 text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Prodction Planner"></i></h1>

         
          <ul class="list-inline list-px-2">
            <li class="list-inline-item">
              <i class="fa fa-bars me-1"></i>
              <span>Lahore Fashion Ltd.</span>
            </li>

            <li class="list-inline-item">
              <i class="fa fa-map me-1"></i>
              <a href="#">Faislabad,</a>
              <a href="#">Manawala 203 RB</a>
            </li>

            <li class="list-inline-item">
              <i class="fa fa-calendar me-1"></i>
              <span>Joined March 2013</span>
            </li>
          </ul>
          
        </div>
      
        <div class="js-nav-scroller hs-nav-scroller-horizontal mb-5">
         <span class="hs-nav-scroller-arrow-prev" style={{ display: "none" }}>
            <a class="hs-nav-scroller-arrow-link" href="javascript:;">
              <i class="bi-chevron-left"></i>
            </a>
          </span>

        <span class="hs-nav-scroller-arrow-next" style={{ display: "none" }}>
            <a class="hs-nav-scroller-arrow-link" href="javascript:;">
              <i class="bi-chevron-right"></i>
            </a>
          </span>

          <ul class="nav nav-tabs align-items-center">
            <li class="nav-item">
              <a class="nav-link active disabled" href="#">Profile</a>
            </li>
          

            <li class="nav-item ms-auto">
              <div class="d-flex gap-2">
                <a class="btn btn-white btn-sm" href="#">
                  <i class="fa fa-edit me-1"></i> Edit profile
                </a>

                

                
                <div class="dropdown nav-scroller-dropdown">
                  <button type="button" class="btn btn-white btn-icon btn-sm" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                  </button>

                  <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="profileDropdown">
                    <span class="dropdown-header">Complaints and Suggestions</span>

                    <a class="dropdown-item" href="#">
                      <i class="fa fa-plus  dropdown-item-icon"></i> Write 
                    </a>
                   

              
                  </div>
                </div>
               
              </div>
            </li>
          </ul>
        </div>
        

        <div class="row">
          <div class="col-lg-12">
            
           
           

           
            <div class="card mb-3 mb-lg-5">
             
              <div class="card-header card-header-content-between">
                <h4 class="card-header-title">Profile</h4>
              </div>
             
              <div class="card-body">
                <ul class="list-unstyled list-py-2 text-dark mb-0">
                  <li class="pb-0"><span class="card-subtitle">About</span></li>
                  <li><i class="fa fa-user dropdown-item-icon"></i>Khurram</li>
                  <li><i class="fa fa-bars dropdown-item-icon"></i>Lahore Fashion Ltd.</li>

                  <li class="pt-4 pb-0"><span class="card-subtitle">Contacts</span></li>
                  <li><i class="fa fa-envelope dropdown-item-icon"></i> mark@site.com</li>
                  <li><i class="fa fa-phone dropdown-item-icon"></i> +923177682979</li>

                  <li class="pt-4 pb-0"><span class="card-subtitle">Premium User</span></li>
                  <li class="fs-6 text-body"><i class="fa fa-user dropdown-item-icon"></i> You are not a Premium</li>
                  <li class="fs-6 text-body"><i class="fa fa-dollar dropdown-item-icon"></i> Upgrade </li>
                </ul>
              </div>
             
            </div>
           
            <div class="card card-lg mb-3 mb-lg-5">
             
              <div class="card-body text-center">
                <div class="mb-4">
                  <img class="avatar avatar-xl avatar-4x3" src="oc-unlock.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img class="avatar avatar-xl avatar-4x3" src="oc-unlock.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </div>

                <div class="mb-3">
                  <h3>2-step verification</h3>
                  <p>Protect your account now and enable 2-step verification in the settings.</p>
                </div>

                <a class="btn btn-primary" href="#">Enable now</a>
              </div>
             
            </div>
         
          </div>
          

          
         
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 
 

  )
}

export default Setting