import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";


const Settings = {
  RENT_AMOUNT: 312
};

ReactDOM.render(
    <App rentAmount={Settings.RENT_AMOUNT}/>,
    document.querySelector(`#root`)
);
