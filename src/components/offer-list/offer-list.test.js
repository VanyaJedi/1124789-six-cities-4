import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";
import {offers} from "../../mock/test/data.js";
import {Router} from 'react-router-dom';
import history from "../../history.js";

it(`Offer list snapshot`, () => {
  const onClickOffer = jest.fn();
  const onHoveredOffer = jest.fn();
  const sortType = `Popular`;
  const tree = renderer
    .create(
        <Router history={history}>
          <OfferList
            onClickOffer={onClickOffer}
            onHoveredOffer={onHoveredOffer}
            offers={offers}
            sortType={sortType}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
