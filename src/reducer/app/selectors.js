import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.APP;

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

export const getRating = (state) => {
  return state[NAME_SPACE].rating;
};

export const getFormStatus = (state) => {
  return state[NAME_SPACE].isValidForm;
};

export const getLoadingStatus = (state) => {
  return state[NAME_SPACE].isLoading;
};

export const getSubmitingStatus = (state) => {
  return state[NAME_SPACE].isSubmiting;
};

export const getErrorStatus = (state) => {
  return state[NAME_SPACE].isError;
};
