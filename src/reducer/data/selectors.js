
import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {createOffer} from "../../adapters/offers.js";
import {createCity} from "../../adapters/city.js";
import {createReview} from "../../adapters/reviews.js";
import {CITIES_TO_SHOW} from '../../constants.js';

const NAME_SPACE = NameSpace.DATA;

export const getCity = (state) => {
  return createCity(state[NAME_SPACE].city);
};

export const getOffers = (state) => {
  return state[NAME_SPACE].offers.map((offer) => createOffer(offer));
};

export const getNearbyOffers = (state) => {
  return state[NAME_SPACE].nearbyOffers.map((offer) => createOffer(offer));
};

export const getFavorites = (state) => {
  return state[NAME_SPACE].favorites.map((offer) => createOffer(offer));
};

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews.map((review) => createReview(review));
};

export const getInitCity = createSelector(
    [getOffers],
    (offers) => {
      if (offers.length) {
        return offers[0].city;
      }
      return ``;
    }
);

export const getFilteredOffers = createSelector(
    [getCity, getOffers],
    (city, offers) => {
      return offers.filter((offer) => offer.city.name === city.name);
    }
);


export const getCities = createSelector(
    [getOffers],
    (offers) => {
      const result = [];
      for (const value of Object.values(offers)) {
        if (result.findIndex((city) => (city.name === value.city.name)) === -1) {
          result.push(value.city);
        }
        if (result.length >= CITIES_TO_SHOW) {
          return result;
        }
      }
      return result;
    }
);


