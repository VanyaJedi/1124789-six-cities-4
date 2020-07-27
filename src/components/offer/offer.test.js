import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";
import {offers} from "../../mock/test/data.js";
import {Router} from 'react-router-dom';
import history from "../../history.js";


it(`Offer snapshot`, () => {
  const offerTest = offers[0];
  const offerHoverHandler = jest.fn();
  const onClickOffer = jest.fn();
  const tree = renderer
    .create(
        <Router history={history}>
          <Offer
            offer={offerTest}
            onClickOffer={onClickOffer}
            onHoveredOffer={offerHoverHandler}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
