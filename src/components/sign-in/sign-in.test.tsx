import * as React from "react";
import * as renderer from "react-test-renderer";
import SignIn from "./sign-in";


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
