import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
import {offers, reviews, cities} from "../../mock/test/data.js";
import {Router} from "react-router-dom";
import history from "../../history.js";


jest.mock(`../map/map.jsx`, () => `Map`);

const mockStore = configureStore([]);

it(`App snapshot`, () => {

  const initialState = {
    cities,
    city: offers[0].city,
    offers,
    reviews,
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `Popular`
  };


  const store = mockStore(initialState);

  const city = offers[0].city;
  const currentOffer = null;
  const onHoveredOffer = jest.fn();
  const onClickOffer = jest.fn();
  const onClickCity = jest.fn();
  const hoveredOfferId = null;
  const sortType = `Popular`;
  const onChangeSortType = jest.fn();

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <App
              cities={cities}
              city={city}
              onHoveredOffer={onHoveredOffer}
              onClickOffer={onClickOffer}
              onClickCity={onClickCity}
              currentOffer={currentOffer}
              offers={offers}
              hoveredOfferId={hoveredOfferId}
              sortType={sortType}
              onChangeSortType={onChangeSortType}
              reviews={reviews}
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
