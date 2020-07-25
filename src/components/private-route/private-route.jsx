import React from "react";
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "../../constants.js";

const PrivateRoute = ({component: Component, ...rest} ) => {
  return <Route
    {...rest}
    render={
      (props) => {
        user ? <Component {...props}/> : <Redirect to={AppRoute.SIGNIN}/>
      }
    }
  />
}

export default PrivateRoute;
