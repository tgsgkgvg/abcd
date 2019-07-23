import React, { Component } from 'react';
 class ContactMain extends Component {
  render(){
    return(
      <div>
        <div role="main"  className="main">
          <section id= "experience"  className="section section-text-light section-background m-none" >
            <div  className="container">
              <div  className="row">
                <div  className="col-md-6">
                  <h2  className="font-weight-bold">- Contact Us</h2>
                  <p  className="custom-opacity-font">contact/mail us for any queries</p>
                  <div  className="col-md-6 pl-none">
                    <h4  className="mb-xs">Call Us</h4>
                    <a href="tel:+1234567890"  className="text-decoration-none" title="Call Us">
                      <span  className="custom-call-to-action-2 text-color-light text-sm custom-opacity-font">
                        Phone
                        <span  className="info text-lg">
                          9********6
                        </span>
                      </span>
                    </a>
                  </div>
                  <div  className="col-md-6 pl-none custom-sm-margin-top">
                    <h4  className="mb-xs">Our Location</h4>
                    <p  className="custom-opacity-font">New Delhi</p>
                  </div>
                  <div  className="col-md-6 pl-none">
                    <h4  className="mb-xs">Mail Us</h4>
                    <a href="mail:mail@example.com"  className="text-decoration-none"  title="Mail Us">
                      <span  className="custom-call-to-action-2 text-color-light text-sm custom-opacity-font">
                        Email:: indvardaan@gmail.com
                        <span  className="info text-lg">

                        </span>
                      </span>
                    </a>
                  </div>
                  <div  className="col-md-6 pl-none custom-sm-margin-top">
                    <h4  className="mb-xs">Social Media</h4>
                    <ul  className="social-icons custom-social-icons-style-1 custom-opacity-font">
                      <li  className="social-icons-facebook">
                        <a href="http://www.facebook.com/"  title="Facebook">
                          <i  className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li  className="social-icons-twitter">
                        <a href="http://www.twitter.com/" title="Twitter">
                          <i  className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li  className="social-icons-instagram">
                        <a href="http://www.instagram.com/"  title="Instagram">
                          <i  className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li  className="social-icons-linkedin">
                        <a href="http://www.linkedin.com/" title="Linkedin">
                          <i  className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div  className="col-md-6 custom-sm-margin-top">
                  <h2  className="font-weight-bold">- Write Us</h2>
                  <form id="contactForm"  className="custom-contact-form-style-1" action="php/contact-form.php" method="POST">
                    <div  className="row">
                      <div  className="form-group">
                        <div  className="col-md-12">
                          <div  className="custom-input-box">
                            <i  className="icon-user icons text-color-primary"></i>
                            <input type="text" value="" data-msg-required="Please enter your name." maxlength="100"  className="form-control" name="name" id="name" placeholder="Name*" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="row">
                      <div  className="form-group">
                        <div  className="col-md-12">
                          <div  className="custom-input-box">
                            <i  className="icon-envelope icons text-color-primary"></i>
                            <input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100"  className="form-control" name="email" id="email" placeholder="Email*" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="row">
                      <div  className="form-group">
                        <div  className="col-md-12">
                          <div  className="custom-input-box">
                            <i  className="icon-bubble icons text-color-primary"></i>
                            <textarea maxlength="5000" data-msg-required="Please enter your message." rows="10"  className="form-control" name="message" id="message" placeholder="Message*" required></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="row">
                      <div  className="col-md-12">
                        <input type="submit" value="Submit Now"  className="btn btn-borders custom-border-width btn-primary custom-border-radius font-weight-semibold text-uppercase" data-loading-text="Loading..."/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>





        </div>




      </div>
    );
  }
}
export default ContactMain;
