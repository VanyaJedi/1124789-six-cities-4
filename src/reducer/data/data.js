
import {extend} from "../../utils.js";
import {getCurrentOffer} from "../app/selectors.js";
import {getCity} from "./selectors";
import {ActionCreator as ActionCreatorApp} from "../app/app";
import history from "../../history";
import {AppRoute} from "../../constants";

const initialState = {
  city: null,
  offers: [],
  offersOnCity: [],
  nearbyOffers: [],
  reviews: [],
  favorites: []
};

const ActionType = {
  INIT_CITY: `INIT_CITY`,
  CITY_CHANGE: `CITY_CHANGE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  CITY_OFFERS: `CITY_OFFERS`,
  ADD_COMMENT: `ADD_COMMENT`,
  LOAD_FAVORITES: `LOAD_FAVORITES`
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

  loadNearbyOffers: (offers) => {
    return {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offers,
    };
  },

  cityOffers: (offers) => {
    return {
      type: ActionType.CITY_OFFERS,
      payload: offers,
    };
  },

  addComment: (comment) => {
    return {
      type: ActionType.ADD_COMMENT,
      payload: comment,
    };
  },

  loadFavorites: (offers) => {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: offers
    };
  }
};


const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        if (!getCity(getState()).name) {
          dispatch(ActionCreator.changeCity(response.data[0].city));
        }
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },

  loadNearbyOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearbyOffers(response.data));
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  },

  getComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },

  addComment: (data) => (dispatch, getState, api) => {
    dispatch(ActionCreatorApp.changeSubmiting(true));
    return api.post(`/comments/${data.id}`, {
      comment: data.comment,
      rating: data.rating,
    })
    .then((response) => {
      dispatch(ActionCreator.loadReviews(response.data));
      dispatch(ActionCreatorApp.changeSubmiting(false));
      return true;
    })
    .catch(()=> {
      dispatch(ActionCreatorApp.changeSubmiting(false));
      return false;
    });
  },

  addToFavorites: (data) => (dispatch, getState, api) => {
    return api.post(`/favorite/${data.id}/${data.status}`)
    .then(() => {
      dispatch(Operation.loadOffers());
      const currentOffer = getCurrentOffer(getState());
      dispatch(Operation.loadFavorites());
      if (currentOffer) {
        dispatch(Operation.loadNearbyOffers(currentOffer.id));
      }
    })
    .catch(() => {
      history.push(AppRoute.SIGNIN);
    });
  }
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
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {nearbyOffers: action.payload});
    case ActionType.LOAD_FAVORITES:
      return extend(state, {favorites: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
