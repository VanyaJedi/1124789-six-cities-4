
import {extend} from "../../utils.js";
import {createOffers} from "../../adapters/offers.js";

const initialState = {
  city: ``,
  offers: [],
  offersOnCity: [],
  reviews: [],
};

const actionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CITY_OFFERS: `CITY_OFFERS`
};

const actionCreator = {
  changeCity: (city) => ({
    type: actionType.CITY_CHANGE,
    payload: city
  }),

  loadReviews: (reviews) => {
    return {
      type: actionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },

  loadOffers: (offers) => {
    return {
      type: actionType.LOAD_OFFERS,
      payload: offers,
    };
  },

  cityOffers: (offers) => {
    return {
      type: actionType.CITY_OFFERS,
      payload: offers,
    };
  }
};


const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const adaptData = response.data.map((offer) => {
          return createOffers(offer);
        });
        dispatch(actionCreator.changeCity(adaptData[0].city));
        dispatch(actionCreator.loadOffers(adaptData));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CITY_CHANGE:
      return extend(state, {city: action.payload});
    case actionType.LOAD_REVIEWS:
      return extend(state, {reviews: action.payload});
    case actionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case actionType.CITY_OFFERS:
      return extend(state, {offersOnCity: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, actionType, actionCreator};
