import * as React from "react";
import * as renderer from "react-test-renderer";
import OfferList from "./offer-list";
import {offers} from "../../mock/test/data";
import {Router} from 'react-router-dom';
import history from "../../history";

it(`Offer list snapshot`, () => {
  const onClickOffer = jest.fn();
  const onHoveredOffer = jest.fn();
  const sortType = `Popular`;
  const addToFavorites = jest.fn();

  const tree = renderer
    .create(
        <Router history={history}>
          <OfferList
            onClickOffer={onClickOffer}
            onHoveredOffer={onHoveredOffer}
            offers={offers}
            sortType={sortType}
            currentOffer={offers[0]}
            addToFavorites={addToFavorites}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
