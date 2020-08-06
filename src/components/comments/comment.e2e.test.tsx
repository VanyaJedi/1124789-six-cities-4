import * as React from "react";
import * as Enzyme from "enzyme";
import {mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Comments from "./comments";
import {Router} from 'react-router-dom';
import history from "../../history";

const addComment = jest.fn();
const offerId = `1`;
const onSubmit = jest.fn();
const onInputChange = jest.fn();
const isValidForm = false;
const review = ``;
const rating = 0;
const isSubmiting = false;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Comment must be submited`, () => {

  const commentComponent = mount(
      <Router history={history}>
        <Comments
          onSubmit={onSubmit}
          onInputChange={onInputChange}
          isValidForm={isValidForm}
          review={review}
          rating={rating}
          offerId={offerId}
          addComment={addComment}
          isSubmiting={isSubmiting}
        />
      </Router>
  );

  const form = commentComponent.find(`.reviews__form`);
  form.simulate(`submit`);
  expect(onSubmit).toHaveBeenCalled();

});
