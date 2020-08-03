import * as React from "react";
import * as Enzyme from "enzyme";
import {mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import LocationList from "./location-list";
import {offers, cities} from "../../mock/test/data";

const city = offers[0].city;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Location item should be clicked`, () => {
  const cityClick = jest.fn();

  const locationList = mount(
      <LocationList
        cities={cities}
        city={city}
        onClickCity={cityClick}
      />
  );

  const cityLink = locationList.find(`.locations__item-link`).first();
  cityLink.simulate(`click`);
  expect(cityClick).toHaveBeenCalled();

});
