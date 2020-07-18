import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator as ActionCreatorUser, authorizationStatus} from "./reducer/user/user.js";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import {createAPI} from './api.js';

const onUnauth = () => {
  store.dispatch(ActionCreatorUser.changeAuthStatus(authorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauth);
const middlewares = [thunk.withExtraArgument(api)];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

store.dispatch(UserOperation.checkAuth());

store.dispatch(DataOperation.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.querySelector(`#root`)
);
