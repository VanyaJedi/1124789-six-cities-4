import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
import {offers, reviews} from "../../mock/test/data.js";


jest.mock(`../map/map.jsx`, () => `Map`);

const mockStore = configureStore([]);

it(`App snapshot`, () => {

  const store = mockStore({
    city: offers[0].city,
  });
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
          <App
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
        </Provider>
        ,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
