
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
    coordinates: [52.369553943508, 4.85309666406198]
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
    coordinates: [52.369553943508, 4.85309666406198]
  },
];


export const reviews = [
  {
    id: `1`,
    text: `test reviewtest reviewtest reviewtest review`,
    rate: 2,
    userName: `Kirill`,
    date: new Date(`2007-10-09`)
  },
  {
    id: `2`,
    text: `olololololololo`,
    rate: 3,
    userName: `Masha`,
    date: new Date(`1996-07-17`)
  },
];
