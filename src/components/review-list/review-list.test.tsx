import * as React from "react";
import * as renderer from "react-test-renderer";
import ReviewList from "./review-list";
import {reviews} from "../../mock/test/data";

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
