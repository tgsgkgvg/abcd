import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";



class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render(){

    return(
      <div>
        <header id="header"
    			className="header-narrow header-semi-transparent header-flex"
    			data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 1, 'stickySetTop': '0'}">
    			<div className="header-body">
    				<div className="heade0r-container container">
    					<div className="header-row">
    						<div className="header-column">
    							<div className="header-logo">
    								  <Link  to="/"> <img alt="Porto" width="131" height="55"
    									src="img/team/logo-digital-agency.png" />
                  </Link>
    							</div>
    						</div>
    						<div className="header-column">
    							<div className="header-row">
    								<div className="header-nav header-nav-stripe">
    									<button className="btn header-btn-collapse-nav"
    										data-toggle="collapse" data-target=".header-nav-main">
    										<i className="fa fa-bars"></i>
    									</button>

    									<div
    										className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1 collapse">

                          <div>

    										<nav>
    											<ul className="nav nav-pills" id="mainNav">
    												<li className="active">  <Link  to="/"> Home </Link></li>
    												<li className="dropdown"> <a className="dropdown-toggle" href="/"
    													 > Vaccine </a>
    													<ul className="dropdown-menu">
    														<li>  <Link  to="/FactMain">Fact  </Link></li>
    														<li>  <Link  to="/FaqMain">FAQ  </Link></li>

    													</ul></li>

                            <li> <a  href="#modules"> Services </a></li>


    												<li>  <Link  to="/ContactMain"> Contact </Link></li>
                            {this.props.currentUser.isAuthenticated ? (

                                      <li>
                                        <Link to="/" >Hi {this.props.currentUser.user.username}</Link>
                                        <a onClick={this.logout}>Log out</a>
                                      </li>

                                  ) : (

                                      <li><Link to="/signin">Login</Link>
                                      <Link to="/signup">Register</Link></li>


                                  )}



    											</ul>

                        </nav>
                      </div>

    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</header>


      </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
