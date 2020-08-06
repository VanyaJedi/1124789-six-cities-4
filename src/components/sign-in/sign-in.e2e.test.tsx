import * as React from "react";
import * as Enzyme from "enzyme";
import {mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import SignIn from "./sign-in";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Form should be submited`, () => {
  const loginHandler = jest.fn().mockResolvedValueOnce(`first call`)
                                .mockRejectedValueOnce(new Error(`Async error`));

  const signInComponent = mount(
      <SignIn
        loginHandler={loginHandler}
      />
  );

  const formNode = signInComponent.find(`.login__form`);
  formNode.simulate(`submit`);
  expect(loginHandler).toHaveBeenCalled();

});
