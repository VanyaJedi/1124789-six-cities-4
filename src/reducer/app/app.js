import {extend} from "../../utils.js";

const initialState = {
  hoveredOfferId: null,
  currentOffer: null,
  sortType: `Popular`,
  authScreen: false,
};


const actionType = {
  HOVER_OFFER: `HOVER_OFFER`,
  GET_CURRENT_OFFER: `GET_CURRENT_OFFER`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  SHOW_AUTH_SCREEN: `SHOW_AUTH_SCRENN`,
};


const actionCreator = {
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
  }),
  showAuthScreen: (isAuth) => ({
    type: actionType.SHOW_AUTH_SCREEN,
    payload: isAuth
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHOW_AUTH_SCREEN:
      return extend(state, {authScreen: action.payload});
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


export {reducer, actionType, actionCreator};
