import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offers = [
  {
    id: `1`,
    title: `test test`,
    img: `img/apartment-02.jpg`,
    cost: `100`,
    type: `Apartment`,
    rate: 3
  },
  {
    id: `2`,
    title: `test test test`,
    img: `img/apartment-04.jpg`,
    cost: `00`,
    type: ``,
    rate: 4
  },
];

const titleClickTestHandler = () => {};

it(`Main snapshot`, () => {
  const tree = renderer
    .create(
        <Main
          titleClickTestHandler={titleClickTestHandler}
          offers={offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
