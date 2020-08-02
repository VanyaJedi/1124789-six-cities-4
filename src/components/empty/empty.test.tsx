import * as React from "react";
import * as renderer from "react-test-renderer";
import Empty from "./empty";

it(`Empty`, () => {
  const tree = renderer
    .create(
        <Empty/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
