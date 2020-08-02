import * as React from "react";
import {Route, Redirect, RouteProps} from "react-router-dom";
import {AppRoute} from "../../constants";
import {User} from "../../types/types";

type Props = RouteProps & {
  user: User;
  render: () => React.ReactNode;
}

const PrivateRoute = ({render, path, exact, user}: Props) => {
  return <Route
    path={path}
    exact={exact}
    render={
      () => {
        return user ? render() : <Redirect to={AppRoute.SIGNIN}/>;
      }
    }
  />;
};

export default PrivateRoute;
