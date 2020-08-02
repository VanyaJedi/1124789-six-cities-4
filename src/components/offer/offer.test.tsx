import * as React from "react";
import * as renderer from "react-test-renderer";
import Offer from "./offer";
import {offers} from "../../mock/test/data";
import {Router} from 'react-router-dom';
import history from "../../history";


it(`Offer snapshot`, () => {

  const offerTest = offers[0];
  const offerHoverHandler = jest.fn();
  const onClickOffer = jest.fn();
  const addToFavorites = jest.fn();

  const tree = renderer
    .create(
        <Router history={history}>
          <Offer
            offer={offerTest}
            onClickOffer={onClickOffer}
            onHoveredOffer={offerHoverHandler}
            currentOffer={offers[0]}
            addToFavorites={addToFavorites}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
