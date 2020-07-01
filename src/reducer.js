import {offers as initialOffers} from "./mock/data.js";

const initialState = {
  city: initialOffers[0].city,
  offers: initialOffers,
  hoveredOffer: {},
  currentOffer: null
};


const actionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_OFFERS: `GET_OFFERS`,
  HOVER_OFFER: `HOVER_OFFER`,
  GET_CURRENT_OFFER: `GET_CURRENT_OFFER`
};


export const actionCreator = {
  changeCity: (city) => ({
    type: actionType.CITY_CHANGE,
    payload: city
  }),
  hoverOffer: (offer) => ({
    type: actionType.HOVER_OFFER,
    payload: offer
  }),
  getCurrentOffer: (offer) => ({
    type: actionType.GET_CURRENT_OFFER,
    payload: offer
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CITY_CHANGE:
      return Object.assign({}, state, {city: action.payload});
    case actionType.HOVER_OFFER:
      return Object.assign({}, state, {hoveredOffer: action.payload});
    case actionType.GET_CURRENT_OFFER:
      return Object.assign({}, state, {currentOffer: action.payload});
    default:
      return state;
  }
};

