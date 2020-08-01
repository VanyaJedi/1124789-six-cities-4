import * as React from "react"
import PropTypes from "prop-types";
import {cityType} from "../../types/dataTypes";

const LocationList = ({city, onClickCity, cities}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((location, index) => {
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
  cities: PropTypes.arrayOf(cityType),
  city: cityType,
  onClickCity: PropTypes.func.isRequired,
};


export default LocationList;
