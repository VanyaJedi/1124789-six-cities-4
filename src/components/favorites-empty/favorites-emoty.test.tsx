import * as React from "react";
import * as renderer from "react-test-renderer";
import FavoritesEmpty from "./favorites-empty";
import {user} from "../../mock/test/data";
import {Router} from 'react-router-dom';
import history from "../../history";

it(`Favorites empty list snapshot`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FavoritesEmpty
            user={user}
          />
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
