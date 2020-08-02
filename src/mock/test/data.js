
export const offers = [
  {
    id: `1`,
    img: `img/apartment-02.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    title: `Beautiful & luxurious apartment at great location`,
    desc: `Beautiful & luxurious apartment at great location, Beautiful & luxurious apartment at great location`,
    isPrime: true,
    type: `apartament`,
    rate: 3.9,
    bedAmount: 2,
    maxAdults: 3,
    cost: `500`,
    houseItems: [`TV`, `Rope`, `Fridge`],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Katya`,
      isSuper: false
    },
    city: {
      name: `Paris`,
      cityCoord: [52.38333, 4.9],
      zoom: 14
    },
    coordinates: [52.369553943508, 4.85309666406198],
  },
  {
    id: `2`,
    img: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`],
    title: `Beautiful & luxurious apartment at great location`,
    desc: `Beautiful & luxurious apartment at great location, Beautiful & luxurious apartment at great location`,
    isPrime: false,
    type: `room`,
    rate: 2.1,
    bedAmount: 2,
    maxAdults: 3,
    cost: `100`,
    houseItems: [`TV`, `Rope`],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Ivan`,
      isSuper: true
    },
    city: {
      name: `Amsterdam`,
      cityCoord: [52.38333, 10.9],
      zoom: 16
    },
    coordinates: [52.369553943508, 4.85309666406198],
  },
];


export const reviews = [
  {
    id: `1`,
    text: `test reviewtest reviewtest reviewtest review`,
    rate: 2,
    userName: `Kirill`,
    date: new Date(`2019-04-22T10:20:30Z`)
  },
  {
    id: `2`,
    text: `olololololololo`,
    rate: 3,
    userName: `Masha`,
    date: new Date(`2019-04-22T10:20:30Z`)
  },
];

export const sortType = `Popular`;
export const sortTypeMapping = [
  {
    id: `1`,
    type: `Popular`,
    text: `Popular`
  },
  {
    id: `2`,
    type: `CostAsc`,
    text: `Price: low to high`
  },
  {
    id: `3`,
    type: `CostDesc`,
    text: `Price: high to low`
  },
  {
    id: `4`,
    type: `RateDesc`,
    text: `Top rated first`
  },
];

export const cities = [
  {
    name: `Paris`,
    cityCoord: [1, 2],
    zoom: 10
  },
  {
    name: `Amsterdam`,
    cityCoord: [2, 3],
    zoom: 14
  },
];

export const user = {
  id: 1,
  email: `123@gmail.com`,
  name: `sasha`,
  avatar: ``,
  isPro: false
};
