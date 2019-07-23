import React, { Component } from "react";
import PropTypes from "prop-types";
class LoginMain extends Component {
  constructor(props) {
  super(props);
  this.state = {
    email: "",
    username: "",
    password: "",
    profileImageUrl: ""
  };
}

handleSubmit = e => {
  e.preventDefault();
  const authType = this.props.signUp ? "signup" : "signin";
  this.props
    .onAuth(authType, this.state)
    .then(() => {
      this.props.history.push("/");
    })
    .catch(() => {
      return;
    });
};

handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
};
  render(){
    const { email, username, password, profileImageUrl } = this.state;
  const {
    signUp,
    heading,
    buttonText,
    errors,
    history,
    removeError
  } = this.props;

  history.listen(() => {
    removeError();
  });
    return(

      <div>
        <br/>
      	<br/>
      	<br/>
      	<br/>
      	<br/>



      		<section id="content">
      		<div className="content-wrap">

      			<div className="container clearfix">

      				<div className="tabs divcenter nobottommargin clearfix"
      					id="tab-login-register" >


      					<div className="tab-container">

      						<div className="tab-content clearfix" id="tab-login">
      							<div className="panel panel-default nobottommargin">
      								<div className="panel-body" >
      									<form id="login-form" name="login-form" className="nobottommargin"
      										action="loginUrl" method="post">



      										<h3>Login to your Account</h3>

      										<div className="col_full">
      											<label for="login-form-username">Email:</label> <input
      												type="text" id="txtName" name="email" value=""
      												className="form-control" /><span className="msg" ></span>
      										</div>

      										<div className="col_full">
      											<label for="login-form-password">Password:</label> <input
      												type="password" id="thullu" name="password"
      												value="" className="form-control" /><span className="msg" ></span>
      										</div>

      										<div className="col_full nobottommargin">
      											<button className="button button-3d button-black nomargin"
      												id="login-form-submit" name="login-form-submit"
      												value="login" >Login</button>

      										</div>

      									</form>
      								</div>
      							</div>
      						</div>

      						<div className="tab-content clearfix" id="tab-register">
      							<div className="panel panel-default nobottommargin">
      								<div className="panel-body" >
      									<h3>Register for an Account</h3>

      									<form id="register-form" name="register-form"
      										className="nobottommargin" action="register" method="post" >

      										<div className="col_full">
      											<label for="register-form-name">Name:</label> <input
      												type="text" id="register-form-name" name="name" value=""
      												className="form-control" />
      										</div>

      										<div className="col_full">
      											<label for="register-form-name">Child Name:</label> <input
      												type="text" id="register-form-name" name="childName" value=""
      												className="form-control" />
      										</div>

      										<div className="col_full">
      											<label for="register-form-email">Email Address:</label> <input
      												type="email" id="register-form-email" name="email" value=""
      												className="form-control" />
      										</div>

      										<div className="col_full">
      											<label for="register-form-username">DOB of Child:</label> <input
      												type="date" id="register-form-dob" name="dob" value=""
      												className="form-control" />
      										</div>

      										<div className="col_full">
      											<label for="register-form-phone">Phone:</label> <input
      												type="tel" id="register-form-phone" name="mno" value=""
      												className="form-control" />
      										</div>
      										<div className="col_full">
      											<label for="register-form-email">Address:</label> <input
      												type="text" id="register-form-address" name="address"
      												value="" className="form-control" />
      										</div>




      										<div className="col_full">
      											<label for="register-form-password">Create Password:</label>
      											<input type="password" id="register-form-password"
      												name="password" value="" className="form-control" onkeyup="CheckPasswordStrength(this.value)"/>
      												<span id="password_strength"></span>

      										</div>

      										<div className="col_full">
      											<label for="register-form-repassword">Re-enter
      												Password:</label> <input type="password"
      												id="register-form-repassword" name="repassword" value=""
      												className="form-control" />

      										</div>

      										<div className="col_full nobottommargin">
      											<button className="button button-3d button-black nomargin"
      												id="register-form-submit" name="register-form-submit"
      												value="register" >Register Now</button>
      										</div>

      									</form>
      								</div>
      							</div>
      						</div>

      					</div>

      				</div>

      			</div>

          </div>

      	</section>



      </div>
    );
  }
}
export default LoginMain;
