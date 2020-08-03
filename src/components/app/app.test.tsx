import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app";
import {offers, reviews, cities, user} from "../../mock/test/data";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureStore([]);

it(`App snapshot`, () => {

  const initialState = {
    DATA: {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      offers,
      offersOnCity: offers,
      nearbyOffers: offers,
      reviews,
      favorites: offers
    },
    APP: {
      hoveredOfferId: null,
      currentOffer: null,
      sortType: `Popular`,
      rating: 0,
      isValidForm: true,
      isLoading: false
    },
    USER: {
      user: null
    }
  };

  const store = mockStore(initialState);

  const offer = offers[0];
  const city = offers[0].city;
  const currentOffer = null;
  const onHoveredOffer = jest.fn();
  const onClickOffer = jest.fn();
  const onClickCity = jest.fn();
  const hoveredOfferId = null;
  const sortType = `Popular`;
  const onChangeSortType = jest.fn();
  const login = jest.fn();
  const addComment = jest.fn();
  const nearbyOffers = offers;
  const addToFavorites = jest.fn();
  const favorites = offers;
  const rating = 0;
  const isValidForm = true;
  const changeRating = jest.fn();
  const changeFormStatus = jest.fn();
  const isLoading = false;

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <App
              login={login}
              user={user}
              city={city}
              offers={offers}
              reviews={reviews}
              onHoveredOffer={onHoveredOffer}
              onClickOffer={onClickOffer}
              onClickCity={onClickCity}
              currentOffer={currentOffer}
              hoveredOfferId={hoveredOfferId}
              sortType={sortType}
              onChangeSortType={onChangeSortType}
              cities={cities}
              addComment={addComment}
              nearbyOffers={nearbyOffers}
              addToFavorites={addToFavorites}
              favorites={favorites}
              rating={rating}
              isValidForm={isValidForm}
              changeRating={changeRating}
              changeFormStatus={changeFormStatus}
              offer={offer}
              isLoading={isLoading}
            />
          </Router>

        </Provider>
        ,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
