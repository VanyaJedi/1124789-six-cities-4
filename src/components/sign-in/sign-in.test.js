import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";


it(`Signin snapshot`, () => {
  const loginHandler = jest.fn();
  const tree = renderer
    .create(
        <SignIn
          loginHandler={loginHandler}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
