import nameSpace from "../name-space.js";


const NAME_SPACE = nameSpace.APP;

export const getHoveredOfferId = (state) => {
  return state[NAME_SPACE].hoveredOfferId;
};

export const getCurrentOffer = (state) => {
  return state[NAME_SPACE].currentOffer;
};

export const getSortType = (state) => {
  return state[NAME_SPACE].sortType;
};

export const getAuthScreenStatus = (state) => {
  return state[NAME_SPACE].showAuthScreen;
};
