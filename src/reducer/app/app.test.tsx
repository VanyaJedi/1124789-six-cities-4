import {reducer, ActionCreator} from "./app.js";
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
      ActionCreator.hoverOffer(testOffers[0].id)
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
      ActionCreator.getCurrentOffer(testOffers[0])
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
      ActionCreator.changeSortType(`CostDesc`)
  ))
  .toEqual({
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `CostDesc`
  });
});

it(`Reducer should change loading status`, () => {
  expect(reducer(
      {
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`,
        isLoading: true,
        isSubmiting: false
      },
      ActionCreator.changeLoading(false)
  ))
  .toEqual({
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `Popular`,
    isLoading: false,
    isSubmiting: false
  });
});

it(`Reducer should change submiting status`, () => {
  expect(reducer(
      {
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`,
        isLoading: true,
        isSubmiting: false
      },
      ActionCreator.changeSubmiting(true)
  ))
  .toEqual({
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `Popular`,
    isLoading: true,
    isSubmiting: true
  });
});


it(`Reducer should change error status`, () => {
  expect(reducer(
      {
        hoveredOfferId: null,
        currentOffer: null,
        sortType: `Popular`,
        isLoading: true,
        isSubmiting: false,
        isError: false
      },
      ActionCreator.changeError(true)
  ))
  .toEqual({
    hoveredOfferId: null,
    currentOffer: null,
    sortType: `Popular`,
    isLoading: true,
    isSubmiting: false,
    isError: true
  });
});
