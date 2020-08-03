import {extend} from "../../utils.js";

const initialState = {
  hoveredOfferId: null,
  currentOffer: null,
  sortType: `Popular`,
  rating: 0,
  isValidForm: true,
  isLoading: true,
};


const ActionType = {
  HOVER_OFFER: `HOVER_OFFER`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_RATING: `CHANGE_RATING`,
  CHANGE_FORM_STATUS: `CHANGE_FORM_STATUS`,
  CHANGE_LOADING: `CHANGE_LOADING`,
};


const ActionCreator = {
  hoverOffer: (id) => ({
    type: ActionType.HOVER_OFFER,
    payload: id
  }),
  getCurrentOffer: (offer) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: offer
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  changeRating: (rate) => ({
    type: ActionType.CHANGE_RATING,
    payload: rate
  }),
  changeFormStatus: (status) => ({
    type: ActionType.CHANGE_FORM_STATUS,
    payload: status
  }),
  changeLoading: (status) => ({
    type: ActionType.CHANGE_LOADING,
    payload: status
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.HOVER_OFFER:
      return extend(state, {hoveredOfferId: action.payload});
    case ActionType.SET_CURRENT_OFFER:
      return extend(state, {currentOffer: action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_RATING:
      return extend(state, {rating: action.payload});
    case ActionType.CHANGE_FORM_STATUS:
      return extend(state, {isValidForm: action.payload});
    case ActionType.CHANGE_LOADING:
      return extend(state, {isLoading: action.payload});
    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
