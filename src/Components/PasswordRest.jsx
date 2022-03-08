import React from 'react'
import { Link } from 'react-router-dom'

function PasswordRest() {
  return (
      <>
    <main id="content" role="main" class="main py-5 my-5">
    <div class="position-fixed top-0 end-0 start-0 bg-img-start bg-gradient" style={{ height: "32rem" }}>
     <div class="shape shape-bottom zi-1">
       <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
         <polygon fill="#fff" points="0,198 1921,273 1921,0 " />
       </svg>
     </div>
   
   </div>

    
    <div class="container py-5 py-sm-7">
     
        <div class="mx-auto" style={{ maxWidth: "30rem" }}>
        <div class="card card-lg mb-5">
          <div class="card-body">
  
            <form class="js-validate needs-validation" novalidate>
              <div class="text-center">
                <div class="mb-5">
                  <h1 class="display-5 text-dark">Forgot password?</h1>
                  <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
                </div>
              </div>

             
              <div class="mb-4">
                <label class="form-label" for="resetPasswordSrEmail" tabindex="0">Your email</label>

                <input type="email" class="form-control form-control-lg" name="email" id="resetPasswordSrEmail" tabindex="1" placeholder="Enter your email address" aria-label="Enter your email address" required />
                <span class="invalid-feedback">Please enter a valid email address.</span>
              </div>
            

              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary btn-lg">Submit</button>

                <div class="text-center">
                  <Link  class="btn btn-link" to="/login">
                    <i class="fa fa-arrow-left"></i> Back to Sign in
                  </Link>
                </div>
              </div>
            </form>
          
          </div>
        </div>
      
        
       
      </div>
    </div>
    
  </main>
      </>

  )
}

export default PasswordRest