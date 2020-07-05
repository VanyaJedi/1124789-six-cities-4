import React from "react";
import OfferList from "../offer-list/offer-list.jsx";
import LocationList from "../location-list/location-list.jsx";
import Map from "../map/map.jsx";
import Sort from "../sort/sort.jsx";
import PropTypes from 'prop-types';
import {offerType} from "../../types/dataTypes.js";
import {getOffersOnCity} from "../../utils.js";
import withSort from "../../hocs/with-sort/with-sort.js";

const SortWrapped = withSort(Sort);

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  createPlacesCountTemplate(offers, city) {
    if (offers.length === 0) {
      return (
        <b className="places__found">
          No places to stay available
        </b>
      );
    }
    return (<b className="places__found">
      {offers.length} places to stay in {city.name}
    </b>);
  }

  createMapTemplate(offersToShow, currentOffer, city, hoveredOfferId) {
    if (offersToShow.length === 0) {
      return null;
    }

    return (
      <Map
        offers={offersToShow}
        currentOffer={currentOffer}
        city={city}
        hoveredOfferId={hoveredOfferId}
      />
    );
  }

  render() {
    const {city, offers, onHoveredOffer, onClickOffer, onClickCity, currentOffer, hoveredOfferId, sortType, onChangeSortType} = this.props;
    const offersToShow = getOffersOnCity(offers, city);
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList
                onClickCity={onClickCity}
                city={city}
              />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                {this.createPlacesCountTemplate(offersToShow, city)}
                <SortWrapped
                  onChangeSortType={onChangeSortType}
                />
                <OfferList
                  onHoveredOffer={onHoveredOffer}
                  onClickOffer={onClickOffer}
                  offers={offersToShow}
                  sortType={sortType}
                  currentOffer={currentOffer}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {this.createMapTemplate(offersToShow, currentOffer, city, hoveredOfferId)}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cityCoord: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  onHoveredOffer: PropTypes.func.isRequired,
  onClickOffer: PropTypes.func.isRequired,
  onClickCity: PropTypes.func.isRequired,
  currentOffer: offerType,
  hoveredOfferId: PropTypes.string,
  sortType: PropTypes.string.isRequired,
  onChangeSortType: PropTypes.func.isRequired
};

export default Main;
