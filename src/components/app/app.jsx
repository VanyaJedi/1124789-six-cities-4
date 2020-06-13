import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = ({offers}) => {
  return (
    <Main offers={offers} />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
      })
  )
};

export default App;
