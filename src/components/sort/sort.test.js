import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort.jsx";


it(`Sort snapshot`, () => {
  const onChangeSortType = jest.fn();
  const tree = renderer
    .create(
        <Sort onChangeSortType={onChangeSortType}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
