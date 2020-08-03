import * as React from "react";
import * as renderer from "react-test-renderer";
import Review from "./review";
import {reviews} from "../../mock/test/data";

jest.mock(`../map/map`, () => `Map`);
it(`Review list snapshot`, () => {
  const reviewTest = reviews[0];
  const tree = renderer
    .create(
        <Review key={reviewTest.id}
          review={reviews[0]}/>,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
