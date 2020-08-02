import * as React from "react";
import * as Enzyme from "enzyme";
import {mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Sort from "./sort";
import {sortType, sortTypeMapping} from "../../mock/test/data";


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
