import * as React from "react";
import * as renderer from "react-test-renderer";
import Sort from "./sort";
import {sortType, sortTypeMapping} from "../../mock/test/data";

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
