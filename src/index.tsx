import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator as ActionCreatorUser} from "./reducer/user/user.js";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import {createAPI} from './api.js';
import {AppRoute} from "./constants.js";
import history from "./history.js";

const onUnauth = () => {
  store.dispatch(ActionCreatorUser.setUser(null));
  //history.push(AppRoute.SIGNIN);
};

const api = createAPI(onUnauth);
const middlewares = [thunk.withExtraArgument(api)];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

store.dispatch(UserOperation.checkAuth());

store.dispatch(DataOperation.loadOffers());
store.dispatch(DataOperation.loadFavorites());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.querySelector(`#root`)
);
