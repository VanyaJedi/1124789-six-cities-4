import {reducer, ActionCreator, Operation, ActionType} from "./data.js";
import {offers as initialOffers, reviews} from "../../mock/test/data.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const onAuth = jest.fn();

const api = createAPI(onAuth);

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
      ActionCreator.changeCity(mockCity)
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
      ActionCreator.loadOffers(initialOffers)
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
      ActionCreator.cityOffers(initialOffers)
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

  return offersLoader(dispatch, ()=> {
    return {DATA: {city: null}};
  }, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_OFFERS,
        payload: initialOffers,
      });
    });
});

it(`Should make the correct API call to /favorites`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const favoritesLoader = Operation.loadFavorites();

  apiMock
    .onGet(`/favorite`)
    .reply(200, initialOffers);

  return favoritesLoader(dispatch, ()=> {
    return {DATA: {city: null}};
  }, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
});


it(`Should make the correct API call to /comments`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const commentsLoader = Operation.getComments(1);

  apiMock
    .onGet(`/comments/1`)
    .reply(200, reviews);

  return commentsLoader(dispatch, ()=> {
    return {DATA: {city: null}};
  }, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
});

it(`Should add the comment`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const commentsLoader = Operation.addComment({
    id: `1`,
    comment: `test test test test test`,
    rating: 1,
  });

  apiMock
    .onPost(`/comments/1`, {
      comment: `test test test test test`,
      rating: 1,
    })
    .reply(200, reviews[0]);

  return commentsLoader(dispatch, ()=> {
    return {DATA: {city: null}};
  }, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(2);
    })
    .catch(()=> {
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
});


it(`Should add to favorites`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const favoritesLoader = Operation.addToFavorites({
    id: `1`,
    status: 1,
  });

  apiMock
    .onPost(`/favorite/1/1`)
    .reply(200, initialOffers[0]);

  return favoritesLoader(dispatch, ()=> {
    return {DATA: {city: null}};
  }, api)
    .then(()=> {
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
});


