import React from 'react'
import '../backup.css';
import '../fonts.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
function LandingPage() {
   
  return (
      <>
             
            <div class="main-wrapper">
            <section class="hero-section ptb-120 text-white bg-dark" >
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-10">
                              <div class="hero-content-wrap mt-5 mx-5 my-5">
                              
                                <h1 class="fw-bold display-5">Knitwearistic Maximize your Garments Production Efficiency</h1>
                                <Reveal effect="fadeInUp">
                                  <p class="lead">Monitor Production in Every Garment Section and generate operation Bulliten, Capacity Holding, and, make Bill of Material Easy</p>
                                </Reveal>
                                      <div class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                                    <Link to="/login" class="btn btn-primary px-lg-5 btn-lg  me-3">Get Started</Link>
                                   
                                </div>
                                <div class="row justify-content-lg-start mt-6">
                                    <h6 class="text-white-70 mb-2">Our Top Clients:</h6>
                                    <div class="col-4 col-sm-3 my-2 ps-lg-0">
                                        <img src="lhr.png" alt="client" class="img-fluid"/>
                                    </div>
                                    <div class="col-4 col-sm-3 my-2">
                                        <img src="hami.png" alt="client" class="img-fluid"/>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 mt-5">
                            <div class="hero-img position-relative circle-shape-images">
                            
                              
                            
                                <img src="head.png" alt="hero img" class="img-fluid position-relative z-5"/>
                            </div>
                        </div>
                    </div>
                </div>
                        </section> 

        {/* service */}
        <section class="promo-section ptb-120 ">
            <div class="container pr-100 pl-100">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6">
                        <div class="section-heading text-center" data-aos="fade-up">
                            <h2 className='display-3'>Knitwearistic Features</h2>
                            <p className='text-dark'>Knitwearistic have the following features to help in the garments complex calculation ,activity monitoring,Bill of material making,Operation Builleten. </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4 mt-4 mt-lg-0 mt-md-0 ">
                        <div class="bg-dark p-5 text-center d-flex flex-column h-100 rounded-custom" data-aos="fade-up" data-aos-delay="100">
                            <div class="promo-card-info mb-4">
                                <h3 class="text-white display-6 fw-bold mb-4"><i class="fa fa-fingerprint text-warning me-2"></i>Activity Monitoring
                                </h3>
                                <p className='text-white'>Allow to monitor the load in every section of garments like cutting,stiching,pritning,washing etc. </p>
                            </div>
                            <div class="mt-auto">
                                <img src="client-logo-4.svg" width="120" alt="clients" class="img-fluid me-auto customer-logo" />
                            </div>
                        </div>
                    </div>
                          <div class="col-md-6 col-lg-4 mt-4 mt-lg-0 mt-md-0">
                          
                        <div class="bg-dark p-5 text-center d-flex flex-column h-100 rounded-custom" data-aos="fade-up" data-aos-delay="150">
                                  <div class="promo-card-info mb-4">
                                      
                                <h3 class="display-6 text-white fw-bold mb-4"><i class="fa-solid fa-circle-pause text-warning me-2"></i>Capacity Holding
                                </h3>
                                <p className='text-white'>Monitor the Production rate, hold and satisfy your customer needs. </p>
                            </div>
                            <div class="mt-auto">
                                <img src="client-logo-2.svg" width="120" alt="clients" class="img-fluid me-auto customer-logo" />
                            </div>
                                  </div>
                                  
                    </div>
                    <div class="col-md-6 col-lg-4 mt-4 mt-lg-0">
                        <div class="bg-dark p-5 text-center d-flex flex-column h-100 rounded-custom" data-aos="fade-up" data-aos-delay="200">
                            <div class="promo-card-info mb-4">
                                <h3 class="display-6 text-white fw-bold mb-4"><i class="fa-solid fa-microchip text-warning me-2"></i>
                                Operation Bulletin</h3>
                                <p className='text-white'>This Software is developed by keeping the needs of industry in mind. It will calculate the SAM operations with zero failure rate. </p>
                            </div>
                            <div class=" mt-5 ">
                                <img src="client-logo-3.svg" width="120" alt="clients" class="img-fluid me-auto customer-logo"/>
                            </div>
                        </div>
                          </div>
                          <div class="col-md-6 col-lg-4 mt-4 mt-lg-5">
                            
                          </div>
                          <div class="col-md-6 col-lg-4 mt-4 mt-lg-5">
                        <div class="bg-dark p-5 text-center d-flex flex-column h-100 rounded-custom" data-aos="fade-up" data-aos-delay="200">
                            <div class="promo-card-info mb-4">
                                <h3 class="display-6 text-white fw-bold mb-4"><i class="fa-solid fa-file-invoice-dollar text-warning me-2"></i>
                                Bil of Material</h3>
                                <p className='text-white'>You can easily Make Bill of Material with our software. As Every garment industry make BOM with their own style it will allow you to make your BOM as by you choice.</p>
                            </div>
                            <div class=" mt-5 ">
                                <img src="client-logo-3.svg" width="120" alt="clients" class="img-fluid me-auto customer-logo"/>
                            </div>
                        </div>
                          </div>
                          <div class="col-md-6 col-lg-4 mt-4 mt-lg-5">
                        
                    </div>

                </div>
            </div>
        </section>

        {/* about */}
        
<section class="why-choose-us ptb-120" id='Bill of Material (BOM)'>
<div class="container px-4">
<div class="row justify-content-lg-between align-items-center">
    <div class="col-lg-5 col-12">
        <div class="why-choose-content">
            <div class="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
            <i class="fas fa-shield-blank text-white"></i>
            </div>
             <Reveal effect="fadeInUp">
             <h2 className='display-3'>Bill of Material (BOM)</h2>                          
            </Reveal>
            <p>You can easily Make Bill of Material with our software. As Every garment industry make BOM with their own style it will allow you to make your BOM as by you choice.</p>
            <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Finish Item Code</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Finish Item Description</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Style and BOM date</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>UOM, Quantity, size, supplier</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Operation sequence</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Garment cost and comments</li>
            </ul>
            <a href="#" class="btn btn-primary py-3 px-4">Start Using<i class="fas fa-arrow-right ms-2"></i></a>
        </div>
    </div>
        <div class="col-lg-6 col-12">
             <Fade left>
                <div class="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                    <img src="header.png"  class="img-fluid shadow rounded" alt="feature-image" style={{height:"450px"}}/>
           
                     </div>
                </Fade>
                              
    </div>
</div>
</div>
        </section> 
        

        {/* match */}
        
<section class="image-feature pt-60 pb-120" id='Capacity Holding'>
<div class="container">
<div class="row justify-content-between align-items-center">
    <div class="col-lg-5 col-12 order-lg-1">
        <div class="feature-img-content">
            <div class="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                <i class="fal fa-fingerprint fa-2x text-white"></i>
            </div>
            <h2 className='display-3'>Capacity Holding</h2>
            <p>Keep monitoring on your customer order and prodcution status.Set alert on specified threshold. </p>
            <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>View and update quantity of order being cut  by selecting the Customer POID number or PO Number.</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>View and Update quantity of order being  Stich, Printing, Embroidery, Washing, Packing, by selecting the Customer POID number or PO Number.</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Style and BOM date</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Set Threshold</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Give Aert on Production Department.</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Allow to Close Production.</li>
            </ul>

            <a href="#" class="btn btn-primary px-4 py-3 d-block mt-4">Start Using <i class="fas fa-arrow-right ms-2"></i></a>
        </div>
    </div>
        <div class="col-lg-6 col-12 order-lg-0">
        <Fade right>                      
        <div class="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
            <img src="header1.png" class="img-fluid shadow rounded" alt="feature-image" style={{height:"450px"}}/>
        </div>
        </Fade>                          
    </div>
</div>
</div>
        </section> 
        
        {/* Activity Monitoring */}
 <section class="why-choose-us ptb-120" id="Activity Monitoring" >
<div class="container px-4">
<div class="row justify-content-lg-between align-items-center">
    <div class="col-lg-5 col-12">
        <div class="why-choose-content">
            <div class="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
            <i class="fas fa-shield-blank text-white"></i>
            </div>
            <h2 className='display-3'>Activity Monitoring</h2>
            <p>Monior prodcition rate , Quantity shipped ,cutting,SAM precost and number of orders canncelled.</p>
            <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>SAM</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Production Dashbaord</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Load in every section </li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Canncelled orders </li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Warnings and details  in cutting ,stiching,shipping,packing etc</li>
                <li class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>Garment Main Summary Sheet</li>
            </ul>
            <a href="#" class="btn btn-primary py-3 px-4">Start Using<i class="fas fa-arrow-right ms-2"></i></a>
        </div>
    </div>
    <div class="col-lg-6 col-12">
        <Fade left>
        <div class="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
            <img src="header3.png"  class="img-fluid shadow rounded" alt="feature-image" style={{height:"450px"}}/>
        </div>                          
        </Fade>
    </div>
</div>
</div>
        </section> 
        {/* portfolio */}


<section class="customer-review-tab ptb-120 bg-gradient text-white  position-relative z-2" id='Operation Bulletin'>
<div class="container px-6 px-lg-6">
<div class="row justify-content-center align-content-center ">
    <div class="col-md-10 col-lg-6">
        <div class="section-heading text-center">
          
            <h2 className='display-3 text-white'>Operation Bulliten</h2>
            
        </div>
    </div>
</div>
<div class="row pr-100 pl-100">
    <div class="col-12">
        <div class="tab-content" id="testimonial-tabContent">
            <div class="tab-pane fade active show" id="testimonial-tab-1" role="tabpanel">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-6 col-md-6">
                        <div class="testimonial-tab-content mb-5 mb-lg-0 mb-md-0">
                            <img src="quotes-left.svg" alt="testimonial quote" width="65" class="img-fluid mb-32" />
                            <div class="blockquote-title-review mb-4 ">
                                <h3 class="mb-0 h4 fw-semi-bold text-white display-4">SAM Calculator</h3>
                                <ul class="review-rate mb-0 list-unstyled list-inline">
                                    <li class="list-inline-item"><i class="fas fa-star text-warning"></i>
                                    </li>
                                    <li class="list-inline-item"><i class="fas fa-star text-warning"></i>
                                    </li>
                                    <li class="list-inline-item"><i class="fas fa-star text-warning"></i>
                                    </li>
                                    <li class="list-inline-item"><i class="fas fa-star text-warning"></i>
                                    </li>
                                    <li class="list-inline-item"><i class="fas fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>

                            <blockquote class="blockquote text-white">
                                <p>SAM stands for standard allowed minutes which means that the ideal time in which a sewing operation can be performed by a worker. The objective of this web is to enable the users (merchandizers) to make operation bulletin of a garment. The inputs will be product type, sewing operations, SAM of operations and machine type. The output will be a list of operations in sequence with total SAM of product, number of machines required, type of machines required etc.</p>
                            </blockquote>
                         
                        </div>
                      </div>
                      
                    <div class="col-lg-5 col-md-6">
                        <div class="author-img-wrap pt-5 pl-5">
                            <div class="testimonial-video-wrapper position-relative">
                                <img src="4a.png" class="img-fluid rounded-custom shadow-lg" alt="testimonial author" />
                                <div class="customer-info text-white d-flex align-items-center">
                                    <a href="https://youtu.be/idHmP8S16T0" class="video-icon popup-youtube text-decoration-none"><i class="fas fa-play"></i> <span class="text-white ms-2 small"> Watch Video</span></a>
                                </div>
                                <div class="position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
</div>

</div>
        </section> 
        


        {/* pricing */}
<section class="pricing-section pt-60 pb-120  position-relative z-2" id="Pricing">
<div class="container ">
<div class="row justify-content-center px-5 py-5">
    <div class="col-lg-6 col-md-10">
        <div class="section-heading text-center">
            <h4 class="display-6 text-primary">Pricing</h4>
            <h2 className='display-3'>Check Our Valuable Price</h2>
        
        </div>
    </div>
</div>
<div class="row justify-content-center mb-5 px-lg-5">
    <div class="col-lg-3">
        <div class="media d-flex align-items-center py-2 p-sm-2">
            <div class="icon-box mb-0 bg-primary-soft rounded-circle d-block me-3">
            <i class="fa-brands fa-cc-discover text-primary" style={{fontSize:"39px"}}></i>
            </div>
            <div class="media-body fw-medium h6 mb-0">
                No credit card required
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="media d-flex align-items-center py-2 p-sm-2">
            <div class="icon-box mb-0 bg-success-soft rounded-circle d-block me-3">
                <i class="fa fa-calendar-check text-success" style={{fontSize:"39px"}}></i>
            </div>
            <div class="media-body fw-medium h6 mb-0">
                Get 30 day free trial
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="media d-flex align-items-center py-2 p-sm-2">
            <div class="icon-box mb-0 bg-danger-soft rounded-circle d-block me-3">
                <i class="fa fa-calendar-times text-danger" style={{fontSize:"39px"}}></i>
            </div>
            <div class="media-body fw-medium h6 mb-0">
                Cancel anytime
            </div>
        </div>
    </div>
</div>
<div class="row pr-100 pl-100 ">
    <div class="col-lg-4 col-md-6 ">
        <div class="position-relative single-pricing-wrap rounded-custom bg-white custom-shadow p-5 mb-4 mb-lg-0">
            <div class="pricing-header mb-32">
                <h3 class="package-name text-primary d-block">Stater</h3>
                <h4 class="display-6 fw-semi-bold">$30<span>/month</span></h4>
            </div>
            <div class="pricing-info  mb-4">
                <ul class="pricing-feature-list list-unstyled">
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Operation Bulliten</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Capacity Holding</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Bill of Material (BOM)</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Client Admin Pannel</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Activity Monitoring</li>
              
                </ul>
            </div>
            <Link to="/login" class="btn text-center btn-outline-primary mt-2">Buy Now</Link>

            {/* <!--pattern start--> */}
            <div class="dot-shape-bg position-absolute z--1 left--40 bottom--40">
                <img src="dot-big-square.svg" alt="shape"/>
            </div>
            {/* <!--pattern end--> */}
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="position-relative single-pricing-wrap rounded-custom bg-gradient text-white p-5 mb-4 mb-lg-0">
            <div class="pricing-header mb-32">
                <h3 class="package-name text-warning d-block">Advanced</h3>
                <h4 class="display-6 fw-semi-bold text-white">$160<span>/6 months</span></h4>
            </div>
            <div class="pricing-info mb-4">
                <ul class="pricing-feature-list list-unstyled">
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Operation Bulliten</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Capacity Holding</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Bill of Material (BOM)</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Client Admin Pannel</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Activity Monitoring</li>
                             
                </ul>
            </div>
            <a href="/login" class="btn btn-primary mt-2">Buy Now</a>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 ">
        <div class="position-relative single-pricing-wrap rounded-custom bg-white custom-shadow p-5 mb-4 mb-lg-0">
            <div class="pricing-header mb-32">
                <h3 class="package-name text-primary d-block">Premium</h3>
                <h4 class="display-6 fw-semi-bold">$300<span>/12 months</span></h4>
            </div>
            <div class="pricing-info mb-4">
                <ul class="pricing-feature-list list-unstyled">
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Operation Bulliten</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Capacity Holding</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Bill of Material (BOM)</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Client Admin Pannel</li>
                    <li><i class="fas fa-circle fa-2xs text-primary me-2"></i>Activity Monitoring</li>
              
                </ul>
            </div>
            <a href="/login" class="btn btn-outline-primary mt-2">Buy Now</a>

            {/* <!--pattern start--> */}
            <div class="dot-shape-bg position-absolute z--1 right--40 top--40">
                <img src="dot-big-square.svg" alt="shape" />
            </div>
            {/* <!--pattern end--> */}
        </div>
    </div>
</div>
</div>
        </section>
        

<section class="faq-section ptb-120 bg-light" id='FAQ'>
<div class="container">
<div class="row justify-content-center">
    <div class="col-md-10 col-lg-6">
        <div class="section-heading text-center">
            <h4 class="h5 text-primary display-6 pt-5">FAQ</h4>
            <h2 className='display-3'>Frequently Asked Questions</h2>
            
        </div>
    </div>
</div>
<div class="row align-items-center justify-content-between pr-100 pl-100">
    <div class="col-lg-5 col-12">
        <div class="faq-wrapper">
            <div class="faq-item mb-5">
                <h5 className='display-4'><span class="h3 display-4 text-primary me-2">1.</span>Can we cancel subscription anytime?</h5>
                <p>Yes you can but within 3 days.</p>
                  </div>
                  <div class="faq-item mb-5">
                <h5 className='display-4'><span class="h3 display-4 text-primary me-2">2.</span> Can we pay through Paypal or easypaisa?</h5>
                <p>No you need credit card to pay.</p>
                  </div>
                  <div class="faq-item mb-5">
                <h5 className='display-4'><span class="h3 display-4 text-primary me-2">3.</span> Do system provide backup of our data?</h5>
                <p>Yes, backup is present.</p>
                  </div>
                  
           
        </div>
    </div>
    <div class="col-lg-6">
        <div class="text-center mt-4 mt-lg-0 mt-md-0">
            <img src="faq.svg" alt="faq" class="img-fluid" />
        </div>
    </div>
            </div>
            

</div>
        </section>
        





        {/* integration */}
       


        


           <Footer/>

            </div> 
      </>   
 
  )
}

export default LandingPage;