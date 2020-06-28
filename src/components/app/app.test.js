import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offers} from "../../mock/test/data.js";
jest.mock(`../map/map.jsx`, () => `Map`);

it(`App snapshot`, () => {
  const tree = renderer
    .create(
        <App offers={offers}/>,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
