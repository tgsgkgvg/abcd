import React from "react";
import { Switch, Route, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
// import withAuth from "../hocs/withAuth";
import FaqMain from "../components/FaqMain";
import FactMain from "../components/FactMain";
import ContactMain from "../components/ContactMain";
import Schedule from "../components/Schedule";
import bmi from "../components/bmi";

import "./App.css";
import Home from "../components/home"

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Homepage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Login"
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Sign me up!"
                heading="Register"
                {...props}
              />
            );
          }} />
          <Route exact path='/ContactMain' component={ContactMain}/>


          <Route exact path='/FaqMain' component={FaqMain}/>
          <Route exact path='/FactMain' component={FactMain}/>
          <Route exact path='/Schedule' component={Schedule}/>
          <Route exact path='/bmi' component={bmi}/>
          <Route
                exact
                path="/bmi"
                render={props => {
                  return (
                    <Home
                      removeError={removeError}
                      errors={errors}
                      onAuth={authUser}
                      {...props}
                    />  );
          }} />


      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main)
);
