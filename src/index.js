import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, actionCreatorUser, authorizationStatus} from "./reducer/user/user.js";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import {createAPI} from './api.js';


const onUnauth = () => {
  store.dispatch(actionCreatorUser.changeAuthStatus(authorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauth);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
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
