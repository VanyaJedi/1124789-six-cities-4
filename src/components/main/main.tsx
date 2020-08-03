import * as React from "react";
import OfferList from "../offer-list/offer-list";
import LocationList from "../location-list/location-list";
import Map from "../map/map";
import Sort from "../sort/sort";
import Empty from "../empty/empty";
import Header from "../header/header";
import withSort from "../../hocs/with-sort/with-sort";
import {Offer, City, User} from "../../types/types";

interface Props {
  user: User;
  city: City;
  offers: Offer[];
  onHoveredOffer: () => void;
  onClickOffer: () => void;
  onClickCity: () => void;
  currentOffer: Offer;
  hoveredOfferId: string;
  sortType: string;
  onChangeSortType: () => void;
  cities: City[];
  addToFavorites: () => void;
}

const SortWrapped = withSort(Sort);

const Main: React.FunctionComponent<Props> = (props: Props) => {
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

export default Main;
