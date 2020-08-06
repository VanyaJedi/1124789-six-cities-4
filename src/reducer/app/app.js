import {extend} from "../../utils.js";

const initialState = {
  hoveredOfferId: null,
  currentOffer: null,
  sortType: `Popular`,
  isLoading: true,
  isSubmiting: false,
  isError: false
};


const ActionType = {
  HOVER_OFFER: `HOVER_OFFER`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_LOADING: `CHANGE_LOADING`,
  CHANGE_SUBMITING: `CHANGE_SUBMITING`,
  CHANGE_ERROR: `CHANGE_ERROR`,
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
  changeSubmiting: (status) => ({
    type: ActionType.CHANGE_SUBMITING,
    payload: status
  }),
  changeError: (status) => ({
    type: ActionType.CHANGE_ERROR,
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
    case ActionType.CHANGE_LOADING:
      return extend(state, {isLoading: action.payload});
    case ActionType.CHANGE_SUBMITING:
      return extend(state, {isSubmiting: action.payload});
    case ActionType.CHANGE_ERROR:
      return extend(state, {isError: action.payload});
    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
