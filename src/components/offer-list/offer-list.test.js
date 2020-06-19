import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";
import {offers} from "../../mock/test/offers.js";

it(`Offer list snapshot`, () => {
  const tree = renderer
    .create(
        <OfferList offers={offers}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
