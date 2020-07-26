import React from "react";
import renderer from "react-test-renderer";
import Favorites from "./favorites.jsx";
import {user, offers} from "../../mock/test/data.js";

it(`Favorites list snapshot`, () => {
  const tree = renderer
    .create(
        <Favorites
          user={user}
          favorites={offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
