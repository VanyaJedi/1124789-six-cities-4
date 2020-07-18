
export const createOffer = (data) => {
  return {
    id: data.id.toString(),
    img: data.preview_image,
    images: data.images,
    title: data.title,
    desc: data.description,
    isPrime: data.is_premium,
    type: data.type,
    rate: data.rating,
    bedAmount: data.bedrooms,
    maxAdults: data.max_adults,
    cost: data.price.toString(),
    houseItems: data.goods,
    owner: {
      avatar: data.host.avatar_url,
      name: data.host.name,
      isSuper: data.host.is_pro
    },
    city: {
      name: data.city.name,
      cityCoord: [data.city.location.latitude, data.city.location.longitude],
      zoom: data.city.location.zoom
    },
    coordinates: [data.location.latitude, data.location.longitude]
  };
};
