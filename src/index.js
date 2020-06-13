import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";


const Settings = {
  RENT_AMOUNT: 312,
  OFFER_NAMES:
    [
      {id: `1`,
        offer: `Beautiful & luxurious apartment at great location`
      },
      {id: `2`,
        offer: `Wood and stone place`
      }
    ]
};

ReactDOM.render(
    <App rentAmount={Settings.RENT_AMOUNT}
      offerNames={Settings.OFFER_NAMES}
    />,
    document.querySelector(`#root`)
);
