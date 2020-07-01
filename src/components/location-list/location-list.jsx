import React from "react";
import PropTypes from "prop-types";
import {getCities} from "../../utils.js";
import {offers} from "../../mock/data.js";

const LocationList = ({city, onClickCity}) => {
  const locations = getCities(offers);
  return (
    <ul className="locations__list tabs__list">
      {locations.map((location, index) => {
        return (
          <li key={location.name + index} className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                onClickCity(location);
              }}
              className={location.name === city.name ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
              <span>{location.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

LocationList.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cityCoord: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  onClickCity: PropTypes.func.isRequired,
};


export default LocationList;
