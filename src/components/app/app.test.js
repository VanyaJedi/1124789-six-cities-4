import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {offers} from "../../mock/test/data.js";
jest.mock(`../map/map.jsx`, () => `Map`);

it(`App snapshot`, () => {
  const city = offers[0].city;
  const currentOffer = null;
  const onHoveredOffer = jest.fn();
  const onClickOffer = jest.fn();
  const onClickCity = jest.fn();
  const tree = renderer
    .create(
        <App
          city={city}
          onHoveredOffer={onHoveredOffer}
          onClickOffer={onClickOffer}
          onClickCity={onClickCity}
          currentOffer={currentOffer}
          offers={offers}/>,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
