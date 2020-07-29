import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";
import {offers, reviews, user} from "../../mock/test/data.js";
jest.mock(`../map/map.jsx`, () => `Map`);
import {Router} from 'react-router-dom';
import history from "../../history.js";
it(`Property list snapshot`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Property
            offers={offers}
            offer={offers[0]}
            reviews={reviews}
            user={user}
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
