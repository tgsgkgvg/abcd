import React, { Component } from 'react';
class Footer extends Component {
  render(){
    return(
      <div>
        <footer className="short" id="footer">
    			<div className="container">
    				<div className="row">
    					<div className="col-sm-2">
    						<a href="Home.jsp" className="logo"><img alt="logo"
    							className="img-responsive" src="img/team/logo-digital-agency.png" />


    						</a>
    					</div>
    					<div className="col-sm-2 col-sm-offset-6 align-right"></div>
    					<div className="col-sm-2 align-right">
    						<h5 className="mb-sm">INDIA</h5>
    						<span className="phone font-size-sm"><i
    							className="fa fa-phone text-color-primary"></i> 9********6</span>
    					</div>
    				</div>
    				<div className="row">
    					<div className="col-md-12">
    						<hr className="solid" />
    						<div className="row">
    							<div className="col-md-6">
    								<p>Copyright 2018. All Rights Reserved.</p>
    							</div>
    							<div className="col-md-6 align-right">
    								<ul className="social-icons pull-right">
    									<li className="social-icons-facebook"><a
    										href="http://www.facebook.com/"
    										title="Facebook"><i className="fa fa-facebook"></i></a></li>
    									<li className="social-icons-twitter"><a
    										href="http://www.twitter.com/" title="Twitter"><i
    											className="fa fa-twitter"></i></a></li>
    									<li className="social-icons-linkedin"><a
    										href="http://www.linkedin.com/"
    										title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
    								</ul>
    								<span className="footer-email-custom pull-right"><i
    									className="fa fa-envelope text-color-primary"></i> <a
    									href="mailto:mail@example.com">indBabycare@gmail.com</a></span>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</footer>
      </div>
    );
  }
}
export default Footer;
