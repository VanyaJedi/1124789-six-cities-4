import * as React from "react";
import * as renderer from "react-test-renderer";
import LocationList from "./location-list";
import {offers, cities} from "../../mock/test/data";

it(`Location list snapshot`, () => {
  const city = offers[0].city;
  const onClickCity = jest.fn();
  const tree = renderer
    .create(
        <LocationList
          cities={cities}
          onClickCity={onClickCity}
          city={city}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
