import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer.jsx";
import {offers} from "../../mock/test/data.js";
import {Router} from 'react-router-dom';
import history from "../../history.js";

const offerTest = offers[0];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Offer should be hovered`, () => {
  const hoverOfferTestHandler = jest.fn();
  const onClickOffer = jest.fn();

  const offerComponent = mount(
      <Router history={history}>
        <Offer
          offer={offerTest}
          onHoveredOffer={hoverOfferTestHandler}
          onClickOffer={onClickOffer}
        />
      </Router>
  );

  const offerCard = offerComponent.find(`.place-card`);
  offerCard.simulate(`mouseenter`);
  expect(hoverOfferTestHandler).toHaveBeenCalled();

});
