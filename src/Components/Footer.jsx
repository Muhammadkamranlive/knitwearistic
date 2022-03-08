import React from 'react'

function Footer() {
  return (
      <div>
           <footer class="footer-section ">
{/* <!--footer top start-->
<!--for light footer add .footer-light class and for dark footer add .bg-dark .text-white class--> */}
<div class="footer-top  bg-gradient text-white ptb-120" >
<div class="container">
    <div class="row justify-content-between pr-100 pl-100">
        <div class="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
            <div class="footer-single-col">
                <div class="footer-single-col mb-4">
                    <img src="logotop.png" alt="logo" class="img-fluid logo-white" />
                  
                </div>
                <p>Monitor Production in Every Garment Section and generate operation Bulliten,Capacity Holding,and make Bill of Material Easy.</p>

                <form class="newsletter-form position-relative d-block d-lg-flex d-md-flex">
                    <input type="text" class="input-newsletter form-control me-2" placeholder="Enter your email" name="email" required="" autocomplete="off" />
                    <input type="submit" value="Subscribe" data-wait="Please wait..." class="btn btn-primary mt-3 mt-lg-0 mt-md-0" />
                </form>
              
            </div>
        </div>
        <div class="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
            <img src="header3.png" alt="" className="img-fluid rounded shadow" />
        </div>

    </div>
</div>
</div>
{/* <!--footer top end-->

<!--footer bottom start--> */}
<div class="footer-bottom  bg-gradient text-white py-4">
<div class="container">
    <div class="row justify-content-between align-items-center">
        <div class="col-md-7 col-lg-7">
            <div class="copyright-text">
                <p class="mb-lg-0 mb-md-0">© 2022 Knitwearistic Rights Reserved. Designed By <a href="/" class="text-decoration-none">Knitwearistic</a></p>
            </div>
        </div>
        <div class="col-md-4 col-lg-4">
            <div class="footer-single-col text-start text-lg-end text-md-end">
                <ul class="list-unstyled list-inline footer-social-list mb-0">
                    <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fab fa-dribbble"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
{/* <!--footer bottom end--> */}
</footer>
    </div>
  )
}

export default Footer