import {extend} from "../../utils.js";


const authorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: authorizationStatus.NO_AUTH,
};

const actionType = {
  AUTH_STATUS: `AUTH_STATUS`,
};


const actionCreator = {
  changeAuthStatus: (status) => ({
    type: actionType.AUTH_STATUS,
    payload: status
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_STATUS:
      return extend(state, {authorizationStatus: action.payload});
    default:
      return state;
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(actionCreator.changeAuthStatus(authorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(actionCreator.changeAuthStatus(authorizationStatus.AUTH));
      });
  },
};

export {reducer, Operation, actionType, actionCreator};
