import {extend} from "../../utils.js";

const initialState = {
  user: null
};

const ActionType = {
  SET_USER: `SET_USER`,
};


const ActionCreator = {
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return extend(state, {user: action.payload});
    default:
      return state;
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((res) => {
        dispatch(ActionCreator.setUser(res.data));
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
      .then((res) => {
        dispatch(ActionCreator.setUser(res.data));
      });
  },
};

export {reducer, Operation, ActionType, ActionCreator};
