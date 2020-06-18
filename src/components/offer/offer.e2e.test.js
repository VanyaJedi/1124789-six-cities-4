import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer.jsx";
import {offers} from "../../mock/test/offers.js";

const offerTest = offers[0];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Offer should be hovered`, () => {
  const hoverOfferTestHandler = jest.fn();

  const offerComponent = mount(
      <Offer
        offer={offerTest}
        onHover={hoverOfferTestHandler}
      />
  );

  const offerCard = offerComponent.find(`.place-card`);
  offerCard.simulate(`mouseenter`);
  expect(hoverOfferTestHandler).toHaveBeenCalled();

});
