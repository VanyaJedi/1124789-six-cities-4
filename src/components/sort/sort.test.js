import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort.jsx";
import {sortType, sortTypeMapping} from "../../mock/test/data.js";

it(`Sort snapshot`, () => {
  const onChangeSortType = jest.fn();
  const opened = false;
  const onClickHandler = jest.fn();
  const tree = renderer
    .create(
        <Sort
          onChangeSortType={onChangeSortType}
          onClickHandler={onClickHandler}
          opened={opened}
          sortTypeMapping={sortTypeMapping}
          sortType={sortType}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
