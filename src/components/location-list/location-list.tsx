import * as React from "react";
import {City} from "../../types/types";

interface Props {
  onClickCity: (City) => void;
  city: City;
  cities: City[];
}

const LocationList: React.FunctionComponent<Props> = ({city, onClickCity, cities}: Props) => {
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

export default LocationList;
