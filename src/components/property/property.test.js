import React from "react";
import renderer from "react-test-renderer";
import Property from "./Property.jsx";
import {offers} from "../../mock/test/data.js";

it(`Property list snapshot`, () => {
  const tree = renderer
    .create(
        <Property offer={offers[0]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
