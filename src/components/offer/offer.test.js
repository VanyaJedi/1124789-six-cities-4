import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";
import {offers} from "../../mock/test/data.js";


it(`Offer snapshot`, () => {
  const offerTest = offers[0];
  const offerHoverHandler = jest.fn();
  const onClickOffer = jest.fn();
  const tree = renderer
    .create(
        <Offer
          offer={offerTest}
          onClickOffer={onClickOffer}
          onHoveredOffer={offerHoverHandler}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
