import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from "./reducer/reducer";
import {Operation as DataOperation} from "./reducer/data/data";
import {Operation as UserOperation, ActionCreator as ActionCreatorUser} from "./reducer/user/user";
import {ActionCreator as ActionCreatorApp} from "./reducer/app/app";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {Provider} from "react-redux";
import {createAPI} from './api';
import history from './history';

const onUnauth = () => {
  store.dispatch(ActionCreatorUser.setUser(null));
};

const api = createAPI(onUnauth);
const middlewares = [thunk.withExtraArgument(api)];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

store.dispatch(UserOperation.checkAuth());

store.dispatch(DataOperation.loadOffers())
.then(() => {
  store.dispatch(DataOperation.loadFavorites());
  const location = history.location.pathname;
  const isOffer = location.match(/\/offer\/(\d)+/);
  if (isOffer) {
    store.dispatch(DataOperation.getComments(isOffer[1]));
    store.dispatch(DataOperation.loadNearbyOffers(isOffer[1]));
  }
})
.then(() => {
  store.dispatch(ActionCreatorApp.changeLoading(false));
})
.catch(() => {
  store.dispatch(ActionCreatorApp.changeLoading(false));
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.querySelector(`#root`)
);
