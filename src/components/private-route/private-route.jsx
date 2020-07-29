import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "../../constants.js";
import {userType} from "../../types/dataTypes.js";

const PrivateRoute = ({component: Component, ...rest}) => {
  return <Route
    {...rest}
    render={
      (props) => {
        return props.user ? <Component {...props}/> : <Redirect to={AppRoute.SIGNIN}/>;
      }
    }
  />;
};

PrivateRoute.propTypes = {
  component: PropTypes.component,
  user: userType
};

export default PrivateRoute;
