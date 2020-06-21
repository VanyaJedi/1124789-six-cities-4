import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers} from "../../mock/test/data.js";

const onHoveredOffer = () => {};
const onClickOffer = jest.fn();
it(`Main snapshot`, () => {
  const tree = renderer
    .create(
        <Main
          onClickOffer={onClickOffer}
          onHoveredOffer={onHoveredOffer}
          offers={offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
