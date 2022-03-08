import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Login()
{
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => { 
    setPasswordShown(!passwordShown);
  };
  const changelocation = (e) =>
  {
    e.preventDefault();
    window.location.replace('/app.knitwear')
  }
  return (
    <main id="content" role="main" class="main py-5" >
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
          <div className="display-6 text-dark text-center">
              Login Page
            </div>
            <form onSubmit={changelocation} >
              <div class="text-center">
                <div class="mb-5">
                  <h1 class="display-5">Sign in</h1>
                  <p>Don't have an account yet? <Link  class="link" to="/register">Sign up here</Link></p>
                </div>

                

                <span class="divider-center text-muted mb-4">OR</span>
              </div>

        
              <div class="mb-4">
                <label class="form-label" for="signinSrEmail">Your email</label>
                <input type="email" class="form-control form-control-lg" name="email" id="signinSrEmail" tabindex="1" placeholder="email@address.com" aria-label="email@address.com" required />
                <span class="invalid-feedback">Please enter a valid email address.</span>
              </div>
           
              <div class="mb-4">
                <label class="form-label w-100" for="signupSrPassword" tabindex="0">
                  <span class="d-flex justify-content-between align-items-center">
                    <span>Password</span>
                    <Link class="form-label-link mb-0" to="/reset">Forgot Password?</Link>
                  </span>
                </label>

                <div class="input-group input-group-merge" data-hs-validation-validate-class>
                  <input type={passwordShown ? "text" : "password"} class="js-toggle-password form-control form-control-lg" name="password"  placeholder="8+ characters required" aria-label="8+ characters required" required minLength='8' />
                  <a id="changePassTarget" class="input-group-append input-group-text" href="javascript:;">
                    <i id="changePassIcon" onClick={togglePassword}  class="fa fa-eye"></i>
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
                <button   type="submit" class="btn btn-primary btn-lg">Sign in</button>
              </div>
            </form>
            
          </div>
        </div>
       
       
     
      </div>
    </div>

  </main>
  )
}

export default Login