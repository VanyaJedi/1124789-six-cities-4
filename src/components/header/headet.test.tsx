import * as React from "react";
import * as renderer from "react-test-renderer";
import Header from "./header";
import {user} from "../../mock/test/data";
import {Router} from 'react-router-dom';
import history from "../../history";

it(`Header list snapshot`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Header
            user={user}
          />
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
