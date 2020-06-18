import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";
import {offers} from "../../mock/test/offers.js";


it(`Offer snapshot`, () => {
  const offerTest = offers[0];
  const offerHoverHandler = jest.fn();
  const tree = renderer
    .create(
        <Offer
          offer={offerTest}
          onHover={offerHoverHandler}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
