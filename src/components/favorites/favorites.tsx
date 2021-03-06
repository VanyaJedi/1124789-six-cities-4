import * as React from "react";
import Header from "../header/header";
import {getCities} from "../../utils";
import {Offer, User} from "../../types/types";
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

interface Props {
  user: User;
  favorites: Offer[];
}

const Favorites: React.FunctionComponent<Props> = (props: Props) => {

  const {user, favorites} = props;

  const cities = getCities(favorites);
  return (
    <div className="page">
      <Header user={user}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city, index) => {
                const offerList = favorites.filter((offer) => offer.city.name === city.name);
                return (
                  <li key={city.name + index} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city.name}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offerList.map((offer) => {
                        return (
                          <article key={offer.id} className="favorites__card place-card">
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <a href="#">
                                <img className="place-card__image" src={offer.img} width="150" height="110" alt="Place image"/>
                              </a>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{offer.cost}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                  <svg className="place-card__bookmark-icon" width="18" height="19">
                                    <use xlinkHref="#icon-bookmark"></use>
                                  </svg>
                                  <span className="visually-hidden">In bookmarks</span>
                                </button>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: `100%`}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <a href="#">{offer.title}</a>
                              </h2>
                              <p className="place-card__type">{offer.type}</p>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.ROOT} className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

export default Favorites;
