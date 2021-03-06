import * as React from "react";
import {userType} from "../../types/dataTypes";
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {User} from "../../types/types";

interface Props {
  user: User;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {user} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {user ?
                  <Link to={AppRoute.FAVORITES}
                    className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>
                  </Link>
                  :
                  <Link
                    to={AppRoute.SIGNIN}
                    className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span>Sign in</span>
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: userType
};

export default Header;
