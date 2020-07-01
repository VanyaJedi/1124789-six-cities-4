import {reducer, actionCreator} from "./reducer.js";
import {offers as initialOffers} from "./mock/data.js";
import {offers as testOffers} from "./mock/test/data.js";

const mockCity = {
  name: `Berlin`,
  cityCoord: [52.38333, 4.9],
  zoom: 10
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: initialOffers[0].city,
    offers: initialOffers,
    hoveredOffer: {},
    currentOffer: null
  });
});


it(`Reducer should change the city`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: initialOffers,
        hoveredOffer: {},
        currentOffer: null
      },
      actionCreator.changeCity(mockCity)
  ))
  .toEqual({
    city: mockCity,
    offers: initialOffers,
    hoveredOffer: {},
    currentOffer: null
  });
});

it(`Reducer should change the hoverOffer`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: initialOffers,
        hoveredOffer: {},
        currentOffer: null
      },
      actionCreator.hoverOffer(testOffers[0])
  ))
  .toEqual({
    city: initialOffers[0].city,
    offers: initialOffers,
    hoveredOffer: testOffers[0],
    currentOffer: null
  });
});

it(`Reducer should change the currentOffer`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: initialOffers,
        hoveredOffer: {},
        currentOffer: null
      },
      actionCreator.getCurrentOffer(testOffers[0])
  ))
  .toEqual({
    city: initialOffers[0].city,
    offers: initialOffers,
    hoveredOffer: {},
    currentOffer: testOffers[0]
  });
});
