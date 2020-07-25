import {extend} from "../../utils.js";

const initialState = {
  hoveredOfferId: null,
  currentOffer: null,
  sortType: `Popular`,
};


const ActionType = {
  HOVER_OFFER: `HOVER_OFFER`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.HOVER_OFFER:
      return extend(state, {hoveredOfferId: action.payload});
    case ActionType.SET_CURRENT_OFFER:
      return extend(state, {currentOffer: action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {sortType: action.payload});
    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
