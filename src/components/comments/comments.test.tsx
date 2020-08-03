import * as React from "react";
import * as renderer from "react-test-renderer";
import Comments from "./comments";

it(`Comments snapshot`, () => {

  const addComment = jest.fn();
  const offerId = `1`;
  const rating = 0;
  const isValidForm = true;
  const changeRating = jest.fn();
  const changeFormStatus = jest.fn();

  const tree = renderer
    .create(
        <Comments
          addComment={addComment}
          offerId={offerId}
          rating={rating}
          isValidForm={isValidForm}
          changeRating={changeRating}
          changeFormStatus={changeFormStatus}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
