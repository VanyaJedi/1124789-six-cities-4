import * as React from "react";
import {userType} from "../../types/dataTypes";
import Header from "../header/header";
import {User} from "../../types/types";

interface Props {
  user: User;
}

const FavoritesEmpty: React.FunctionComponent<Props> = ({user}) => {

  return (
    <div className="page page--favorites-empty">
      <Header user={user}/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

FavoritesEmpty.propTypes = {
  user: userType,
};

export default FavoritesEmpty;
