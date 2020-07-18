import {extend} from "../../utils.js";


const authorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: authorizationStatus.NO_AUTH,
};

const ActionType = {
  AUTH_STATUS: `AUTH_STATUS`,
};


const ActionCreator = {
  changeAuthStatus: (status) => ({
    type: ActionType.AUTH_STATUS,
    payload: status
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_STATUS:
      return extend(state, {authorizationStatus: action.payload});
    default:
      return state;
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.changeAuthStatus(authorizationStatus.AUTH));
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
        dispatch(ActionCreator.changeAuthStatus(authorizationStatus.AUTH));
      });
  },
};

export {reducer, Operation, ActionType, ActionCreator, authorizationStatus};
