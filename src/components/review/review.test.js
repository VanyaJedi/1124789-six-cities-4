import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";
import {reviews} from "../../mock/test/data.js";

jest.mock(`../map/map.jsx`, () => `Map`);
it(`Review list snapshot`, () => {
  const reviewTest = reviews[0];
  const tree = renderer
    .create(
        <Review text={reviewTest.text}
          rate={reviewTest.rate}
          userName={reviewTest.userName}
          date={reviewTest.date}/>,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
