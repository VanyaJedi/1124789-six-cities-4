import * as React from "react";
import * as renderer from "react-test-renderer";
import Favorites from "./favorites";
import {user, offers} from "../../mock/test/data";
import {Router} from 'react-router-dom';
import history from "../../history";

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
