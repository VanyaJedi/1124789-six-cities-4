import * as React from "react";
import * as renderer from "react-test-renderer";
import Main from "./main";
import {offers, cities, user} from "../../mock/test/data";
import {Router} from "react-router-dom";
import history from "../../history";

it(`Main snapshot`, () => {
  const city = offers[0].city;
  const onHoveredOffer = jest.fn();
  const onClickOffer = jest.fn();
  const onClickCity = jest.fn();
  const hoveredOfferId = null;
  const sortType = `Popular`;
  const onChangeSortType = jest.fn();
  const currentOffer = offers[0];
  const addToFavorites = jest.fn();

  const tree = renderer
    .create(
        <Router history={history}>
          <Main
            user={user}
            cities={cities}
            city={city}
            onClickOffer={onClickOffer}
            onClickCity={onClickCity}
            onHoveredOffer={onHoveredOffer}
            offers={offers}
            hoveredOfferId={hoveredOfferId}
            sortType={sortType}
            onChangeSortType={onChangeSortType}
            currentOffer={currentOffer}
            addToFavorites={addToFavorites}
          />
        </Router>
        ,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
