import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";

const offer =
  {
    id: `1`,
    title: `test test`,
    img: `img/apartment-02.jpg`,
    cost: `100`,
    type: `Apartment`,
    rate: 3
  };

it(`Offer snapshot`, () => {
  const tree = renderer
    .create(
        <Offer offerName={offer.title}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
