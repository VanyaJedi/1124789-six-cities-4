import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offers} from "../../mock/test/data.js";


it(`App snapshot`, () => {
  const tree = renderer
    .create(
        <App offers={offers}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
