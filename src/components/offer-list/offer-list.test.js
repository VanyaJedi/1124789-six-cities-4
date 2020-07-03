import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";
import {offers} from "../../mock/test/data.js";

it(`Offer list snapshot`, () => {
  const onClickOffer = jest.fn();
  const onHoveredOffer = jest.fn();
  const sortType = `Popular`;
  const tree = renderer
    .create(
        <OfferList
          onClickOffer={onClickOffer}
          onHoveredOffer={onHoveredOffer}
          offers={offers}
          sortType={sortType}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
