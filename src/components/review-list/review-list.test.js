import React from "react";
import renderer from "react-test-renderer";
import ReviewList from "./review-list.jsx";
import {reviews} from "../../mock/test/data.js";

it(`Review list snapshot`, () => {
  const tree = renderer
    .create(
        <ReviewList reviews={reviews}/>,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
