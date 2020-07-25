import {reducer, ActionCreator, Operation, ActionType} from "./user.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {user} from "../../mock/test/data.js";
const api = createAPI(()=>{});


const initData = {
  user: null
};


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initData, {})).toEqual({
    user: null,
  });
});

it(`Reducer should set the user`, () => {
  expect(reducer(initData,
      ActionCreator.setUser(user)
  ))
  .toEqual({
    user
  });
});

it(`Should make the correct auth check`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const checkStatusOperation = Operation.checkAuth();

  apiMock
    .onGet(`/login`)
    .reply(200, user);

  return checkStatusOperation(dispatch, ()=>{}, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER,
        payload: user,
      });
    });
});


it(`Should make the correct login`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const authData = {
    login: `qwerty@mail.ru`,
    password: `111`
  };
  const loginOperation = Operation.login(authData);

  apiMock
    .onPost(`/login`, {
      email: `qwerty@mail.ru`,
      password: `111`
    })
    .reply(200, user);

  return loginOperation(dispatch, ()=>{}, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER,
        payload: user,
      });
    });
});
