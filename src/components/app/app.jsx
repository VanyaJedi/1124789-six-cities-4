import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = ({rentAmount, offerNames}) => {
  return (
    <Main rentAmount={rentAmount}
      offerNames={offerNames} />
  );
};

App.propTypes = {
  rentAmount: PropTypes.number.isRequired,
  offerNames: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        offer: PropTypes.string.isRequired
      })
  )
};

export default App;
