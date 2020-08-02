import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from "./reducer/reducer";
import {Operation as DataOperation} from "./reducer/data/data";
import {Operation as UserOperation, ActionCreator as ActionCreatorUser} from "./reducer/user/user";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {Provider} from "react-redux";
import {createAPI} from './api';

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

store.dispatch(DataOperation.loadOffers());
store.dispatch(DataOperation.loadFavorites());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.querySelector(`#root`)
);
