import * as React from "react";
import * as renderer from "react-test-renderer";
import Map from "./map";
import {offers, cities} from "../../mock/test/data";

it(`Map snapshot`, () => {
  const tree = renderer
    .create(
        <Map
          offers={offers}
          currentOffer={offers[0]}
          city={cities[0]}
          hoveredOfferId={`1`}
        />,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
