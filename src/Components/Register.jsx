import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register()
{
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => { 
    setPasswordShown(!passwordShown);
  };
  return (
    <main id="content" role="main" class="main">
    <div class="position-fixed top-0 end-0 start-0 bg-img-start bg-gradient" style={{ height: "32rem" }}>
     
      <div class="shape shape-bottom zi-1">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
          <polygon fill="#fff" points="0,198 1921,273 1921,0 " />
        </svg>
      </div>
    
    </div>

  
    <div class="container py-5 py-sm-7">
     

    <div class="mx-auto py-5" style={{ maxWidth: "30rem" }}>

        <div class="card card-lg mb-5">
          <div class="card-body">
              <div className="text-center display-6 text-dark">
                Sign Up
             </div>
            <form>
              <div class="text-center">
                <div class="mb-5">
                  <h1 class="display-5">Sign in</h1>
                  <p>Already have account? <Link to='/login' class="link" >Sign In here</Link></p>
                </div>

                

                <span class="divider-center text-muted mb-4">OR</span>
              </div>

              <div class="mb-4">
                <label class="form-label" for="signinSrEmail">Your Name</label>
                <input type="text" class="form-control form-control-lg" name="name" id="name" tabindex="1" placeholder="Kamran "  required />
                
                </div>
                <div class="mb-4">
                <label class="form-label" for="signinSrEmail">Company Name</label>
                <input type="text" class="form-control form-control-lg" name="name" id="name" tabindex="1" placeholder="Lahore Fashion"  required />
                
              </div>
              <div class="mb-4">
                <label class="form-label" for="signinSrEmail">Your email</label>
                <input type="email" class="form-control form-control-lg" name="email" id="signinSrEmail" tabindex="1" placeholder="email@address.com" aria-label="email@address.com" required />
                
              </div>
           
              <div class="mb-4">
                <label class="form-label w-100" for="signupSrPassword" tabindex="0">
                  <span class="d-flex justify-content-between align-items-center">
                    <span>Password</span>
                  
                  </span>
                </label>

                <div class="input-group input-group-merge" data-hs-validation-validate-class>
                  <input type={passwordShown ? "text" : "password"} class="js-toggle-password form-control form-control-lg" name="password" id="signupSrPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minlength="8"  />
                  <a id="changePassTarget" class="input-group-append input-group-text" >
                    <i id="changePassIcon" onClick={togglePassword} class="fa fa-eye"></i>
                  </a>
                </div>

                <span class="invalid-feedback">Please enter a valid password.</span>
              </div>
              
              <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" value="" id="termsCheckbox" />
                <label class="form-check-label" for="termsCheckbox">
                  Remember me
                </label>
              </div>
            

              <div class="d-grid">
                <a  href='/app.knitwear'  type="submit" class="btn btn-primary btn-lg">Sign Up</a>
              </div>
            </form>
            
          </div>
        </div>
       
       
     
      </div>
    </div>

  </main>
  )
}

export default Register