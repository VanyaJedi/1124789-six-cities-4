const sortType = {
  POPULAR: `Popular`,
  COST_ASC: `CostAsc`,
  COST_DESC: `CostDesc`,
  RATE_DESC: `RateDesc`
};

const CITIES_TO_SHOW = 6;

export const getCities = (offers) => {
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
};

export const getOffersOnCity = (allOffers, city) => {
  return allOffers.filter((offer) => {
    return offer.city.name === city.name;
  });
};

export const getSortedOffers = (type, offers) => {
  switch (type) {
    case sortType.POPULAR:
      return offers.slice();
    case sortType.COST_ASC:
      return offers.slice().sort((prev, curr) => {
        return parseInt(prev.cost, 10) - parseInt(curr.cost, 10);
      });
    case sortType.COST_DESC:
      return offers.slice().sort((prev, curr) => {
        return parseInt(curr.cost, 10) - parseInt(prev.cost, 10);
      });
    case sortType.RATE_DESC:
      return offers.slice().sort((prev, curr) => {
        return curr.rate - prev.rate;
      });
    default:
      return offers.slice();
  }
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
