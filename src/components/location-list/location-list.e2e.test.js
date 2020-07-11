import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LocationList from "./location-list.jsx";
import {offers, cities} from "../../mock/test/data.js";

const city = offers[0].city;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Location item should be clicked`, () => {
  const cityClick = jest.fn();

  const locationList = mount(
      <LocationList
        cities={cities}
        offers={offers}
        city={city}
        onClickCity={cityClick}
      />
  );

  const cityLink = locationList.find(`.locations__item-link`).first();
  cityLink.simulate(`click`);
  expect(cityClick).toHaveBeenCalled();

});
