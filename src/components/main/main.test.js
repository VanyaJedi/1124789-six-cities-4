import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers, cities, user} from "../../mock/test/data.js";
import {Router} from "react-router-dom";
jest.mock(`../map/map.jsx`, () => `Map`);
import history from "../../history.js";

it(`Main snapshot`, () => {
  const city = offers[0].city;
  const onHoveredOffer = jest.fn();
  const onClickOffer = jest.fn();
  const onClickCity = jest.fn();
  const hoveredOfferId = null;
  const sortType = `Popular`;
  const onChangeSortType = jest.fn();
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
