import React from "react";
import renderer from "react-test-renderer";
import LocationList from "./location-list.jsx";
import {offers} from "../../mock/test/data.js";

it(`Location list snapshot`, () => {
  const city = offers[0].city;
  const onClickCity = jest.fn();
  const tree = renderer
    .create(
        <LocationList
          offers={offers}
          onClickCity={onClickCity}
          city={city}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
