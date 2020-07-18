export const createCity = (data) => {
  if (!data) {
    return {
      name: ``,
      cityCoord: [0, 0],
      zoom: 1
    };
  }

  if (data.cityCoord) {
    return data;
  }

  return {
    name: data.name,
    cityCoord: [data.location.latitude, data.location.longitude],
    zoom: data.location.zoom
  };
};
