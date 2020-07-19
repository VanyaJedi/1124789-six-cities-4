import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignIn from "./sign-in.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Form should be submited`, () => {
  const loginHandler = jest.fn();

  const signInComponent = mount(
      <SignIn
        loginHandler={loginHandler}
      />
  );

  const formNode = signInComponent.find(`.login__form`);
  formNode.simulate(`submit`);
  expect(loginHandler).toHaveBeenCalled();

});
