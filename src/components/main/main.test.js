import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers} from "../../mock/test/offers.js";

const titleClickTestHandler = () => {};

it(`Main snapshot`, () => {
  const tree = renderer
    .create(
        <Main
          titleClickTestHandler={titleClickTestHandler}
          offers={offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
