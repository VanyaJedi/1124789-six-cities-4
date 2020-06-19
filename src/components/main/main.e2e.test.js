import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`List have to be clicked`, () => {
  const titleClickTestHandler = jest.fn();

  const main = mount(
      <Main
        offers={[]}
        titleClickTestHandler={titleClickTestHandler}
      />
  );

  const cityList = main.find(`.locations__list`);
  cityList.simulate(`click`);
  expect(titleClickTestHandler.mock.calls.length).toBe(1);

});
