import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";
import {offers, reviews} from "../../mock/test/data.js";
jest.mock(`../map/map.jsx`, () => `Map`);
it(`Property list snapshot`, () => {
  const tree = renderer
    .create(
        <Property
          offer={offers[0]}
          reviews={reviews}
        />,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
