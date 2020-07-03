import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer.js";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.querySelector(`#root`)
);
