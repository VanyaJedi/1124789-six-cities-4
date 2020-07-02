import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./sort.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Sort should be clicked`, () => {
  const onChangeSortType = jest.fn();

  const sortComponent = mount(
      <Sort onChangeSortType={onChangeSortType}/>
  );

  const sortTypesList = sortComponent.find(`.places__options`);
  sortTypesList.simulate(`click`);
  expect(onChangeSortType).toHaveBeenCalled();

});
