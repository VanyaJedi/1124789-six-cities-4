import React from "react";
import renderer from "react-test-renderer";
import MapElement from "./mapElement.jsx";
import {offers} from "../../mock/test/data.js";

it(`Map snapshot`, () => {
  const tree = renderer
    .create(
        <MapElement offers={offers} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
