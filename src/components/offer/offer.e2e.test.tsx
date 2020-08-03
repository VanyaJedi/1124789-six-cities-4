import * as React from "react";
import * as Enzyme from "enzyme";
import {mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Offer from "./offer";
import {offers} from "../../mock/test/data";
import {Router} from 'react-router-dom';
import history from "../../history";

const offerTest = offers[0];
const addToFavorites = jest.fn();

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
          currentOffer={offers[0]}
          addToFavorites={addToFavorites}
        />
      </Router>
  );

  const offerCard = offerComponent.find(`.place-card`);
  offerCard.simulate(`mouseenter`);
  expect(hoverOfferTestHandler).toHaveBeenCalled();

});
