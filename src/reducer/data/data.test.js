import {reducer, actionCreator, Operation, actionType} from "./data.js";
import {offers as initialOffers, reviews} from "../../mock/test/data.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const api = createAPI(()=>{});

const mockCity = {
  name: `Berlin`,
  cityCoord: [52.38333, 4.9],
  zoom: 10
};

const initData = {
  city: initialOffers[0].city,
  offers: [],
  offersOnCity: [],
  reviews
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initData, {})).toEqual({
    city: initialOffers[0].city,
    offers: [],
    offersOnCity: [],
    reviews,
  });
});


it(`Reducer should change the city`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: [],
        offersOnCity: [],
        reviews,
      },
      actionCreator.changeCity(mockCity)
  ))
  .toEqual({
    city: mockCity,
    offers: [],
    offersOnCity: [],
    reviews,
  });
});

it(`Reducer should load the offers`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: [],
        offersOnCity: [],
        reviews,
      },
      actionCreator.loadOffers(initialOffers)
  ))
  .toEqual({
    city: initialOffers[0].city,
    offers: initialOffers,
    offersOnCity: [],
    reviews,
  });
});

it(`Reducer should load the offers on city`, () => {
  expect(reducer(
      {
        city: initialOffers[0].city,
        offers: [],
        offersOnCity: [],
        reviews,
      },
      actionCreator.cityOffers(initialOffers)
  ))
  .toEqual({
    city: initialOffers[0].city,
    offers: [],
    offersOnCity: initialOffers,
    reviews,
  });
});

it(`Should make the correct API call to /offers`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offersLoader = Operation.loadOffers();

  apiMock
    .onGet(`/hotels`)
    .reply(200, initialOffers);

  return offersLoader(dispatch, ()=>{}, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: actionType.LOAD_OFFERS,
        payload: initialOffers,
      });
    });
});

