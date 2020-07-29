import React from "react";
import renderer from "react-test-renderer";
import Favorites from "./favorites.jsx";
import {user, offers} from "../../mock/test/data.js";
import {Router} from 'react-router-dom';
import history from "../../history.js";

it(`Favorites list snapshot`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Favorites
            user={user}
            favorites={offers}
          />
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
