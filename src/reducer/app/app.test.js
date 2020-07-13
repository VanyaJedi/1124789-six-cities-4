import {reducer, actionCreator} from "./app.js";
import {offers as testOffers} from "../../mock/test/data.js";


const initData = {
  hoveredOfferId: null,
  currentOffer: null,
  sortType: `Popular`
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initData, {})).toEqual({
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `Popular`
  });
});

it(`Reducer should change the hoverOffer`, () => {
  expect(reducer(
      {
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`
      },
      actionCreator.hoverOffer(testOffers[0].id)
  ))
  .toEqual({
    hoveredOfferId: testOffers[0].id,
    currentOffer: null,
    sortType: `Popular`
  });
});

it(`Reducer should change the currentOffer`, () => {
  expect(reducer(
      {
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`
      },
      actionCreator.getCurrentOffer(testOffers[0])
  ))
  .toEqual({
    hoveredOfferId: null,
    currentOffer: testOffers[0],
    sortType: `Popular`
  });
});

it(`Reducer should change the sortType`, () => {
  expect(reducer(
      {
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`
      },
      actionCreator.changeSortType(`CostDesc`)
  ))
  .toEqual({
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `CostDesc`
  });
});
