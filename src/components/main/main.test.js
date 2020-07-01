import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers} from "../../mock/test/data.js";
jest.mock(`../map/map.jsx`, () => `Map`);

it(`Main snapshot`, () => {
  const city = offers[0].city;
  const onHoveredOffer = jest.fn();
  const onClickOffer = jest.fn();
  const onClickCity = jest.fn();
  const tree = renderer
    .create(
        <Main
          city={city}
          onClickOffer={onClickOffer}
          onClickCity={onClickCity}
          onHoveredOffer={onHoveredOffer}
          offers={offers}
        />,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
