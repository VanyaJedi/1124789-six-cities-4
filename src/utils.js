export const getCities = function (offers) {
  const result = [];
  for (const value of Object.values(offers)) {
    if (result.findIndex((city) => (city.name === value.city.name)) === -1) {
      result.push(value.city);
    }
    if (result.length >= 6) {
      return result;
    }
  }
  return result;
};

export const getOffers = (allOffers, city) => {
  return allOffers.filter((offer) => {
    return offer.city.name === city.name;
  });
};
