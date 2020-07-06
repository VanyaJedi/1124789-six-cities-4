import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./sort.jsx";
import {sortType, sortTypeMapping} from "../../mock/test/data.js";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Sort should be clicked`, () => {
  const onChangeSortType = jest.fn();
  const opened = false;
  const onClickHandler = jest.fn();

  const sortComponent = mount(
      <Sort
        onChangeSortType={onChangeSortType}
        opened={opened}
        onClickHandler={onClickHandler}
        sortTypeMapping={sortTypeMapping}
        sortType={sortType}
      />
  );

  const sortTypeNode = sortComponent.find(`.places__option`).at(1);
  sortTypeNode.simulate(`click`);
  expect(onChangeSortType).toHaveBeenCalled();

});
