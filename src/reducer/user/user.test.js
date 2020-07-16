import {reducer, actionCreator, Operation, actionType} from "./user.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const api = createAPI(()=>{});


const initData = {
  authorizationStatus: `NO_AUTH`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initData, {})).toEqual({
    authorizationStatus: `NO_AUTH`,
  });
});

it(`Reducer should change the auth status`, () => {
  expect(reducer(
      {
        authorizationStatus: `NO_AUTH`,
      },
      actionCreator.changeAuthStatus(`AUTH`)
  ))
  .toEqual({
    authorizationStatus: `AUTH`,
  });
});

it(`Should make the correct auth check`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const checkStatusOperation = Operation.checkAuth();

  apiMock
    .onGet(`/login`)
    .reply(200, `AUTH`);

  return checkStatusOperation(dispatch, ()=>{}, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: actionType.AUTH_STATUS,
        payload: `AUTH`,
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
    .reply(200, {user: `data`});

  return loginOperation(dispatch, ()=>{}, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: actionType.AUTH_STATUS,
        payload: `AUTH`,
      });
    });
});
