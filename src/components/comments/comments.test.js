import React from "react";
import renderer from "react-test-renderer";
import Comments from "./comments.jsx";

it(`Comments snapshot`, () => {

  const addComment = jest.fn();
  const offerId = `1`;

  const tree = renderer
    .create(
        <Comments
          addComment={addComment}
          offerId={offerId}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
