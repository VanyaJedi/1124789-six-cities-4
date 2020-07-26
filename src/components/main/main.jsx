import React from "react";
import OfferList from "../offer-list/offer-list.jsx";
import LocationList from "../location-list/location-list.jsx";
import Map from "../map/map.jsx";
import Sort from "../sort/sort.jsx";
import Empty from "../empty/empty.jsx";
import Header from  "../header/header.jsx";
import PropTypes from 'prop-types';
import {offerType, cityType, userType} from "../../types/dataTypes.js";
import withSort from "../../hocs/with-sort/with-sort.js";


const SortWrapped = withSort(Sort);

const Main = (props) => {
  const {user, city, offers, onHoveredOffer, onClickOffer, onClickCity, currentOffer, hoveredOfferId, sortType, onChangeSortType, cities, addToFavorites} = props;
  const offersToShow = offers;

  return (
    <div className="page page--gray page--main">
      <Header user={user}/>
      <main className={offers.length === 0 ? `page__main page__main--index page__main--index-empty` : `page__main page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList
              cities={cities}
              offers={offers}
              onClickCity={onClickCity}
              city={city}
            />
          </section>
        </div>
        <div className="cities">
          {offersToShow.length === 0 ? <Empty/> : <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersToShow.length} places to stay in {city.name}
              </b>
              <SortWrapped
                onChangeSortType={onChangeSortType}
                sortType={sortType}
              />
              <OfferList
                onHoveredOffer={onHoveredOffer}
                onClickOffer={onClickOffer}
                offers={offersToShow}
                sortType={sortType}
                currentOffer={currentOffer}
                addToFavorites={addToFavorites}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offersToShow}
                  currentOffer={currentOffer}
                  city={city}
                  hoveredOfferId={hoveredOfferId}
                />
              </section>
            </div>
          </div>}
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  showAuthScreen: PropTypes.func,
  authScreen: PropTypes.bool,
  authorizationStatus: PropTypes.string,
  cities: PropTypes.arrayOf(cityType),
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired,
  city: cityType,
  onHoveredOffer: PropTypes.func.isRequired,
  onClickOffer: PropTypes.func.isRequired,
  onClickCity: PropTypes.func.isRequired,
  currentOffer: offerType,
  hoveredOfferId: PropTypes.string,
  sortType: PropTypes.string.isRequired,
  onChangeSortType: PropTypes.func.isRequired,
  user: userType,
  addToFavorites: PropTypes.func
};

export default Main;
