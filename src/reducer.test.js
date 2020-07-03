import {reducer, actionCreator} from "./reducer.js";
import {offers as initialOffers, reviews} from "./mock/test/data.js";
import {offers as testOffers} from "./mock/test/data.js";

const mockCity = {
  name: `Berlin`,
  cityCoord: [52.38333, 4.9],
  zoom: 10
};

const initData = {
  city: initialOffers[0].city,
  offers: initialOffers,
  reviews,
  hoveredOfferId: null,
  currentOffer: null,
  sortType: `Popular`
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initData, {})).toEqual({
    city: initialOffers[0].city,
    offers: initialOffers,
    reviews,
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `Popular`
  });
});


it(`Reducer should change the city`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: initialOffers,
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`
      },
      actionCreator.changeCity(mockCity)
  ))
  .toEqual({
    city: mockCity,
    offers: initialOffers,
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `Popular`
  });
});

it(`Reducer should change the hoverOffer`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: initialOffers,
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`
      },
      actionCreator.hoverOffer(testOffers[0].id)
  ))
  .toEqual({
    city: initialOffers[0].city,
    offers: initialOffers,
    hoveredOfferId: testOffers[0].id,
    currentOffer: null,
    sortType: `Popular`
  });
});

it(`Reducer should change the currentOffer`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: initialOffers,
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`
      },
      actionCreator.getCurrentOffer(testOffers[0])
  ))
  .toEqual({
    city: initialOffers[0].city,
    offers: initialOffers,
    hoveredOfferId: null,
    currentOffer: testOffers[0],
    sortType: `Popular`
  });
});

it(`Reducer should change the sortType`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: initialOffers,
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`
      },
      actionCreator.changeSortType(`CostDesc`)
  ))
  .toEqual({
    city: initialOffers[0].city,
    offers: initialOffers,
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `CostDesc`
  });
});
