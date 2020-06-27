import React from "react";
import leaflet from 'leaflet';
import PropTypes from "prop-types";
import {offerType} from "../../types/dataTypes.js";

export default class MapElement extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePoint: null,
    };
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom: 12,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    const {offers} = this.props;

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(map);
    });
  }

  render() {
    return <div id="map" style={{height: `100%`, width: `100%`}}></div>;
  }
}

MapElement.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  )
};
