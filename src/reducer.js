import {offers, reviews} from "./mock/data.js";
import {extend} from "./utils.js";

const initialState = {
  city: offers[0].city,
  offers,
  reviews,
  hoveredOfferId: null,
  currentOffer: null,
  sortType: `Popular`
};


const actionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_OFFERS: `GET_OFFERS`,
  HOVER_OFFER: `HOVER_OFFER`,
  GET_CURRENT_OFFER: `GET_CURRENT_OFFER`,
  GET_REVIEWS: `GET_REVIEWS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};


export const actionCreator = {
  changeCity: (city) => ({
    type: actionType.CITY_CHANGE,
    payload: city
  }),
  hoverOffer: (id) => ({
    type: actionType.HOVER_OFFER,
    payload: id
  }),
  getCurrentOffer: (offer) => ({
    type: actionType.GET_CURRENT_OFFER,
    payload: offer
  }),
  changeSortType: (sortType) => ({
    type: actionType.CHANGE_SORT_TYPE,
    payload: sortType
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CITY_CHANGE:
      return extend(state, {city: action.payload});
    case actionType.HOVER_OFFER:
      return extend(state, {hoveredOfferId: action.payload});
    case actionType.GET_CURRENT_OFFER:
      return extend(state, {currentOffer: action.payload});
    case actionType.CHANGE_SORT_TYPE:
      return extend(state, {sortType: action.payload});
    default:
      return state;
  }
};

