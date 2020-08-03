import * as React from "react";
import * as renderer from "react-test-renderer";
import Property from "./property";
import {offers, reviews, user} from "../../mock/test/data";
import {Router} from 'react-router-dom';
import history from "../../history";
it(`Property list snapshot`, () => {

  const addComment = jest.fn();
  const addToFavorites = jest.fn();
  const changeRating = jest.fn();
  const changeFormStatus = jest.fn();

  const tree = renderer
    .create(
        <Router history={history}>
          <Property
            offers={offers}
            offer={offers[0]}
            reviews={reviews}
            user={user}
            addComment={addComment}
            addToFavorites={addToFavorites}
            rating={0}
            isValidForm={true}
            changeRating={changeRating}
            changeFormStatus={changeFormStatus}
          />
        </Router>
        ,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
