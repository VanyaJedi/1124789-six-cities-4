import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import {offers} from "../../mock/test/data.js";
jest.mock(`../map/map.jsx`, () => `Map`);
it(`Map snapshot`, () => {
  const tree = renderer
    .create(
        <Map offers={offers} />,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
