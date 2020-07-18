
import {extend} from "../../utils.js";

const initialState = {
  city: null,
  offers: [],
  offersOnCity: [],
  reviews: [],
};

const ActionType = {
  INIT_CITY: `INIT_CITY`,
  CITY_CHANGE: `CITY_CHANGE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CITY_OFFERS: `CITY_OFFERS`
};

const ActionCreator = {

  changeCity: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city
  }),

  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },

  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },

  cityOffers: (offers) => {
    return {
      type: ActionType.CITY_OFFERS,
      payload: offers,
    };
  }
};


const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.changeCity(response.data[0].city));
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INIT_CITY:
      return extend(state, {city: action.payload});
    case ActionType.CITY_CHANGE:
      return extend(state, {city: action.payload});
    case ActionType.LOAD_REVIEWS:
      return extend(state, {reviews: action.payload});
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.CITY_OFFERS:
      return extend(state, {offersOnCity: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
