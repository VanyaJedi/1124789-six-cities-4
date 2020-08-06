import * as React from "react";
import * as renderer from "react-test-renderer";
import Comments from "./comments";

it(`Comments snapshot`, () => {

  const addComment = jest.fn();
  const offerId = `1`;
  const onSubmit = jest.fn();
  const onInputChange = jest.fn();
  const isValidForm = false;
  const rating = 0;
  const review = ``;
  const isSubmiting = false;

  const tree = renderer
    .create(
        <Comments
          addComment={addComment}
          offerId={offerId}
          onSubmit={onSubmit}
          onInputChange={onInputChange}
          isValidForm={isValidForm}
          rating={rating}
          review={review}
          isSubmiting={isSubmiting}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
